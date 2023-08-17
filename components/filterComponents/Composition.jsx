import { Checked, Minus, Plus } from "@/utils/icons";
import styles from "../styles";

const Compositions = ({
  values,
  handleChange,
  filterName,
  handleFilterName,
}) => {
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
    <div className="mt-3 lg:mt-6">
      <h3
        className={`${styles.filterHeading}`}
        onClick={() => handleFilterName("compositions")}
      >
        <span>Compositions</span>
        <span className="lg:hidden">
          {filterName === "compositions" ? <Minus /> : <Plus />}
        </span>
      </h3>
      <div
        className={`${
          filterName === "compositions"
            ? "max-h-[350px]"
            : "max-h-0 lg:max-h-[350px]"
        } transition-all duration-500 ease-in-out overflow-hidden`}
      >
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
                  checked={values.compositions.includes(com.title)}
                  onChange={handleChange}
                />
                <Checked className={`${styles.filterChecked}`} />
              </div>
              <span className={`${styles.inputText} capitalize`}>
                {com.title}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Compositions;
