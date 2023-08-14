import { auth, db } from "@/firebase/firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const logInWithGoogle = createAsyncThunk(
  "auth/logInWithGoogle",
  async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result.user;
  }
);

// get data from local storage
const storage =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storage ? storage : null,
    error: null,
  },

  reducers: {
    signOut: (state) => {
      const confirm = window.confirm("Are you sure to sign out?");
      if (confirm) {
        state.user = null;
        localStorage.removeItem("user");
      }
      return;
    },

    signInWithPassEmail: (state, { payload }) => {
      // check whether the user is admin or not
      if (payload.uid === process.env.NEXT_PUBLIC_ADMIN_ID) {
        state.user = { ...payload, admin: true };
        localStorage.setItem(
          "user",
          JSON.stringify({ ...payload, admin: true })
        );
      } else {
        state.user = { ...payload, role: "user" };
        localStorage.setItem(
          "user",
          JSON.stringify({ ...payload, role: "user" })
        );
      }
    },
  },

  //   extra reducers

  extraReducers: (builder) => {
    builder.addCase(logInWithGoogle.fulfilled, (state, { payload }) => {
      // check whether the user is admin or not
      if (payload.uid === process.env.NEXT_PUBLIC_ADMIN_ID) {
        state.user = { ...payload, admin: true };
        localStorage.setItem(
          "user",
          JSON.stringify({ ...payload, admin: true })
        );
      } else {
        state.user = { ...payload, role: "user" };
        localStorage.setItem(
          "user",
          JSON.stringify({ ...payload, role: "user" })
        );
      }

      // store the user data in firebase
      const docRef = doc(db, "users", payload.uid);

      setDoc(docRef, {
        name: payload.displayName,
      }).catch((err) => (state.error = err));
    }),
      // if rejected
      builder.addCase(logInWithGoogle.rejected, (state, { _, error }) => {
        state.error = error.message;
      });
  },
});

export const { signOut, signInWithPassEmail } = authSlice.actions;
export default authSlice.reducer;
