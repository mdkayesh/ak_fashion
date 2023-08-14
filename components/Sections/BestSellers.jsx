import React from "react";
import BestSellersSlider from "../BestSellersSlider";
import styles from "../styles";

const BestSellers = () => {
  return (
    <section className={`bestSellers ${styles.paddingX}`}>
      <div className="container">
        <BestSellersSlider />
      </div>
    </section>
  );
};

export default BestSellers;
