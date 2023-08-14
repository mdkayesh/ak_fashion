import styles from "../styles";
import NewProductsSlider from "../NewProductsSlider";
import BannerItem from "../BannerItem";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ConvertTimeToString, db } from "@/firebase/firebase";

const NewProducts = async () => {
  const colRef = collection(db, "all_products");
  const q = query(colRef, where("display", "array-contains", "new_products"));
  const products = [];

  const results = await getDocs(q);
  try {
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
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full flex gap-6 max-[360px]:flex-col lg:w-1/3 lg:block">
            <div className="w-1/2 max-[360px]:w-full lg:w-full">
              <BannerItem
                title={"Stylish Shirts"}
                btnText={"Shop Now"}
                imgUrl={"/assets/banner-3.jpg"}
              />
            </div>

            <div className="w-1/2 max-[360px]:w-full lg:hidden">
              <BannerItem
                title={"Jeans Jackets"}
                btnText={"Shop Now"}
                imgUrl={"/assets/banner-4.jpg"}
              />
            </div>
          </div>
          <div className="newProducts relative w-full lg:w-2/3 [&_.swiper-wrapper]:pb-10">
            <h1
              className={`${styles.h1} capitalize mb-5 absolute top-0 left-0`}
            >
              New Products
            </h1>
            <NewProductsSlider products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
