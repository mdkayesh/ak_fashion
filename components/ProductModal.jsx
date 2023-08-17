"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setProductModal } from "@/redux/features/modalSlice";
import { Quantity } from ".";
import {
  Compare,
  Cross,
  Facebook,
  Heart,
  Instagram,
  Twitter,
} from "@/utils/icons";
import ModalSlider from "./ModalSlider";
import ModalSlider2 from "./ModalSlider2";
import Image from "next/image";
import { handleAddCart, resetAmount } from "@/redux/features/addToCartSlice";

const ProductModal = () => {
  const { isProducModalOpen, currentProduct } = useSelector(
    (state) => state.modalSlice
  );
  const { _amount } = useSelector((state) => state.addToCartSlice);
  const dispatch = useDispatch();

  // states
  const [activeImg, setActiveImg] = useState(0);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [selectData, setSelectData] = useState({
    color: "",
    size: "",
    composition: "",
    property: "",
  });

  const {
    title,
    colors,
    description,
    composition,
    discount,
    hover_img_url,
    other_images,
    thumbnail_img_url,
    id,
    old_prize,
    prize,
    properties,
    quantity,
    sizes,
    stock,
    amount,
  } = currentProduct;

  // set all images in an array
  let otherImg = other_images ? other_images : [];

  useEffect(() => {
    setLoading(true);
    setImages([thumbnail_img_url, hover_img_url, ...otherImg]);
    setActiveImg(0);

    return () => null;
  }, [thumbnail_img_url, hover_img_url]);

  // add default value to selected data
  useEffect(() => {
    setSelectData({
      color: colors && colors[0],
      size: sizes && sizes[0],
      composition: composition && composition[0],
      property: properties && properties[0],
    });

    dispatch(resetAmount());
    return () => null;
  }, [isProducModalOpen]);

  // select the cart data
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setSelectData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={`product-modal ${styles.paddingX}`}>
      <div
        className={`${
          isProducModalOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-14 opacity-0 invisible"
        } fixed top-0 left-0 w-full overflow-auto h-full bg-[#00000059] z-50 transition-all duration-500`}
      >
        {/* ---- */}
        <div
          className="flex justify-center items-center min-h-screen py-16 px-5"
          onClick={() => dispatch(setProductModal())}
        >
          <div
            className="py-10 px-4 relative bg-white lg:max-w-5xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="close absolute top-2 right-3 text-2xl cursor-pointer"
              onClick={() => dispatch(setProductModal())}
            >
              <Cross />
            </div>
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="left flex gap-3 flex-col-reverse w-full md:flex-row lg:w-1/2">
                <div className="w-full md:min-w-[100px] md:max-w-[100px]">
                  <div className="w-full max-w-full md:hidden">
                    <ModalSlider
                      images={images}
                      setActiveImg={setActiveImg}
                      loading={loading}
                      isProducModalOpen={isProducModalOpen}
                    />
                  </div>
                  <div className="hidden md:block">
                    <ModalSlider2
                      images={images}
                      setActiveImg={setActiveImg}
                      loading={loading}
                      isProducModalOpen={isProducModalOpen}
                    />
                  </div>
                </div>
                <div className="flex-1 relative">
                  {isProducModalOpen && (
                    <div
                      className={`${
                        loading ? "opacity-100 visible" : "invisible opacity-0"
                      } w-full h-full backdrop-blur-sm transition-all duration-500 absolute top-0 left-0`}
                    />
                  )}

                  <Image
                    src={images[activeImg] || "/assets/preview.jpg"}
                    alt="product"
                    width={600}
                    height={600}
                    onLoad={() => setLoading(false)}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="right w-full lg:w-1/2">
                <h2 className={`${styles.h2} mb-3`}>{title}</h2>
                {old_prize && (
                  <p className="line-through text-sm text-text_color">
                    ${old_prize}
                  </p>
                )}
                <div className="flex gap-3 my-2">
                  <p className="text-xl text-heading_color">${prize}</p>
                  {discount && (
                    <p className="text-sm p-1 text-primary_btn_text bg-primary_btn_bg">
                      Save {discount}%
                    </p>
                  )}
                </div>
                <p className="text-xs">Tax included</p>
                <article className="text-sm mt-5">{description}</article>

                {sizes?.length > 0 && (
                  <div className="flex gap-3 mt-5 flex-wrap items-center">
                    <label
                      htmlFor="sizesSelect"
                      className="text-black min-w-[100px]"
                    >
                      Sizes
                    </label>
                    <select
                      name="size"
                      id="sizesSelect"
                      className="outline-none px-4 py-2 border cursor-pointer"
                      onChange={handleChange}
                      value={selectData.size}
                    >
                      {sizes.map((size) => (
                        <option value={size} key={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {colors?.length > 0 && (
                  <div className="flex gap-3 flex-wrap items-center mt-5">
                    <h2 htmlFor="sizes" className="text-black min-w-[100px]">
                      Colors
                    </h2>
                    <div className="flex gap-2 gap-y-3 flex-wrap">
                      {colors.map((color) => (
                        <label htmlFor={color + "select"} key={color}>
                          <input
                            type="checkbox"
                            name="color"
                            id={color + "select"}
                            value={color}
                            className="appearance-none peer hidden"
                            onChange={handleChange}
                          />
                          <div className="h-7 w-7 p-0.5 cursor-pointer hover:border-black hover:shadow-md hover:scale-110 transition-all duration-300 rounded-full peer-checked:scale-110 peer-checked:opacity-90 peer-checked:border-2 peer-checked:border-black">
                            <div
                              style={{ backgroundColor: color }}
                              className="w-full h-full rounded-full border border-gray-500"
                            />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* property */}

                {properties?.length > 0 && (
                  <div className="flex gap-3 flex-wrap items-center mt-5">
                    <label className="text-black min-w-[100px]">Property</label>
                    <div className="flex gap-2 gap-y-3 flex-wrap">
                      <select
                        name="property"
                        id="cartProperty"
                        className="outline-none px-4 py-2 border cursor-pointer"
                        onChange={handleChange}
                        value={selectData.property}
                      >
                        {properties.map((prop) => (
                          <option value={prop} key={prop}>
                            {prop}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* composition */}

                {composition?.length > 0 && (
                  <div className="flex flex-wrap gap-3 items-center mt-5">
                    <label className="text-black min-w-[100px]">
                      Composition
                    </label>
                    <div className="flex gap-2 gap-y-3 flex-wrap">
                      <select
                        name="composition"
                        id="cartComposition"
                        className="outline-none px-4 py-2 border cursor-pointer"
                        onChange={handleChange}
                        value={selectData.composition}
                      >
                        {composition.map((prop) => (
                          <option value={prop} key={prop}>
                            {prop}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <p className="text-heading_color mt-5 font-semibold">
                  Quantity
                </p>
                <div className="flex gap-4 items-center mt-3 flex-wrap">
                  <Quantity stock={quantity} />
                  <div className="flex gap-2 items-center">
                    <button
                      type="button"
                      className="h-10 px-6 text-sm flex justify-center items-center bg-primary_btn_bg text-primary_btn_text hover:bg-primary_btn_bg_hover hover:to-primary_btn_text_hover capitalize transition-colors duration-300"
                      onClick={() => {
                        dispatch(setProductModal());
                        dispatch(
                          handleAddCart({
                            title: title,
                            id: id,
                            prize: prize,
                            old_prize: old_prize,
                            discount: discount,
                            image: images[activeImg],
                            stock: stock,
                            amount: _amount,
                            ...selectData,
                          })
                        );
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      className="h-10 px-3 flex justify-center items-center bg-gray-100 text-text_color hover:bg-primary_btn_bg hover:text-primary_btn_text transition-colors duration-300"
                    >
                      <Heart />
                    </button>
                    <button
                      type="button"
                      className="h-10 px-3 flex justify-center items-center bg-gray-100 text-text_color hover:bg-primary_btn_bg hover:text-primary_btn_text transition-colors duration-300"
                    >
                      <Compare />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-3 mt-8">
              <div className="flex gap-3 items-center">
                <p className="text-heading_color">Share</p>
                <div className="text-black hover:text-primary">
                  <Facebook />
                </div>
                <div className="text-black hover:text-primary">
                  <Twitter />
                </div>
                <div className="text-black hover:text-primary">
                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
