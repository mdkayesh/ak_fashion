import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import styles from "./styles";

export default function ModalSlider({
  images,
  setActiveImg,
  loading,
  isProducModalOpen,
}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative">
              <div
                className={`${
                  loading && isProducModalOpen
                    ? "opacity-100 visible"
                    : "invisible opacity-0"
                } w-full h-full backdrop-blur-sm transition-all duration-500 absolute top-0 left-0`}
              />
              <Image
                src={img || "/assets/preview.jpg"}
                alt="product"
                width={100}
                height={100}
                className="cursor-pointer h-full max-h-[220px]"
                onClick={() => setActiveImg(index)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
