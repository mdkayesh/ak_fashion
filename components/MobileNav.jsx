import { Cross } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileNav = ({ navlinks, isNavOpen, setIsNavOpen }) => {
  return (
    <div
      className={`${
        isNavOpen ? "h-screen opacity-100" : "h-0 opacity-100"
      } fixed top-0 min-w-[250px] w-[60%] left-0 bg-white z-50 max-w-[300px] overflow-hidden transition-all duration-500 ease-in-out lg:hidden`}
    >
      <ul className="px-4 py-6 overflow-auto h-full">
        <li className="flex justify-between items-center mb-4">
          <Link
            href={"/"}
            className="logo"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <Image
              src="/assets/logo.png"
              width={80}
              height={80}
              className="mr-auto min-w-[40px] max-w-[60px] lg:ml-auto w-auto h-auto"
              alt="logo"
            />
          </Link>

          <button type="button" onClick={() => setIsNavOpen(!isNavOpen)}>
            <Cross className="text-xl" />
          </button>
        </li>
        {navlinks.map((link) => (
          <li key={link.title} onClick={() => setIsNavOpen(!isNavOpen)}>
            <Link href={link.url} className="block mb-3 hover:text-primary">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
