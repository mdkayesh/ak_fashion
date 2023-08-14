"use client";

import { setCurrentPage } from "@/redux/features/filterSlice";
import { LongArrowLeft, LongArrowRight } from "@/utils/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryPagination = () => {
  const { productsLength, currentPage } = useSelector(
    (state) => state.filterSlice
  );
  const dispatch = useDispatch();

  const pageNum = Math.ceil(productsLength / 10);

  return (
    <div className="mt-14 bg-gray-50 shadow-md p-3">
      <div className="flex justify-end gap-3 items-center">
        <button
          title="prev"
          type="button"
          className={`${
            currentPage <= 1 ? "cursor-not-allowed opacity-70" : ""
          } rounded-full w-10 h-10 flex justify-center items-center border bg-gray-200 hover:bg-black hover:text-white transition-all duration-500 hover:shadow-lg hover:scale-110`}
          onClick={() => {
            dispatch(setCurrentPage("decrement"));
          }}
          disabled={currentPage <= 1}
        >
          <LongArrowLeft />
        </button>

        <p
          title="current page"
          type="button"
          className={`rounded-full w-10 h-10 flex justify-center items-center border bg-gray-200 hover:bg-black hover:text-white transition-all duration-500 hover:shadow-lg hover:scale-110`}
        >
          {currentPage}
        </p>

        <button
          title="next"
          type="button"
          className={`${
            pageNum === currentPage ? "cursor-not-allowed opacity-70" : ""
          } rounded-full w-10 h-10 flex justify-center items-center border bg-gray-200 hover:bg-black hover:text-white transition-all duration-500 hover:shadow-lg hover:scale-110`}
          onClick={() => dispatch(setCurrentPage("increment"))}
          disabled={pageNum === currentPage}
        >
          <LongArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CategoryPagination;
