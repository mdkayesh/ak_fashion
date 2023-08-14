"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles";
import Link from "next/link";
import Image from "next/image";
import { Search, Shopping, User } from "@/utils/icons";
import { CartProductsDrop, ProfileDrop } from "./Dropdown";
import CloseDropdownOnClick from "@/utils/CloseDropdownOnClick";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const navlinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Category",
    url: "/category",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Contact Us",
    url: "",
  },
  {
    title: "FAQ",
    url: "",
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { cartProducts } = useSelector((state) => state.addToCartSlice);

  // get data from redux

  const { user } = useSelector((state) => state.authSlice);

  const handleToggle = (name) => {
    setIsOpen(name !== isOpen ? name : null);
  };

  const handleToClose = () => {
    setIsOpen(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="placeholder h-[66px] relative">
      <div
        className={`${styles.paddingX} ${
          isScrolling ? "w-full nav-animation fixed top-0 left-0 shadow-md" : ""
        } bg-white transition-all duration-500 z-50`}
      >
        <div className="container flex justify-between items-center py-2">
          <nav className="flex-[0.4] hidden lg:block">
            <ul className="flex gap-4">
              {navlinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.url}
                    className="text-sm text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* logo */}

          <div className="logo flex-[0.2]">
            <Image
              src="/assets/logo.png"
              width={80}
              height={80}
              className="mr-auto max-w-[80px] lg:ml-auto w-auto h-auto"
              alt="logo"
            />
          </div>

          {/* icons */}

          <div className="flex gap-3 items-center text-secondary flex-[0.4] justify-end">
            <div className="h-fit">
              <button
                type="button"
                className="font-bold"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-6 w-6 mt-1" />
              </button>
            </div>

            <div className="relative">
              <button
                type="button"
                className="font-bold"
                onClick={() => handleToggle("profile")}
              >
                <User className="h-6 w-6 mt-1" />
              </button>
              <CloseDropdownOnClick onClose={handleToClose}>
                <div
                  className={`${
                    "profile" === isOpen
                      ? "scale-x-100 visible"
                      : "scale-x-0 invisible"
                  } ${styles.dropContainer} -left-[100px] w-[160px]`}
                >
                  <ProfileDrop className="h-6 w-6" user={user} />
                </div>
              </CloseDropdownOnClick>
            </div>

            <div className="relative">
              <button
                type="button"
                className="font-bold relative flex gap-1 items-center hover:text-primary [&_span]:hover:text-primary"
                onClick={() => handleToggle("cart")}
              >
                <Shopping className="h-6 w-6" />
                <div className="absolute -top-1 bg-primary h-4 w-4 flex items-center justify-center -right-1.5 text-xs text-white rounded-full lg:hidden">
                  {cartProducts.length}
                </div>
                <span className="text-sm uppercase font-normal text-text_color hidden lg:inline-block">
                  {cartProducts.length} Item
                </span>
              </button>

              <CloseDropdownOnClick onClose={handleToClose}>
                <div
                  className={`${
                    "cart" === isOpen
                      ? "scale-x-100 visible"
                      : "scale-x-0 invisible"
                  } ${styles.dropContainer} -left-[260px] w-[300px]`}
                >
                  <CartProductsDrop />
                </div>
              </CloseDropdownOnClick>
            </div>
          </div>
        </div>
        {isSearchOpen && <SearchBar setIsSearchOpen={setIsSearchOpen} />}
      </div>
    </div>
  );
};

export default Nav;
