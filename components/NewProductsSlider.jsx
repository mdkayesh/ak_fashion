"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Grid, Autoplay, Navigation } from "swiper";
import ProductCart from "./ProductCart";

const NewProductsSlider = ({ products }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
          fill: "row",
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 2,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          1280: {
            slidesPerView: 4,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        navigation={true}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewProductsSlider;
