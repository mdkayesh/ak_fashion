import { Checked } from "@/utils/icons";
import styles from "../styles";

const Compositions = ({ handleChange }) => {
  const compositions = [
    {
      title: "ceramic",
    },
    {
      title: "cotton",
    },
    {
      title: "matt paper",
    },
    {
      title: "polyester",
    },
    {
      title: "recycled cardboard",
    },
  ];

  return (
    <div className="mt-6">
      <h3 className={`${styles.filterHeading}`}>Compositions</h3>
      <div>
        {compositions.map((com) => (
          <label
            htmlFor={com.title}
            className={`${styles.filterLevel}`}
            key={com.title}
          >
            <div className="flex items-center">
              <div className={`${styles.inputContainer}`}>
                <input
                  type="checkbox"
                  name="compositions"
                  id={com.title}
                  value={com.title}
                  className={`${styles.filterInput}`}
                  onChange={handleChange}
                />
                <Checked className={`${styles.filterChecked}`} />
              </div>
              <span className={`${styles.inputText} capitalize`}>
                {com.title}
              </span>
            </div>
            <span>7</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Compositions;
