import React from "react";
import styles from "../styles";
import Image from "next/image";
import NewProductsSlider from "../NewProductsSlider";
import BannerItem from "../BannerItem";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ConvertTimeToString, db } from "@/firebase/firebase";

const SpecialProduct = async () => {
  const colRef = collection(db, "all_products");
  const q = query(
    colRef,
    where("display", "array-contains", "special_products")
  );

  const products = [];

  try {
    const results = await getDocs(q);
    results.docs.forEach((doc) => {
      const data = { ...doc.data() };
      data.createdAt = ConvertTimeToString(data.createdAt);
      products.push({ ...data, id: doc.id });
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <section className={`${styles.paddingX}`}>
      <div className="container">
        <div className="flex gap-5 flex-row-reverse">
          <div className="hidden w-1/3 lg:block">
            <BannerItem
              title={"Jeans Jackets"}
              btnText={"Shop Now"}
              imgUrl={"/assets/banner-4.jpg"}
            />
          </div>
          <div className="newProducts relative w-full lg:w-2/3 [&_.swiper-wrapper]:pb-10">
            <h1
              className={`${styles.h1} capitalize mb-5 absolute top-0 left-0`}
            >
              Special Products
            </h1>
            <NewProductsSlider products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialProduct;
