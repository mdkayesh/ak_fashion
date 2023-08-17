"use client";

import {
  Compare,
  Delete,
  Eye,
  Heart,
  StarFill,
  StarOutline,
} from "@/utils/icons";
import styles from "./styles";
import { ProductCartBtn } from ".";
import { setCurrProduct, setProductModal } from "@/redux/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import {
  handleAddCart,
  handleAddToWish,
} from "@/redux/features/addToCartSlice";

const ProductCart = (props) => {
  const {
    title,
    prize,
    old_prize,
    rating_star,
    discount,
    badges,
    hover_img_url,
    thumbnail_img_url,
    id,
    colors,
    sizes,
    composition,
    properties,
    stock,
  } = props;

  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.addToCartSlice);
  const isAddedToWish = wishList.find((w) => w.id === id);

  return (
    <div className="productCart relative [&_.hoverImg]:hover:left-0 [&_.btn-white]:hover:ml-0 [&_.cart]:hover:bottom-0">
      <Link
        href={`/product/${id}`}
        className="block absolute top-0 left-0 w-full h-full bg-transparent z-10 opacity-0"
      ></Link>
      <div className="img relative overflow-hidden bg-gray-200">
        <Image
          src={hover_img_url}
          alt={title}
          width={400}
          height={400}
          className="hoverImg absolute top-0 w-full h-full -left-full transition-all duration-700 ease-in-out object-cover"
        />
        <Image
          src={thumbnail_img_url}
          alt={title}
          width={400}
          height={400}
          className="object-cover min-h-[250px] max-h-[250px] sm:max-h-[280px] w-full"
        />

        {/* discount and new */}
        <div className="flex flex-col gap-2 absolute top-2 left-2">
          {discount && (
            <p className="text-xs p-1 rounded bg-secondary_btn_bg text-secondary_btn_text">
              -{discount}%
            </p>
          )}
          {badges?.map((item) => (
            <p
              className="text-xs p-1 rounded bg-primary_btn_bg text-primary_btn_text"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2 absolute top-2 right-2 overflow-hidden z-20">
          <ProductCartBtn
            icon={isAddedToWish ? <Delete /> : <Heart />}
            onclick={() => dispatch(handleAddToWish(props))}
          />
          <ProductCartBtn
            icon={<Eye />}
            onclick={() => {
              dispatch(setProductModal());
              dispatch(setCurrProduct(props));
            }}
            className={"delay-100"}
          />
          <ProductCartBtn icon={<Compare />} className={"delay-200"} />
        </div>

        <button
          type="button"
          className={`${styles.btn_primary} whitespace-nowrap cart absolute left-1/2 -translate-x-1/2 bottom-0 md:-bottom-full z-20`}
          onClick={() =>
            dispatch(
              handleAddCart({
                title: title,
                id: id,
                prize: prize,
                old_prize: old_prize,
                discount: discount,
                image: thumbnail_img_url,
                stock: stock,
                amount: 1,
                color: colors[0],
                size: sizes[0],
                composition: composition[0],
                property: properties[0],
              })
            )
          }
        >
          add to cart
        </button>
      </div>
      <div className="content text-center py-3 px-2">
        <div className="flex gap-1 items-center justify-center">
          {[...new Array(5)].map((_, index) => (
            <span key={index}>
              {rating_star >= index + 1 ? (
                <StarFill className="fill-yellow-400" />
              ) : (
                <StarOutline />
              )}
            </span>
          ))}
        </div>
        <Link
          href={`/product/${id}`}
          className={`font-semibold text-heading_color mt-2 text-base line-clamp-1 relative z-20 hover:text-primary`}
          title={title}
        >
          {title}
        </Link>
        <p className="flex gap-2 text-sm text-heading_color justify-center mt-2 font-semibold">
          <span>${prize}</span>
          {old_prize && (
            <span className="line-through text-text_color">${old_prize}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
