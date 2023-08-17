"use client";

import ProductCart from "@/components/ProductCart";
import styles from "@/components/styles";
import { useSelector } from "react-redux";

const WishList = () => {
  const { wishList } = useSelector((state) => state.addToCartSlice);

  console.log(wishList);
  return (
    <div className={`${styles.paddingX}`}>
      <div className="container">
        <div className="border p-6 mt-14">
          <h1 className={`${styles.h1} text-center`}>My Wishlist</h1>

          {wishList.length === 0 ? (
            <p className="mt-10 text-center text-black">
              You haven't add any product to wishlist
            </p>
          ) : (
            <div className="grid gap-x-3 gap-y-6 md:gap-x-6 grid-cols-2 pt-14 max-[300px]:grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
              {wishList.map((product) => (
                <ProductCart {...product} key={product.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
