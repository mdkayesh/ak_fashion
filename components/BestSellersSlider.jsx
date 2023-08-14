"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import ProductCart from "./ProductCart";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ConvertTimeToString, db } from "@/firebase/firebase";
// import { products } from "./Sections/NewProducts";

const BestSellersSlider = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [activeArr, setActiveArr] = useState(bestSellers);
  const [activeBtn, setActiveBtn] = useState("best");

  useEffect(() => {
    const colRef = collection(db, "all_products");
    const bestQuery = query(
      colRef,
      where("display", "array-contains", "best_sellers")
    );
    const featuredQuery = query(
      colRef,
      where("display", "array-contains", "featured")
    );

    const getProducts = async (query, state) => {
      const result = await getDocs(query);
      result.docs.forEach((doc) => {
        const data = { ...doc.data() };
        data.createdAt = ConvertTimeToString(data.createdAt);
        state((prev) => [...prev, { ...data, id: doc.id }]);
      });
    };

    getProducts(bestQuery, setBestSellers);
    getProducts(featuredQuery, setFeatured);

    return () => null;
  }, []);

  useEffect(() => {
    setActiveArr(bestSellers);
  }, [bestSellers]);

  const handleActiveBtn = (btnName) => {
    setActiveBtn(btnName !== activeBtn ? btnName : btnName);
    setActiveArr(btnName === "best" ? bestSellers : featured);
  };

  return (
    <>
      <div className="flex gap-6 items-center justify-center">
        <hr className="w-[30%] border-primary border-1.5 border-solid" />
        <div className="flex gap-4 items-center">
          <button
            type="button"
            className={`${
              activeBtn === "best"
                ? "text-primary after:scale-x-100"
                : "after:scale-x-0"
            } relative text-xl whitespace-nowrap md:text-2xl font-semibold after:content-[''] after:absolute after:h-[2px] after:w-full after:top-full after:left-0 after:bg-primary after:transition-transform duration-500`}
            onClick={() => handleActiveBtn("best")}
          >
            Best Sellers
          </button>
          <button
            type="button"
            className={`${
              activeBtn === "feat"
                ? "text-primary after:scale-x-100"
                : "after:scale-x-0"
            } relative text-xl whitespace-nowrap md:text-2xl font-semibold after:content-[''] after:absolute after:h-[2px] after:w-full after:top-full after:left-0 after:bg-primary after:transition-transform duration-500`}
            onClick={() => handleActiveBtn("feat")}
          >
            featured
          </button>
        </div>
        <hr className="w-[30%] border-primary border-1.5 border-solid" />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          360: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper mt-10"
      >
        {activeArr?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BestSellersSlider;
