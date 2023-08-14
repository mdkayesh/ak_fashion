"use client";

import styles from "@/components/styles";
import { auth, db } from "@/firebase/firebase";
import {
  logIn,
  logInWithGoogle,
  signInWithPassEmail,
} from "@/redux/features/authSlice";

import { Google } from "@/utils/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({
    user_email: "",
    user_pass: "",
  });
  const [error, setError] = useState("");

  // redux
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const router = useRouter();

  const _styles = {
    label: "text-heading_color font-semibold block w-full mb-2 mt-4 text-lg",
    input: "py-2 px-4 outline-none border w-full focus-within:border-primary",
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
    return () => null;
  }, [user]);

  const handleChange = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    if (!userInfo.user_email && !userInfo.user_pass) return;

    signInWithEmailAndPassword(auth, userInfo.user_email, userInfo.user_pass)
      .then((cred) => {
        setUserInfo({
          user_email: "",
          user_pass: "",
        });

        dispatch(signInWithPassEmail(cred.user));
      })
      .catch((err) => setError(err.message.split(":")[1]));
  };

  return (
    <div className={`${styles.paddingX}`}>
      <div className="container mt-10">
        <h1 className={`${styles.h1} mx-auto w-fit mb-10`}>
          Log in with your account
        </h1>
        <form action="" onSubmit={signIn}>
          <div className="max-w-lg mx-auto">
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
            {error && <p className="text-red-600">{error}</p>}
            <div className="flex justify-end">
              <Link
                href={"/register"}
                className="mt-2 text-black hover:text-primary"
              >
                Have account?Create an account
              </Link>
            </div>
            <div className="flex items-center gap-5 justify-center">
              <hr />
              <span>Or</span>
              <hr />
            </div>
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
              className="px-6 py-2 mt-5 bg-primary_btn_bg text-primary_btn_text hover:bg-primary_btn_bg_hover hover:text-primary_btn_text_hover transition-colors duration-300"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
