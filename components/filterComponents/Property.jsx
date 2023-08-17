import { Checked, Minus, Plus } from "@/utils/icons";
import styles from "../styles";

const Property = ({ handleChange, filterName, handleFilterName, values }) => {
  const property = [
    {
      title: "120 pages",
    },
    {
      title: "long sleeves",
    },
    {
      title: "removable cover",
    },
    {
      title: "short sleeves",
    },
  ];

  return (
    <div className="mt-3 lg:mt-6">
      <h3
        className={`${styles.filterHeading}`}
        onClick={() => handleFilterName("property")}
      >
        <span>Property</span>
        <span className="lg:hidden">
          {filterName === "property" ? <Minus /> : <Plus />}
        </span>
      </h3>
      <div
        className={`${
          filterName === "property"
            ? "max-h-[350px]"
            : "max-h-0 lg:max-h-[350px]"
        } transition-all duration-500 ease-in-out overflow-hidden`}
      >
        {property.map((prop) => (
          <label
            htmlFor={prop.title}
            className={`${styles.filterLevel}`}
            key={prop.title}
          >
            <div className="flex items-center">
              <div className={`${styles.inputContainer}`}>
                <input
                  type="checkbox"
                  name="properties"
                  id={prop.title}
                  value={prop.title}
                  onChange={handleChange}
                  checked={values.properties.includes(prop.title)}
                  className={`${styles.filterInput}`}
                />
                <Checked className={`${styles.filterChecked}`} />
              </div>
              <span className={`${styles.inputText} capitalize`}>
                {prop.title}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Property;
