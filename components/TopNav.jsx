"use client";

import React, { useState } from "react";
import styles from "./styles";
import { DownArrow } from "@/utils/icons";
import { CurrencyDrop, LangDrop } from "./Dropdown";
import CloseDropdownOnClick from "@/utils/CloseDropdownOnClick";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [_isOpen, set_IsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  };
  const _handleOnClose = () => {
    set_IsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const _handleToggle = () => {
    set_IsOpen(!_isOpen);
  };

  return (
    <div className={`${styles.paddingX} py-3 bg-secondary text-sm`}>
      <div className="container">
        <div className="flex justify-center items-center text-white lg:justify-between">
          <p className=" hidden lg:block">contact us 24/7: + 74437842</p>
          <p className="uppercase hidden lg:block">
            Free shipping for order over $150!
          </p>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                type="button"
                className="flex gap-2 items-center hover:text-primary"
                onClick={handleToggle}
              >
                <span>Currency: USD</span>

                <DownArrow />
              </button>
              <CloseDropdownOnClick onClose={handleOnClose}>
                <div
                  className={`${
                    isOpen ? "scale-x-100 visible" : "scale-x-0 invisible"
                  } origin-left w-[160px] ${styles.dropContainer}`}
                >
                  <CurrencyDrop />
                </div>
              </CloseDropdownOnClick>
            </div>
            <div className="w-[2px] h-5 bg-slate-700" />
            <div className="relative">
              <button
                type="button"
                className="flex gap-2 items-center hover:text-primary"
                onClick={_handleToggle}
              >
                <span>Language: English</span>
                <DownArrow />
              </button>
              <CloseDropdownOnClick onClose={_handleOnClose}>
                <div
                  className={`${
                    _isOpen ? "scale-x-100 visible" : "scale-x-0 invisible"
                  } origin-left w-[160px] ${styles.dropContainer}`}
                >
                  <LangDrop />
                </div>
              </CloseDropdownOnClick>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
