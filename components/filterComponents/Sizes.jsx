import { Checked, Minus, Plus } from "@/utils/icons";
import styles from "../styles";

const Sizes = ({ values, handleChange, filterName, handleFilterName }) => {
  const sizes = [
    {
      title: "sm",
    },
    {
      title: "md",
    },
    {
      title: "lg",
    },
    {
      title: "xl",
    },
    {
      title: "xxl",
    },
  ];

  return (
    <div className="mt-3 lg:mt-6">
      <h3
        className={`${styles.filterHeading}`}
        onClick={() => handleFilterName("sizes")}
      >
        <span>Sizes</span>
        <span className="lg:hidden">
          {filterName === "sizes" ? <Minus /> : <Plus />}
        </span>
      </h3>
      <div
        className={`${
          filterName === "sizes" ? "max-h-[350px]" : "max-h-0 lg:max-h-[350px]"
        } transition-all duration-500 ease-in-out overflow-hidden`}
      >
        {sizes.map((size) => (
          <label
            htmlFor={size.title}
            className={`${styles.filterLevel}`}
            key={size.title}
          >
            <div className="flex items-center">
              <div className={`${styles.inputContainer}`}>
                <input
                  type="checkbox"
                  name="sizes"
                  id={size.title}
                  value={size.title}
                  className={`${styles.filterInput}`}
                  checked={values.sizes.includes(size.title)}
                  onChange={handleChange}
                />
                <Checked className={`${styles.filterChecked}`} />
              </div>
              <span className="ml-3 uppercase">{size.title}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
