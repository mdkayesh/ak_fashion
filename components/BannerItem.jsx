import Image from "next/image";
import React from "react";
import styles from "./styles";

const BannerItem = ({ title, btnText, imgUrl }) => {
  return (
    <div className="relative overflow-hidden [&_>.shadow]:hover:w-full [&_>.shadow]:hover:rotate-0 [&_>.shadow]:hover:h-full">
      <Image
        src={imgUrl}
        width={500}
        height={500}
        alt="banner"
        className="w-full"
      />
      <div className="shadow absolute top-0 left-0 w-0 h-0 bg-[#0000001b] rotate-180 transition-all duration-500" />
      <div className="shadow absolute bottom-0 right-0 w-0 h-0 bg-[#0000001b] rotate-180 transition-all duration-500" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] p-4 flex flex-col md:flex-row gap-2 justify-between items-center bg-white shadow-md">
        <p className="text-base text-black">{title}</p>
        <button type="button" className={`${styles.btn_primary}`}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
