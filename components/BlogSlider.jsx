"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import styles from "./styles";
import { Navigation } from "swiper";

const BlogSlider = ({ blogs }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          340: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.title}>
            <div className="blogItem">
              <img
                src={blog.img_url}
                alt={blog.title}
                width={300}
                height={300}
                className="w-full mx-auto object-cover"
              />
              <div className="content text-center">
                <p className="text-text_color text-sm mt-3">
                  September 08, 2022
                </p>
                <h3 className={`${styles.h3} mt-2 line-clamp-1`}>
                  {blog.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogSlider;
