import { CategoryNav } from "@/components";
import CategoryPagination from "@/components/CategoryPagination";
import CategoryProducts from "@/components/CategoryProducts";
import FilterForm from "@/components/filterComponents/FilterForm";
import styles from "@/components/styles";

const Category = () => {
  return (
    <div className={`category ${styles.paddingX}`}>
      <div className={`container text-sm`}>
        <div className="flex gap-6 py-10">
          {/* left */}
          <div className="flex-1">
            <img
              src="https://prestashop.mahardhi.com/MT08/wearzo/01/c/10-category_default/shop.jpg"
              alt="banner"
            />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2 className="text-lg font-[500] text-heading_color mt-4">
              Recent Searches
            </h2>
            <div className="flex gap-3 mt-3 flex-wrap">
              <button
                type="button"
                className="px-4 md:px-6 py-2 bg-gray-100 hover:text-primary_btn_text hover:bg-primary_btn_bg transition-colors duration-300"
              >
                Western
              </button>
              <button
                type="button"
                className="px-4 md:px-6 py-2 bg-gray-100 hover:text-primary_btn_text hover:bg-primary_btn_bg transition-colors duration-300"
              >
                Traditional
              </button>
              <button
                type="button"
                className="px-4 md:px-6 py-2 bg-gray-100 hover:text-primary_btn_text hover:bg-primary_btn_bg transition-colors duration-300"
              >
                Party Wear
              </button>
            </div>

            {/* nav */}

            <CategoryNav />
            <CategoryProducts />
            <CategoryPagination />
          </div>
          {/* right */}
          <div className="min-w-[220px] max-w-[220px] px-3 hidden lg:block">
            <FilterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
