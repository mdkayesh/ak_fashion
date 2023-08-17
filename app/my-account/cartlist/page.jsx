"use client";

import { Quantity } from "@/components";
import CartQuantity from "@/components/buttons/CartQuantity";
import styles from "@/components/styles";
import { handleRemoveCart } from "@/redux/features/addToCartSlice";
import { Delete } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartList = () => {
  const { cartProducts } = useSelector((state) => state.addToCartSlice);
  const dispatch = useDispatch();

  const total = cartProducts.reduce((prev, curr) => {
    return prev + curr.prize * curr.amount;
  }, 0);

  return (
    <div className={`${styles.paddingX} cartList container mt-14`}>
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="border p-4 flex-1 w-full">
          <h1 className="text-heading_color text-2xl pb-4 mb-4 border-b">
            Shopping Cart
          </h1>
          <ul className="overflow-x-auto">
            {cartProducts?.map((product) => (
              <li
                className="flex gap-4 mt-4 items-center justify-between"
                key={product.id}
              >
                <div className="img min-w-[128px]">
                  <Image
                    src={product.image}
                    width={100}
                    height={130}
                    alt={product.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="self-start text-xs min-w-[43%]">
                  <Link
                    href={`/product/${product.id}`}
                    title={product.title}
                    className="text-base hover:text-primary text-heading_color line-clamp-1 font-semibold"
                  >
                    {product.title}
                  </Link>
                  <div className="flex gap-3 items-center whitespace-nowrap mt-2">
                    <h4 className="text-heading_color font-semibold min-w-[70px]">
                      Prize:
                    </h4>
                    <p className="font-[500] capitalize">${product?.prize}</p>
                  </div>
                  <div className="flex gap-3 items-center whitespace-nowrap mt-2">
                    <h4 className="text-heading_color font-semibold min-w-[70px]">
                      composition:
                    </h4>
                    <p className="font-[500] capitalize">
                      {product?.composition}
                    </p>
                  </div>
                  <div className="flex gap-3 items-center whitespace-nowrap mt-2">
                    <h4 className="text-heading_color font-semibold min-w-[70px]">
                      Size:
                    </h4>
                    <p className="font-[500] capitalize">{product?.size}</p>
                  </div>
                  <div className="flex gap-3 items-center whitespace-nowrap mt-2">
                    <h4 className="text-heading_color font-semibold min-w-[70px]">
                      property:
                    </h4>
                    <p className="font-[500] capitalize">{product?.property}</p>
                  </div>
                  <div className="flex gap-3 items-center whitespace-nowrap mt-2">
                    <h4 className="text-heading_color font-semibold min-w-[70px]">
                      color:
                    </h4>
                    <div
                      className="h-5 w-5 rounded-full border-black border"
                      style={{
                        backgroundColor: product?.color,
                      }}
                    />
                  </div>
                </div>
                <CartQuantity
                  id={product.id}
                  amount={product.amount}
                  stock={product.stock}
                />

                <div className="delete">
                  <button
                    type="button"
                    className="text-xl hover:text-primary"
                    onClick={() => dispatch(handleRemoveCart(product.id))}
                  >
                    <Delete />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* right */}

        <div className="w-full lg:min-w-[230px] lg:max-w-[280px]">
          <div className="border">
            <div className="flex justify-between items-center p-4 border-b">
              <p>{cartProducts.length} Items</p>
              <p>${total}</p>
            </div>
            <div className="flex justify-between items-center p-4 border-b">
              <p>Total (Tax incl.)</p>
              <p className="text-lg text-gray-950">${total + 2.0}</p>
            </div>
            <div className="flex justify-center items-center p-4">
              <button
                type="button"
                className="px-4 py-2 uppercase bg-primary_btn_bg hover:bg-primary_btn_bg_hover text-primary_btn_text hover:text-primary_btn_text_hover"
              >
                Proceed Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
