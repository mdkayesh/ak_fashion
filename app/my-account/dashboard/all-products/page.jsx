"use client";

import EditProductCart from "@/components/dashboard/EditProductCart";
import LocationNav from "@/components/dashboard/LocationNav";
import styles from "@/components/styles";
import { ConvertTimeToString, db, getCount } from "@/firebase/firebase";
import { LongArrowLeft, LongArrowRight } from "@/utils/icons";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [all_products, setALl_products] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState();
  const [totalProducts, setTotalProducts] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const colRef = collection(db, "all_products");

  useEffect(() => {
    setLoading(true);
    let q = query(colRef, orderBy("createdAt", "desc"), limit(10));

    if (currentPage > 1) {
      q = query(
        colRef,
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(10)
      );
    }

    onSnapshot(
      q,
      (data) => {
        const products = data.docs.map((doc) => {
          const data = { ...doc.data() };
          data.createdAt = ConvertTimeToString(data.createdAt);

          return { ...data, id: doc.id };
        });
        setALl_products(products);
        setLastVisible(data.docs[data.docs.length - 1]);
        setLoading(false);
      },
      (err) => console.log(err)
    );
  }, [currentPage]);

  //   get the total products
  useEffect(() => {
    getCount(colRef)
      .then((count) => {
        setTotalProducts(count);
      })
      .catch((err) => console.log(err));
  }, []);

  const pageNum = Math.ceil(totalProducts / 10);

  const handlePagination = (payload) => {
    if (payload === "increment") {
      setCurrentPage((prev) => prev + 1);
    } else if (payload === "decrement") {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(payload);
    }
  };

  return (
    <div className={`${styles.paddingX} mt-14 container`}>
      <LocationNav
        title={"All Products"}
        LocationName={"Product"}
        element={
          <p className={`font-semibold`}>
            Total: {totalProducts} <br />
            Showing: {all_products.length}
          </p>
        }
      />
      {loading ? (
        <div className="grid gap-6 grid-cols-2 pt-14 max-[300px]:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          {[...Array(10)].map((_, index) => (
            <div className="w-full h-full" key={index}>
              <div className={`${styles.loaderBox} h-72 w-full`} />
              <div className={`${styles.loaderLine} h-5 w-2/3 mx-auto mt-4`} />
              <div className="flex gap-2 justify-center mt-4">
                <div className={`${styles.loaderLine} h-4 w-12`} />
                <div className={`${styles.loaderLine} h-4 w-12`} />
              </div>
            </div>
          ))}
        </div>
      ) : all_products.length === 0 ? (
        <div className="">There is no product available.</div>
      ) : (
        <div className="grid gap-x-3 gap-y-6 md:gap-x-6 grid-cols-2 pt-14 max-[300px]:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          {all_products?.map((product) => (
            <EditProductCart {...product} key={product?.id} />
          ))}
        </div>
      )}

      {/* pagination */}
      <div className="mt-14 bg-gray-50 shadow-md p-3">
        <div className="flex justify-end gap-3 items-center">
          <button
            disabled={currentPage <= 1}
            title="prev"
            type="button"
            className={`${
              currentPage <= 1 ? "cursor-not-allowed opacity-70" : ""
            } rounded-full w-10 h-10 flex justify-center items-center border bg-gray-200 hover:bg-black hover:text-white transition-all duration-500 hover:shadow-lg hover:scale-110`}
            onClick={() => handlePagination("decrement")}
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
            disabled={pageNum === currentPage}
            title="next"
            type="button"
            className={`${
              pageNum === currentPage ? "cursor-not-allowed opacity-70" : ""
            } rounded-full w-10 h-10 flex justify-center items-center border bg-gray-200 hover:bg-black hover:text-white transition-all duration-500 hover:shadow-lg hover:scale-110`}
            onClick={() => handlePagination("increment")}
          >
            <LongArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
