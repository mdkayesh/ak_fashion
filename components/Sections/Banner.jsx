import Image from "next/image";
import React from "react";
import styles from "../styles";
import BannerCart from "../BannerCart";

const Banner = () => {
  return (
    <section className={`${styles.paddingX}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <div className="relative overflow-hidden [&_>div]:hover:w-full [&_>div]:hover:rotate-0 [&_>div]:hover:h-full">
              <Image
                src="/assets/banner-1.jpg"
                width={400}
                height={400}
                alt="banner"
                className="w-full"
              />
              <div className="absolute top-0 left-0 w-0 h-0 bg-[#0000001b] rotate-180 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-0 bg-[#0000001b] rotate-180 transition-all duration-500" />
            </div>

            <BannerCart
              heading={"PINK HANDBAG"}
              imageUrl={"/assets/subbanner-1.jpg"}
              text={
                "Cum sociis natoque peibus et magnis parturien. Lorem ipsum dolor sit"
              }
              prize={"$315.00"}
              btnText={"Shop Now"}
            />
          </div>
          <div className="">
            <div className="relative overflow-hidden [&_>div]:hover:w-full [&_>div]:hover:rotate-0 [&_>div]:hover:h-full">
              <Image
                src="/assets/banner-2.jpg"
                width={400}
                height={400}
                alt="banner"
                className="w-full"
                priority={true}
              />
              <div className="absolute top-0 left-0 w-0 h-0 bg-[#0000001b] rotate-180 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-0 bg-[#0000001b] rotate-180 transition-all duration-500" />
            </div>
            <BannerCart
              heading={"SUNGLASSES"}
              imageUrl={"/assets/subbanner-1.jpg"}
              text={
                "Cum sociis natoque peibus et magnis parturien. Lorem ipsum dolor sit"
              }
              prize={"$479.00"}
              oldPrize={"$425.00"}
              btnText={"Shop Now"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
