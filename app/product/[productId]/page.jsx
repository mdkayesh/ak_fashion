"use client";

import { Quantity } from "@/components";
import ImageZoom from "@/components/ImageZoom";
import ModalSlider from "@/components/ModalSlider";
import ModalSlider2 from "@/components/ModalSlider2";
import styles from "@/components/styles";
import { db } from "@/firebase/firebase";
import { handleAddCart } from "@/redux/features/addToCartSlice";
import { Compare, Facebook, Heart, Instagram, Twitter } from "@/utils/icons";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  const params = useParams();
  const { productId } = params;
  const dispatch = useDispatch();
  const { _amount } = useSelector((state) => state.addToCartSlice);

  //   states
  const [productData, setProductData] = useState();
  const [activeImg, setActiveImg] = useState(0);
  //   const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImgLoad] = useState(true);
  const [error, setError] = useState("");
  const [selectData, setSelectData] = useState({
    color: "",
    size: "",
    composition: "",
    property: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "all_products", productId);
        const data = await getDoc(docRef);
        const _data = { ...data.data() };

        _data.createdAt = _data.createdAt.toDate().toISOString();

        setProductData({ ..._data, id: data.id });
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();

    return () => null;
  }, [productId]);

  // add the dafault value to selected data
  useEffect(() => {
    setSelectData({
      color: productData?.colors[0],
      size: productData?.sizes[0],
      composition: productData?.composition[0],
      property: productData?.properties[0],
    });

    return () => null;
  }, [productData]);

  //    set all images in an array
  let otherImg = productData?.other_images ? productData?.other_images : [];

  useEffect(() => {
    setImgLoad(true);

    setImages([
      productData?.thumbnail_img_url,
      productData?.hover_img_url,
      ...otherImg,
    ]);
    setActiveImg(0);

    return () => null;
  }, [productData?.thumbnail_img_url, productData?.hover_img_url]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setSelectData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  if (loading) {
    return (
      <div
        className={`${styles.paddingX} loading flex gap-10 mt-12 flex-col md:flex-row container`}
      >
        <div className="w-full lg:w-1/2">
          <div className={`${styles.loaderBox} w-full min-h-[500px]`}></div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className={`${styles.loaderLine} h-7 max-w-[230px]`} />
          <div className={`${styles.loaderLine} h-5 max-w-[180px] mt-5`} />
          <div className={`${styles.loaderLine} h-4 mt-10`} />
          <div className={`${styles.loaderLine} h-4 mt-5`} />
          <div className={`${styles.loaderLine} h-4 mt-5`} />
          <div className={`${styles.loaderLine} h-4 mt-5`} />
          <div className={`${styles.loaderLine} h-4 mt-5 w-3/4`} />

          <div className="flex gap-4 mt-8">
            <div className={`${styles.loaderBox} mt-5 h-10 w-[100px]`} />
            <div className={`${styles.loaderBox} mt-5 h-10 w-[70px]`} />
            <div className={`${styles.loaderBox} mt-5 h-10 w-[70px]`} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(productData);
  return (
    <div className={`modalProduct ${styles.paddingX} mt-14`}>
      <div className="flex flex-col gap-5 container lg:flex-row">
        <div className="left flex gap-3 flex-col-reverse w-full md:flex-row lg:w-1/2">
          <div className="w-full md:min-w-[100px] md:max-w-[100px]">
            <div className="w-full max-w-full md:hidden">
              <ModalSlider
                images={images}
                setActiveImg={setActiveImg}
                loading={imgLoading}
              />
            </div>
            <div className="hidden md:block">
              <ModalSlider2
                images={images}
                setActiveImg={setActiveImg}
                loading={imgLoading}
              />
            </div>
          </div>
          <div className="flex-1 relative">
            <div
              className={`${
                imgLoading ? "opacity-100 visible" : "invisible opacity-0"
              } w-full h-full backdrop-blur-sm transition-all duration-500 absolute top-0 left-0`}
            />

            <Image
              src={images[activeImg]}
              alt="product"
              width={600}
              height={600}
              onLoad={() => setImgLoad(false)}
              className="w-full h-full object-cover"
            />
            <ImageZoom url={images[activeImg]} />
          </div>
        </div>
        <div className="right w-full lg:w-1/2">
          <h2 className={`${styles.h2} mb-3`}>{productData?.title}</h2>
          {productData?.old_prize && (
            <p className="line-through text-sm text-text_color">
              ${productData?.old_prize}
            </p>
          )}
          <div className="flex gap-3 my-2">
            <p className="text-xl text-heading_color">${productData?.prize}</p>
            {productData?.discount && (
              <p className="text-sm p-1 text-primary_btn_text bg-primary_btn_bg">
                Save {productData?.discount}%
              </p>
            )}
          </div>
          <p className="text-xs">Tax included</p>
          <article className="text-base mt-5 leading-relaxed">
            {productData?.description}
          </article>

          {/* sizes */}

          {productData?.sizes?.length > 0 && (
            <div className="flex gap-3 mt-5 items-center">
              <label htmlFor="sizesSelect" className="text-black min-w-[100px]">
                Sizes
              </label>
              <select
                name="size"
                id="sizesSelect"
                defaultValue={productData?.sizes[0]}
                className="outline-none px-4 py-2 border cursor-pointer"
                onChange={handleChange}
              >
                {productData?.sizes.map((size) => (
                  <option value={size} key={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* colors */}

          {productData?.colors?.length > 0 && (
            <div className="flex gap-3 items-center mt-5">
              <h2 className="text-black min-w-[100px]">Colors</h2>
              <div className="flex gap-2 gap-y-3 flex-wrap">
                {productData?.colors.map((color) => (
                  <label htmlFor={color + "select"} key={color}>
                    <input
                      type="radio"
                      name="color"
                      id={color + "select"}
                      value={color}
                      defaultValue={productData?.colors[0]}
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

          {productData?.properties?.length > 0 && (
            <div className="flex gap-3 items-center mt-5">
              <label className="text-black min-w-[100px]">Property</label>
              <div className="flex gap-2 gap-y-3 flex-wrap">
                <select
                  name="property"
                  id="cartProperty"
                  className="outline-none px-4 py-2 border cursor-pointer"
                  onChange={handleChange}
                  value={selectData.property}
                  defaultValue={productData?.properties[0]}
                >
                  {productData?.properties?.map((prop) => (
                    <option value={prop} key={prop}>
                      {prop}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* composition */}

          {productData?.composition?.length > 0 && (
            <div className="flex gap-3 items-center mt-5">
              <label className="text-black min-w-[100px]">Composition</label>
              <div className="flex gap-2 gap-y-3 flex-wrap">
                <select
                  name="composition"
                  id="cartComposition"
                  className="outline-none px-4 py-2 border cursor-pointer"
                  onChange={handleChange}
                  value={selectData.composition}
                  defaultValue={productData?.composition[0]}
                >
                  {productData?.composition?.map((prop) => (
                    <option value={prop} key={prop}>
                      {prop}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <p className="text-heading_color mt-5 font-semibold">Quantity</p>
          <div className="flex gap-4 items-center mt-3 flex-wrap">
            <Quantity stock={productData?.quantity} />
            <div className="flex gap-2 items-center">
              <button
                type="button"
                className="h-10 px-6 text-sm flex justify-center items-center bg-primary_btn_bg text-primary_btn_text hover:bg-primary_btn_bg_hover hover:to-primary_btn_text_hover capitalize transition-colors duration-300"
                onClick={() => {
                  dispatch(
                    handleAddCart({
                      title: productData?.title,
                      id: productData?.id,
                      prize: productData?.prize,
                      old_prize: productData?.old_prize,
                      discount: productData?.discount,
                      image: images[activeImg],
                      stock: productData?.quantity,
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
        <div className="flex gap-3 items-center container">
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
  );
};

export default SingleProduct;
