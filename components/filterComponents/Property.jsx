import { Checked } from "@/utils/icons";
import styles from "../styles";

const Property = ({ handleChange }) => {
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
    <div className="mt-6">
      <h3 className={`${styles.filterHeading}`}>Property</h3>
      <div>
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
                  className={`${styles.filterInput}`}
                />
                <Checked className={`${styles.filterChecked}`} />
              </div>
              <span className={`${styles.inputText} capitalize`}>
                {prop.title}
              </span>
            </div>
            <span>7</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Property;
