"use client";

import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import styles from "./styles";

const CategoryProducts = () => {
  const { all_products, loading } = useSelector((state) => state.filterSlice);

  return loading ? (
    <div className="grid gap-6 grid-cols-2 pt-14 max-[300px]:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
      {[...Array(10)].map((_, index) => (
        <div className="w-full h-full" key={index}>
          <div className={`${styles.loaderBox} h-72 w-full`} />
          <div className={`${styles.loaderLine} h-5 w-2/3 mx-auto mt-4`} />
          <div className="flex gap-2 justify-center mt-4">
            <div className={`${styles.loaderLine} h-4 w-12`} />
            <div className={`${styles.loaderLine} h-4 w-12`} />
          </div>
        </div>
      ))}
    </div>
  ) : all_products.length === 0 ? (
    <div className="">There is no product available.</div>
  ) : (
    <div className="grid gap-x-3 gap-y-6 md:gap-x-6 grid-cols-2 pt-14 max-[300px]:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
      {all_products?.map((product) => (
        <ProductCart {...product} key={product?.id} />
      ))}
    </div>
  );
};

export default CategoryProducts;
