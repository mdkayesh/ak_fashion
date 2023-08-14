import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

export default function ModalSlider2({ images, setActiveImg, loading }) {
  return (
    <>
      <Swiper
        direction={"vertical"}
        navigation
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper max-h-[500px]"
      >
        {images?.map((img, index) => (
          <SwiperSlide
            key={index}
            className={`${images.length < 4 ? "min-h-[125px]" : ""} relative`}
          >
            <div
              className={`${
                loading ? "opacity-100 visible" : "invisible opacity-0"
              } w-full h-full backdrop-blur-sm transition-all duration-500 absolute top-0 left-0`}
            />
            <Image
              src={img || "/assets/preview.jpg"}
              alt="product"
              className="cursor-pointer h-full object-cover"
              width={100}
              height={100}
              onClick={() => setActiveImg(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
