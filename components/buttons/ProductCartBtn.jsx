"use client";

import React from "react";

const ProductCartBtn = ({ className, icon, onclick = () => {} }) => {
  return (
    <button
      type="button"
      className={`${className} btn-white text-sm md:text-base w-8 h-8 md:w-10 md:h-10 flex justify-center items-center text-black bg-white rounded-full hover:text-white hover:bg-primary transition-all duration-500 ml-0 md:ml-[100%]`}
      onClick={() => onclick()}
    >
      {icon}
    </button>
  );
};

export default ProductCartBtn;
