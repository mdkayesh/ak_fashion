import React from "react";
import styles from "./styles";
import Image from "next/image";

const BannerCart = ({ heading, imageUrl, text, btnText, prize, oldPrize }) => {
  return (
    <div className="bg-white px-2.5 md:px-4 py-7 rounded-md shadow-md flex gap-3 items-center -mt-[25%] relative z-10 w-[90%] mx-auto max-[300px]:flex-col">
      <div className="img w-[40%] max-[300px]:w-full">
        <Image
          src={imageUrl}
          width={400}
          height={400}
          className="w-full"
          alt="banner"
        />
      </div>
      <div className="content flex flex-col gap-3 w-[60%] max-[300px]:w-full">
        <h2 className={`${styles.h4}`}>{heading}</h2>
        <p className="text-xs md:text-sm">{text}</p>
        <p className={`${styles.h4} flex gap-3`}>
          <span>{prize}</span>
          {oldPrize && (
            <span className="line-through text-text_color">$315.00</span>
          )}
        </p>
        <button type="button" className={`${styles.btn_primary} w-fit mt-2`}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default BannerCart;
