import { setUserModal } from "@/redux/features/modalSlice";
import { Cross } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashDrop from "../DashDrop";

const UsersModal = () => {
  const { isUserModal } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        isUserModal
          ? "translate-y-0 opacity-100 visible"
          : "-translate-y-14 opacity-0 invisible"
      } fixed w-full h-screen bg-[#0000007b] z-50 overflow-auto transition-all duration-500`}
    >
      <div
        className="flex justify-center items-center min-h-screen py-10 px-6 md:px-20"
        onClick={() => {
          dispatch(setUserModal());
        }}
      >
        <div
          className="relative flex gap-10 flex-col md:flex-row bg-white rounded-xl px-6 py-10 w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-3 right-3 flex gap-2 items-center">
            <div></div>
            <div className="leading-normal">
              <DashDrop
                options={["Action", "Another Action", "Something else here"]}
                onSelect={() => {}}
              />
            </div>
            <div
              className="text-2xl cursor-pointer"
              onClick={() => dispatch(setUserModal())}
            >
              <Cross />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="img">
              <Image
                src={"/assets/user.png"}
                width={100}
                height={100}
                className="rounded-md w-28 h-32 mx-auto"
                alt="user"
              />
            </div>

            <div className="flex flex-col items-center gap-1 text-center mt-7">
              <Link href="" className="font-semibold text-2xl md:text-3xl">
                Emma Smith
              </Link>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>

            <button
              type="button"
              className="px-4 md:px-6 py-2 bg-secondary_btn_bg text-sm hover:bg-secondary_btn_bg_hover text-secondary_btn_text hover:text-secondary_btn_text_hover rounded-[99px] mx-auto mt-5 w-fit block"
            >
              Follow
            </button>
            <div className="flex gap-3 items-center justify-between mt-7">
              <div className="text-center">
                <p className="font-semibold">354</p>
                <p>Bought</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">30</p>
                <p>Wish List</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">1200</p>
                <p>Following</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className={`text-2xl font-semibold mb-5`}>Contact Details</h2>
            <div className="mt-6">
              <h5 className="font-semibold">Email address</h5>
              <p>johnexample@gmail.com</p>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold">Phone Number</h5>
              <p>+00 9539 2641 31</p>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold">Birthday</h5>
              <p>Dec 10, 1991</p>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold">Address</h5>
              <p>123/2, Kings fort street-2, Polo alto, US.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersModal;
