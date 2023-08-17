"use client";

import { CategoryNav } from "@/components";
import CategoryPagination from "@/components/CategoryPagination";
import CategoryProducts from "@/components/CategoryProducts";
import FilterForm from "@/components/filterComponents/FilterForm";
import styles from "@/components/styles";
import { Cross } from "@/utils/icons";
import { useState } from "react";

const Category = () => {
  const [isFilterNavOpen, setFilterNavOpen] = useState(false);

  return (
    <div className={`category ${styles.paddingX}`}>
      <div className={`container text-sm`}>
        <div className="flex gap-6 py-10">
          {/* left */}
          <div className="flex-1">
            <img
              src="https://prestashop.mahardhi.com/MT08/wearzo/01/c/10-category_default/shop.jpg"
              alt="banner"
            />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2 className="text-lg font-[500] text-heading_color mt-4">
              Recent Searches
            </h2>
            <div className="flex gap-3 mt-3 flex-wrap">
              <button
                type="button"
                className="px-4 md:px-6 py-2 bg-gray-100 hover:text-primary_btn_text hover:bg-primary_btn_bg transition-colors duration-300"
              >
                Western
              </button>
              <button
                type="button"
                className="px-4 md:px-6 py-2 bg-gray-100 hover:text-primary_btn_text hover:bg-primary_btn_bg transition-colors duration-300"
              >
                Traditional
              </button>
              <button
                type="button"
                className="px-4 md:px-6 py-2 bg-gray-100 hover:text-primary_btn_text hover:bg-primary_btn_bg transition-colors duration-300"
              >
                Party Wear
              </button>
            </div>

            {/* nav */}

            <CategoryNav
              isFilterNavOpen={isFilterNavOpen}
              setFilterNavOpen={setFilterNavOpen}
            />
            <CategoryProducts />
            <CategoryPagination />
          </div>
          {/* right */}
          <div
            className={`${
              isFilterNavOpen
                ? "right-0 opacity-100"
                : "-right-full opacity-0 lg:opacity-100"
            } filter-nav min-w-[220px] max-w-[250px] px-5 py-7 lg:py-0 lg:px-3 fixed top-0 h-screen bg-white z-50 overflow-auto transition-all duration-500 lg:z-0 lg:block lg:static lg:h-auto`}
          >
            <div className="flex justify-end lg:hidden">
              <button
                type="button"
                onClick={() => setFilterNavOpen(!isFilterNavOpen)}
              >
                <Cross className="text-lg" />
              </button>
            </div>
            <FilterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
