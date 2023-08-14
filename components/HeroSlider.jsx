"use client";
import { Jost } from "next/font/google";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper";
import Image from "next/image";
import styles from "./styles";

const jost = Jost({
  subsets: ["latin"],
});

const containerVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const HeroSlider = () => {
  return (
    <div className={jost.className}>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        speed={1500}
        loop={true}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img relative">
            <motion.div
              className="absolute top-1/2 left-5 md:left-10 -translate-y-1/2"
              initial={"hidden"}
              whileInView={"visible"}
              variants={containerVarients}
            >
              <motion.p
                className="text-sm sm:text-base md:text-xl font-[500] text-subHeading_color"
                variants={fadeIn}
              >
                Sales Up to 40% off
              </motion.p>
              <motion.h1
                className={`${styles.heroHeading} leading-tight mt-2`}
                variants={fadeIn}
              >
                <span className="block">Winter</span>
                Trendy collection
              </motion.h1>
              <motion.div variants={fadeIn}>
                <button type="button" className={`${styles.btn_primary} mt-4`}>
                  Shop Now
                </button>
              </motion.div>
            </motion.div>
            <Image
              src="/assets/hero2.jpg"
              width={500}
              height={500}
              className="w-full max-h-[600px]"
              alt="ak fashion hero image"
              priority={true}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img relative">
            <motion.div
              className="absolute top-1/2 right-5 md:right-10 -translate-y-1/2"
              initial={"hidden"}
              whileInView={"visible"}
              variants={containerVarients}
            >
              <motion.p
                className="text-sm sm:text-base md:text-xl font-[500] text-subHeading_color"
                variants={fadeIn}
              >
                Sales Up to 40% off
              </motion.p>
              <motion.h1
                className={`${styles.heroHeading} leading-tight mt-2`}
                variants={fadeIn}
              >
                <span className="block">New Season</span>
                <span>Fashion Collection</span>
              </motion.h1>
              <motion.div variants={fadeIn}>
                <button type="button" className={`${styles.btn_primary} mt-4`}>
                  Shop Now
                </button>
              </motion.div>
            </motion.div>
            <Image
              src="/assets/hero1.jpg"
              width={500}
              height={500}
              className="w-full max-h-[600px]"
              alt="ak fashion hero image"
              priority={true}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
