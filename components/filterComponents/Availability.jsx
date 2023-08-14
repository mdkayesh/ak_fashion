import { Checked } from "@/utils/icons";
import styles from "../styles";

const Availability = ({ handleChange }) => {
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
    <div className="mt-6">
      <h3 className={`${styles.filterHeading}`}>Availability</h3>
      <div>
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
                  onChange={handleChange}
                />
                <Checked className={`${styles.filterChecked}`} />
              </div>
              <span className={`${styles.inputText} capitalize`}>
                {avail.title}
              </span>
            </div>
            <span>7</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Availability;
