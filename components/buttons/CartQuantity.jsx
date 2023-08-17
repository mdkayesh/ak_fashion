"use client";

import { handleCartAmount } from "@/redux/features/addToCartSlice";
import { Minus, Plus } from "@/utils/icons";
import { useDispatch } from "react-redux";

const CartQuantity = ({ stock, id, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <button
        type="button"
        className="h-10 bg-gray-100 flex justify-center items-center px-3"
        onClick={() =>
          dispatch(handleCartAmount({ direction: "decrement", stock, id }))
        }
      >
        <Minus />
      </button>
      <input
        type="number"
        name="CartQuantity"
        id="CartQuantity"
        value={amount}
        className="max-w-[50px] outline-none px-3 py-2 text-center h-fit"
        min={1}
        readOnly
      />
      <button
        type="button"
        className="h-10 bg-gray-100 flex justify-center items-center px-3"
        onClick={() =>
          dispatch(handleCartAmount({ direction: "increament", stock, id }))
        }
      >
        <Plus />
      </button>
    </div>
  );
};

export default CartQuantity;
