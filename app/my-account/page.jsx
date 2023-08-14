"use client";

import styles from "@/components/styles";
import { signOut } from "@/redux/features/authSlice";
import {
  Profile,
  Location,
  OrderCart,
  CreditCart,
  HeartFill,
  Dashboard,
} from "@/utils/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyAccount = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authSlice);
  const [admin, setAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    } else {
      setAdmin(user.admin);
    }
    return () => null;
  }, [user]);

  const infoCarts = [
    {
      title: "Information",
      url: "my-account/information",
      icon: <Profile className="w-10 h-10" />,
    },
    {
      title: "Add you address",
      url: "my-account/address",
      icon: <Location className="w-10 h-10" />,
    },
    {
      title: "Order History and Details",
      url: "my-account/information",
      icon: <OrderCart className="w-10 h-10" />,
    },
    {
      title: "Credit Slips",
      url: "my-account/information",
      icon: <CreditCart className="w-10 h-10" />,
    },
    {
      title: "My wishlists",
      url: "my-account/information",
      icon: <HeartFill className="w-10 h-10" />,
    },
  ];

  return (
    <div className={`my-account mt-10 ${styles.paddingX}`}>
      <div className="container">
        <h1 className={`${styles.h1} text-center`}>My Account</h1>
        {admin && (
          <p className="text-green-500 text-base font-semibold mt-4 text-center">
            Admin
          </p>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 content-center mt-10 max-w-4xl mx-auto max-[400px]:grid-cols-1">
          {infoCarts.map((cart) => (
            <Link
              key={cart.url}
              href={cart.url}
              className="w-full border border-slate-400 py-6 px-7 flex flex-col gap-3 items-center hover:shadow-md transition-shadow duration-300 text-heading_color hover:border-white"
            >
              {cart.icon}
              <span className="uppercase text-base text-center mt-2">
                {cart.title}
              </span>
            </Link>
          ))}
          {admin && (
            <Link
              href={"/my-account/dashboard"}
              className="w-full border border-slate-400 py-6 px-7 flex flex-col gap-3 items-center hover:shadow-md transition-shadow duration-300 text-heading_color hover:border-white"
            >
              <Dashboard className="w-10 h-10" />
              <span className="uppercase text-base text-center mt-2">
                Dashboard
              </span>
            </Link>
          )}
        </div>
        <button
          type="button"
          className="mt-10 block mx-auto px-4 md:px-6 py-2 text-sm md:text-base bg-primary_btn_bg hover:bg-primary_btn_bg_hover text-primary_btn_text hover:text-primary_btn_text_hover"
          onClick={() => dispatch(signOut())}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
