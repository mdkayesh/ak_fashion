"use client";

import { db } from "@/firebase/firebase";
import {
  getAllProducts,
  setLastVisible,
  setLoading,
  setProductsLength,
  sortBy,
} from "@/redux/features/filterSlice";
import CloseDropdownOnClick from "@/utils/CloseDropdownOnClick";
import { DownCarret, GridView, RowsView } from "@/utils/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";

const sortsButton = [
  {
    title: "Relavence",
    sortOrder: "Relavence",
    field: "title",
  },
  {
    title: "Name, A to Z",
    sortOrder: "asc",
    field: "title",
  },
  {
    title: "Name, Z to A",
    sortOrder: "desc",
    field: "title",
  },
  {
    title: "Prize, Low to High",
    sortOrder: "asc",
    field: "prize",
  },
  {
    title: "Prize, High to Low",
    sortOrder: "desc",
    field: "prize",
  },
];

const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortSelect, setSortSelect] = useState("relavence");
  const { all_products, loading, productsLength } = useSelector(
    (state) => state.filterSlice
  );
  const dispatch = useDispatch();

  return (
    <div className="shadow-md p-3 mt-6 bg-gray-50">
      <div className="flex justify-between gap-y-4 flex-col items-start w-full sm:w-auto sm:items-center sm:flex-row">
        <div className="flex gap-3 items-center w-full justify-between flex-wrap sm:w-auto sm:justify-normal">
          <div>
            <button
              type="button"
              className="bg-gray-100 text-2xl p-1.5 hover:bg-primary_btn_bg hover:text-primary_btn_text"
            >
              <GridView />
            </button>
            <button
              type="button"
              className="bg-gray-100 text-2xl p-1.5 ml-3 hover:bg-primary_btn_bg hover:text-primary_btn_text"
            >
              <RowsView />
            </button>
          </div>
          {loading ? (
            <div className={`${styles.loaderLine} h-3 w-20`} />
          ) : (
            <p className="ml-0 sm:ml-3">
              Showing {all_products.length} out of {productsLength} products.
            </p>
          )}
        </div>
        <div className="flex justify-between items-end sm:items-center w-full sm:w-auto">
          <div className="short relative flex gap-2 items-center flex-wrap">
            <span className="text-heading_color">Short by:</span>
            <button
              type="button"
              className="px-4 py-2 flex justify-between items-center bg-gray-100 min-w-[160px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="capitalize">{sortSelect}</span>
              <DownCarret />
            </button>
            <CloseDropdownOnClick
              onClose={() => setIsOpen(false)}
              className={`${
                isOpen
                  ? "translate-y-0 opacity-1 visible"
                  : "translate-y-3 opacity-0 invisible"
              } absolute top-full bg-white right-0 min-w-[160px] shadow-md transition-all duration-300 z-20`}
            >
              <ul>
                {sortsButton.map((button) => (
                  <li key={button.title}>
                    <button
                      type="button"
                      value={button.value}
                      className="py-2 text-sm px-4 block text-left w-full hover:bg-primary_btn_bg hover:text-primary_btn_text"
                      onClick={() => {
                        dispatch(
                          sortBy({
                            field: button.field,
                            sortOrder: button.sortOrder,
                            products: all_products,
                          })
                        );

                        setIsOpen(false);
                        setSortSelect(button.title);
                      }}
                    >
                      {button.title}
                    </button>
                  </li>
                ))}
              </ul>
            </CloseDropdownOnClick>
          </div>
          <button
            type="button"
            className="px-6 py-2 h-fit bg-primary_btn_bg text-primary_btn_text hover:bg-primary_btn_bg_hover hover:text-primary_btn_text_hover lg:hidden"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
