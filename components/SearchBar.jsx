"use client";

import { db } from "@/firebase/firebase";
import { Cross, Search } from "@/utils/icons";
import { and, collection, getDocs, or, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles";

const SearchBar = ({ setIsSearchOpen }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  useEffect(() => {
    if (!searchValue) return;
    setloading(true);
    const colRef = collection(db, "all_products");
    const q = query(
      colRef,
      where("tags", "array-contains", searchValue.toLowerCase())
    );

    try {
      const fetchData = async () => {
        const data = await getDocs(q);

        const products = data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setSearchProducts(products);
        setloading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }

    return () => null;
  }, [searchValue]);

  console.log(searchProducts);

  return (
    <div className="search absolute top-0 left-0 w-full h-full bg-[#ffffffde] backdrop:blur-sm">
      <div className="relative flex items-center justify-center h-full">
        <button
          type="button"
          className="absolute top-2 right-2 text-2xl text-black"
          onClick={() => setIsSearchOpen(false)}
        >
          <Cross />
        </button>
        <form onSubmit={handleSubmit} className="w-3/4 md:w-1/2 max-w-xl">
          <div className="flex items-center gap-2">
            <input
              type="search"
              name="nav-search"
              id="nav-search"
              placeholder="Search..."
              className="flex-1 py-2 px-4 outline-none border-b w-full"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="text-2xl">
              <Search />
            </button>
          </div>
        </form>

        <div className="search-products absolute w-full top-full left-0 bg-white flex justify-center items-center shadow-md z-30">
          {loading ? (
            <div className="flex flex-col gap-4 w-3/5 h-full">
              <div className={`${styles.loaderBox} h-28 w-full`} />
              <div className={`${styles.loaderBox} h-28 w-full`} />
              <div className={`${styles.loaderBox} h-28 w-full`} />
            </div>
          ) : (
            <ul className="w-full sm:w-3/5 max-w-xl py-5 px-5 max-h-[70vh] overflow-auto">
              {searchProducts.map((product) => (
                <li
                  key={product.id}
                  className="py-3 px-4 hover:bg-gray-100"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <Link href={`/product/${product.id}`} className="flex gap-4">
                    <div className="img h-28 w-20">
                      <Image
                        src={product.thumbnail_img_url}
                        width={100}
                        height={100}
                        alt={product.title}
                      />
                    </div>
                    <div className="">
                      <h3 className="font-semibold text-heading_color">
                        {product.title}
                      </h3>
                      <p className="mt-2">
                        <span className="font-semibold">${product.prize}</span>{" "}
                        <del>${product.old_prize}</del>
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
