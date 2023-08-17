"use client";

import { Checked, Minus, Plus } from "@/utils/icons";
import styles from "../styles";
import { useEffect, useState } from "react";
import { db, getCount } from "@/firebase/firebase";
import { collection, query, where } from "firebase/firestore";

const Categories = ({ values, handleChange, filterName, handleFilterName }) => {
  // states

  const [categoryCount, setCategoryCount] = useState();
  const [loading, setLoading] = useState(true);

  const categories = [
    {
      title: "Men",
    },
    {
      title: "Women",
    },
    {
      title: "Kids",
    },
    {
      title: "Party Wear",
    },
    {
      title: "Traditional",
    },
    {
      title: "Western",
    },
  ];

  useEffect(() => {
    setLoading(true);
    try {
      categories.forEach(async (category) => {
        const colRef = collection(db, "all_products");
        const q = query(
          colRef,
          where("category", "==", category.title.toLowerCase())
        );

        const count = await getCount(q);

        setCategoryCount((prev) => {
          return { ...prev, [category.title]: count };
        });
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    return () => null;
  }, []);

  return (
    <div>
      <h3
        className={`${styles.filterHeading}`}
        onClick={() => handleFilterName("category")}
      >
        <span>Categories</span>
        <span className="lg:hidden">
          {filterName === "category" ? <Minus /> : <Plus />}
        </span>
      </h3>
      {loading ? (
        <div className="flex flex-col gap-4">
          {[...Array(6)].map((_, index) => (
            <div className={`${styles.loaderLine} h-5 w-full`} key={index} />
          ))}
        </div>
      ) : (
        <div
          className={`${
            filterName === "category"
              ? "max-h-[350px]"
              : "max-h-0 lg:max-h-[350px]"
          } transition-all duration-500 ease-in-out overflow-hidden`}
        >
          {categories.map((category) => (
            <label
              htmlFor={category.title}
              className={`${styles.filterLevel}`}
              key={category.title}
            >
              <div className="flex items-center">
                <div className={`${styles.inputContainer}`}>
                  <input
                    type="checkbox"
                    name="categories"
                    id={category.title}
                    value={category.title}
                    className={`${styles.filterInput}`}
                    checked={values.categories.includes(category.title)}
                    onChange={handleChange}
                  />
                  <Checked className={`${styles.filterChecked}`} />
                </div>
                <span className={`${styles.inputText}`}>{category.title}</span>
              </div>
              <span>
                {categoryCount ? `(${categoryCount[category.title]})` : null}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
