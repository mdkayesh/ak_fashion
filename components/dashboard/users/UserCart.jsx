"use client";

import styles from "@/components/styles";
import { setUserModal } from "@/redux/features/modalSlice";
import { Eye, Message, Phone } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const UserCart = () => {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.shadow} p-6 rounded-xl`}>
      <div className="flex gap-4 relative">
        <div
          className="absolute top-0 right-0 cursor-pointer"
          onClick={() => dispatch(setUserModal())}
        >
          <Eye />
        </div>
        <div className="min-w-[60px] overflow-hidden rounded-md">
          <Image
            src={"/assets/user.png"}
            width={60}
            height={60}
            className="w-full h-full object-cover"
            alt="user"
          />
        </div>
        <div className="content">
          <Link
            href={""}
            className="mb-1 block text-heading_color font-semibold"
          >
            Emma Smith
          </Link>
          <p className="text-sm mb-1 flex gap-2 items-center">
            <span>
              <Message />
            </span>
            <span>exmaple@email.com</span>
          </p>
          <p className="text-sm flex gap-2 items-center">
            <span>
              <Phone />
            </span>
            <span>(123) 888 777 632</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
