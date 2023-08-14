"use client";

import styles from "@/components/styles";
import { auth, db } from "@/firebase/firebase";
import {
  logIn,
  logInWithGoogle,
  signInWithPassEmail,
} from "@/redux/features/authSlice";

import { Google } from "@/utils/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    user_name: "",
    user_birthdate: "",
    user_email: "",
    user_pass: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // redux
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
    return () => null;
  }, [user]);

  // handle change

  const handleChange = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // signin method

  const signIn = async (e) => {
    e.preventDefault();

    if (!userInfo.user_email && !userInfo.user_pass) return;

    try {
      setLoading(true);
      // create an account in firebase
      const cred = await createUserWithEmailAndPassword(
        auth,
        userInfo.user_email,
        userInfo.user_pass
      );

      // reset the form

      setUserInfo({
        user_name: "",
        user_birthdate: "",
        user_email: "",
        user_pass: "",
      });

      dispatch(signInWithPassEmail(cred.user));

      // set the additonal user data
      const docRef = doc(db, "users", cred.user.uid);

      await setDoc(docRef, {
        name: userInfo.user_name,
        birthdate: userInfo.user_birthdate,
      });

      // set the loading

      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  // styles

  const _styles = {
    label: "text-heading_color font-semibold block w-full mb-2 mt-4 text-lg",
    input: "py-2 px-4 outline-none border w-full focus-within:border-primary",
  };

  return (
    <div className={`${styles.paddingX}`}>
      <div className="container mt-10">
        <h1 className={`${styles.h1} mx-auto w-fit mb-10`}>
          Easily Create Your Account
        </h1>
        <form action="" onSubmit={signIn}>
          <div className="max-w-lg mx-auto">
            <label htmlFor="user-name" className={_styles.label}>
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user-name"
              placeholder="Enter Your Fullname"
              required
              value={userInfo.user_name}
              className={_styles.input}
              onChange={handleChange}
            />
            <label htmlFor="user_birthdate" className={_styles.label}>
              Date of Birth
            </label>
            <input
              type="date"
              name="user_birthdate"
              id="user-birthdate"
              placeholder="Your birthdate"
              required
              value={userInfo.user_birthdate}
              className={_styles.input}
              onChange={handleChange}
            />

            <label htmlFor="user-email" className={_styles.label}>
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user-email"
              placeholder="example@gmail.com"
              required
              value={userInfo.user_email}
              className={_styles.input}
              onChange={handleChange}
            />
            <label htmlFor="user-pass" className={_styles.label}>
              Password
            </label>
            <input
              type="password"
              name="user_pass"
              id="user-pass"
              placeholder="password"
              value={userInfo.user_pass}
              required
              className={_styles.input}
              onChange={handleChange}
            />
            <button
              type="button"
              className="w-full py-2 px-4 rounded-md bg-gray-900 flex gap-4 items-center text-white mt-6"
              onClick={() => dispatch(logInWithGoogle())}
            >
              <Google />
              <span>Log in with google</span>
            </button>
            <button
              type="submit"
              className={`${
                loading ? "animate-pulse" : ""
              } relative px-6 py-2 mt-5 bg-primary_btn_bg text-primary_btn_text hover:bg-primary_btn_bg_hover hover:text-primary_btn_text_hover transition-colors duration-300`}
            >
              {loading ? "Loading.." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
