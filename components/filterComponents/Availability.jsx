import { Checked, Minus, Plus } from "@/utils/icons";
import styles from "../styles";

const Availability = ({
  handleChange,
  filterName,
  handleFilterName,
  values,
}) => {
  const availability = [
    {
      title: "available",
    },
    {
      title: "in stock",
    },
    {
      title: "out of stock",
    },
  ];

  return (
    <div className="mt-3 lg:mt-6">
      <h3
        className={`${styles.filterHeading}`}
        onClick={() => handleFilterName("available")}
      >
        <span>Availability</span>
        <span className="lg:hidden">
          {filterName === "available" ? <Minus /> : <Plus />}
        </span>
      </h3>
      <div
        className={`${
          filterName === "available"
            ? "max-h-[350px]"
            : "max-h-0 lg:max-h-[350px]"
        } transition-all duration-500 ease-in-out overflow-hidden`}
      >
        {availability.map((avail) => (
          <label
            htmlFor={avail.title}
            className={`${styles.filterLevel}`}
            key={avail.title}
          >
            <div className="flex items-center">
              <div className={`${styles.inputContainer}`}>
                <input
                  type="checkbox"
                  name="availability"
                  id={avail.title}
                  value={avail.title}
                  className={`${styles.filterInput}`}
                  checked={values.availablility.includes(avail.title)}
                  onChange={handleChange}
                />
                <Checked className={`${styles.filterChecked}`} />
              </div>
              <span className={`${styles.inputText} capitalize`}>
                {avail.title}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Availability;
