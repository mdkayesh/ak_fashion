"use client";

import { MenuDotted } from "@/utils/icons";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "../styles";

const DashDrop = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleToggle}
        className="dropdown-button rotate-90 text-lg"
      >
        <MenuDotted />
      </button>

      <ul
        className={`${
          isOpen
            ? "translate-y-0 visible opacity-100"
            : "translate-y-2 invisible opacity-0"
        } ${
          styles.shadow
        } min-w-[130px] w-auto bg-white absolute -left-28 transition-all duration-500 z-20 text-left`}
      >
        {options.map((option) => (
          <li key={option} onClick={() => handleOptionSelect(option)}>
            <Link
              href=""
              className="block py-2 px-4 hover:text-primary whitespace-nowrap"
            >
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashDrop;
