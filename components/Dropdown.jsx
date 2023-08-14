"use client";

import { Cross, Uro, Usd } from "@/utils/icons";
import styles from "./styles";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "@/redux/features/authSlice";
import { useEffect, useState } from "react";
import Image from "next/image";
import { handleRemoveCart } from "@/redux/features/addToCartSlice";

const lang = [
  {
    title: "English",
  },
  {
    title: "اللغة العربية",
  },
  {
    title: "Français",
  },
  {
    title: "Español",
  },
  {
    title: "Deutsch",
  },
  {
    title: "Italiano",
  },
  {
    title: "Nederlands",
  },
  {
    title: "Polski",
  },
  {
    title: "Português PT",
  },
  {
    title: "Русский",
  },
];

const profileLinks = [
  {
    title: "My Account",
    url: "/my-account",
  },
  {
    title: "Information",
    url: "/my-account/information",
  },
  {
    title: "Address",
    url: "/my-account/address",
  },
  {
    title: "Order details",
    url: "/my-account/order-details",
  },
  {
    title: "My wishlists",
    url: "/my-account/my-wishlists",
  },
  {
    title: "Sign out",
    url: "",
  },
];

const CurrencyDrop = () => {
  return (
    <ul
      className={`bg-white px-4 border-t-2 py-3 border-solid border-primary text-text_color flex flex-col gap-2 uppercase`}
    >
      <li className="flex gap-2 items-center">
        <Usd /> <span>USD</span>
      </li>
      <li className="flex gap-2 items-center">
        <Uro /> <span>Euro</span>
      </li>
    </ul>
  );
};

const LangDrop = () => {
  return (
    <ul
      className={`bg-white text-sm px-4 border-t-2 py-3 border-solid border-primary text-text_color flex flex-col gap-2 uppercase`}
    >
      {lang.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};

const ProfileDrop = ({ user }) => {
  const dispatch = useDispatch();
  const [_user, set_user] = useState(null);

  useEffect(() => {
    set_user(user);
    return () => null;
  }, [user]);

  return (
    <ul
      className={`bg-white px-4 border-t-2 py-3 border-solid border-primary text-text_color flex flex-col gap-2`}
    >
      {_user ? (
        profileLinks.map((link) => (
          <li
            className="text-sm capitalize cursor-pointer"
            key={link.title}
            onClick={() => {
              if (typeof window !== "undefined" && link.title === "Sign out") {
                dispatch(signOut());
              }
            }}
          >
            <Link href={link.url} className="hover:text-primary">
              {link.title}
            </Link>
          </li>
        ))
      ) : (
        <>
          <li className="text-sm capitalize">
            <Link href="/signin">Sign In</Link>
          </li>
          <li className="text-sm capitalize">
            <Link href="/register">Register</Link>
          </li>
        </>
      )}
    </ul>
  );
};

const CartProductsDrop = () => {
  const { cartProducts } = useSelector((state) => state.addToCartSlice);
  const dispatch = useDispatch();

  const total = cartProducts.reduce((prev, curr) => {
    return prev + curr.prize * curr.amount;
  }, 0);

  return (
    <div>
      <ul
        className={`bg-white px-4 border-t-2 py-3 border-solid border-primary text-text_color flex flex-col gap-4 max-h-[60vh] overflow-auto`}
      >
        {cartProducts.length === 0 ? (
          <li className="text-sm text-center">No product added</li>
        ) : (
          cartProducts.map((product) => (
            <li className="text-sm relative" key={product.id}>
              <div
                className="absolute top-0 right-0 text-lg cursor-pointer"
                onClick={() => dispatch(handleRemoveCart(product.id))}
              >
                <Cross />
              </div>
              <div className="flex gap-3">
                <div className="img min-w-[100px] min-h-[133px] max-w-[100px] max-h-[133px]">
                  <Image
                    src={product.image}
                    width={100}
                    height={100}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3">
                  <Link
                    href={`/product/${product.id}`}
                    className="line-clamp-1"
                  >
                    {product.title}
                  </Link>
                  <p className="mt-2">
                    {product.amount} x{" "}
                    <span className="font-semibold">${product.prize}</span>
                  </p>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="total border-t border-b flex justify-between items-center py-2 px-4">
        <p>Total</p>
        <p>${Number(total.toFixed(2))}</p>
      </div>

      <div className="flex justify-center gap-3 items-center py-3 px-4">
        <button
          type="button"
          className="px-4 py-2 bg-primary_btn_bg text-primary_btn_text hover:bg-primary_btn_bg_hover hover:text-primary_btn_text_hover"
        >
          View Cart
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-primary_btn_bg text-primary_btn_text hover:bg-primary_btn_bg_hover hover:text-primary_btn_text_hover"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

const SidebarDrop = ({ links }) => {
  return (
    <div className="dropdown invisible scale-x-0 origin-right absolute -top-full left-full ml-3 bg-white z-20 px-4 py-5 flex gap-3 shadow-md transition-all duration-500">
      {links.map((link) => (
        <div key={link.title}>
          <h4 className={`text-[#767676] font-semibold pb-2`}>{link.title}</h4>
          <ul className="w-[160px] border-t flex flex-col gap-2 pt-3">
            {link.subTitle.map((link) => (
              <li className="text-text_color" key={link.title}>
                <Link href={""} className="hover:text-primary">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const SidebarDrop2 = ({ links }) => {
  return (
    <div className="dropdown invisible scale-x-0 origin-right absolute -top-full left-full ml-2 bg-white z-20 px-4 py-5 flex gap-3 shadow-md transition-all duration-500">
      <ul className="w-[160px] flex flex-col gap-2">
        {links.map((link) => (
          <li className="text-text_color" key={link.title}>
            <Link href={""} className="hover:text-primary">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {
  CurrencyDrop,
  LangDrop,
  ProfileDrop,
  CartProductsDrop,
  SidebarDrop,
  SidebarDrop2,
};
