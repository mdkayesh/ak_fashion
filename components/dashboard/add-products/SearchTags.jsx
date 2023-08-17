import styles from "@/components/styles";
import { Cross } from "@/utils/icons";
import React, { useState } from "react";

const SearchTags = ({ tags, setValues, errors, handleBlur, touched }) => {
  const [currentTag, setCurrentTag] = useState("");

  const handleInputChange = (event) => {
    setCurrentTag(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === " " && currentTag.trim() !== "") {
      setValues((prev) => {
        return { ...prev, tags: [...prev.tags, currentTag.trim()] };
      });
      setCurrentTag("");
    } else if (event.key === "Backspace" && currentTag === "") {
      setValues((prev) => {
        return { ...prev, tags: tags.slice(0, -1) };
      });
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setValues((prev) => {
      return { ...prev, tags: tags.filter((tag) => tag !== tagToRemove) };
    });
  };

  return (
    <div className="w-full mt-7">
      <label htmlFor="product-tags" className={`${styles.label}`}>
        Enter products search key words
      </label>
      <div
        className={`flex flex-wrap border focus-within:border-black ${
          errors && touched ? "border-red-600" : ""
        }`}
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="tag bg-gray-200 px-2 py-2 flex gap-1 items-center mr-2 rounded-md"
          >
            <span>{tag}</span>
            <span
              className="tag-remove cursor-pointer"
              onClick={() => handleTagRemove(tag)}
            >
              <Cross />
            </span>
          </div>
        ))}

        <input
          // required
          type="text"
          name="tags"
          id="product-tags"
          className={`flex-1 border-none outline-none p-2`}
          placeholder="Enter search keywords..."
          value={currentTag}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onBlur={handleBlur}
        />
      </div>
      {errors && touched && (
        <p className={`${styles.inputErrorText}`}>{errors}</p>
      )}
    </div>
  );
};

export default SearchTags;
