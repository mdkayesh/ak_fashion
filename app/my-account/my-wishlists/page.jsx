import styles from "@/components/styles";

const WishList = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <div className="container">
        <div className="border p-6 mt-14">
          <h1 className={`${styles.h1} text-center`}>My Wishlist</h1>
          <p className="mt-10 text-center text-black">
            You haven't add any product to wishlist
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishList;
