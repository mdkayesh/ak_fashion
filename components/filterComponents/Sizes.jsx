import { Checked } from "@/utils/icons";
import styles from "../styles";

const Sizes = ({ handleChange }) => {
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
    <div className="mt-6">
      <h3 className={`${styles.filterHeading}`}>Sizes</h3>
      <div>
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
                  onChange={handleChange}
                />
                <Checked className={`${styles.filterChecked}`} />
              </div>
              <span className="ml-3 uppercase">{size.title}</span>
            </div>
            <span>7</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
