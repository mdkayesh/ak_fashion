"use client";

import { closeCartModal } from "@/redux/features/addToCartSlice";
import { Check, Cross } from "@/utils/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartModal = () => {
  const { isCartModalOpen, currentProductID, cartProducts } = useSelector(
    (state) => state.addToCartSlice
  );
  const [product, setProduct] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(cartProducts.find((p) => p.id === currentProductID));
  }, [currentProductID]);

  return (
    <div
      className={`${
        isCartModalOpen ? "visible" : "invisible"
      } cart-modal fixed top-0 left-0 w-full h-full px-10 py-16 bg-[#0000006d] z-50 overflow-auto`}
      onClick={() => dispatch(closeCartModal())}
    >
      <div className="flex justify-center items-center text-sm h-full">
        {/* ---main--- */}
        <div
          className={`${
            isCartModalOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-12 opacity-0"
          } main bg-white w-full transition-all duration-500 max-w-4xl`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-secondary text-white py-5 px-4 flex justify-center items-center gap-2 relative">
            <Check className="text-xl" />
            <p>Product successfully added to your shopping cart</p>
            <button
              type="button"
              className="absolute top-3 right-3 hover:rotate-180 transition-all duration-300"
              onClick={() => dispatch(closeCartModal())}
            >
              <Cross className="text-xl" />
            </button>
          </div>

          {/* ---- */}
          <div className="flex gap-5 px-7 py-8 flex-col md:flex-row">
            <div className="img">
              <Image
                src={product?.image || "/assets/preview.jpg"}
                width={300}
                height={400}
                className="h-full w-full object-cover"
                alt={product?.title}
              />
            </div>
            <div className="flex gap-3 w-full">
              <div className="max-w-[200px]">
                <h3 className="text-heading_color text-base font-semibold">
                  {product?.title}
                </h3>
                <div className="flex gap-3 items-center mt-3">
                  <h4 className="text-heading_color font-semibold min-w-[70px]">
                    Prize:
                  </h4>
                  <p className="font-[500] capitalize">${product?.prize}</p>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <h4 className="text-heading_color font-semibold min-w-[70px]">
                    composition:
                  </h4>
                  <p className="font-[500] capitalize">
                    {product?.composition}
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <h4 className="text-heading_color font-semibold min-w-[70px]">
                    Size:
                  </h4>
                  <p className="font-[500] capitalize">{product?.size}</p>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  <h4 className="text-heading_color font-semibold min-w-[70px]">
                    property:
                  </h4>
                  <p className="font-[500] capitalize">{product?.property}</p>
                </div>
                <div className="flex gap-3 items-center mt-3">
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

                <div className="flex gap-3 items-center mt-3">
                  <h4 className="text-heading_color font-semibold min-w-[70px]">
                    Amount:
                  </h4>
                  <p className="font-[500] capitalize">{product?.amount}</p>
                </div>
              </div>
              <div className="border-l pl-3 text-[#1e1e1e] flex-1">
                <p>There are {product?.amount} items in your cart.</p>
                <div className="flex justify-between items-center w-full px-2 mt-4">
                  <p className="font-semibold">Total prize:</p>
                  <p>
                    ${Number((product?.amount * product?.prize).toFixed(2))}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full px-2 mt-4">
                  <p className="font-semibold">Shipping Prize:</p>
                  <p>${Number((3.44).toFixed(2))}</p>
                </div>

                <div className="flex justify-between items-center w-full mt-4 px-2 py-2 bg-gray-200">
                  <p className="font-semibold">Total:</p>
                  <p>
                    (Tax incl.){" "}
                    <span className="font-semibold">
                      $
                      {Number(
                        (product?.amount * product?.prize + 3.44).toFixed(2)
                      )}
                    </span>
                  </p>
                </div>

                <div className="flex gap-x-3 gap-y-5 flex-wrap mt-6">
                  <button
                    type="button"
                    className="px-4 uppercase transition-colors duration-500 py-2 bg-primary_btn_bg hover:bg-primary_btn_bg_hover text-primary_btn_text hover:text-primary_btn_text_hover"
                    onClick={() => dispatch(closeCartModal())}
                  >
                    Continue Shopping
                  </button>

                  <button
                    type="button"
                    className="px-4 uppercase transition-colors duration-500 py-2 bg-primary_btn_bg hover:bg-primary_btn_bg_hover text-primary_btn_text hover:text-primary_btn_text_hover"
                    onClick={() => dispatch(closeCartModal())}
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
