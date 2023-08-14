"use client";

import React, { useEffect } from "react";
import styles from "../styles";

const PrizeRange = ({ handleChange, values, setValues, maxPrize }) => {
  useEffect(() => {
    setValues((prev) => {
      return { ...prev, maxPrize: maxPrize || 0 };
    });

    return () => null;
  }, [maxPrize]);

  return (
    <div className="prize-range mt-6">
      <h3 className={`${styles.filterHeading}`}>Prize</h3>
      <div className="flex justify-between items-center mb-3">
        <span>${values.minPrize}</span>
        <span>${values.maxPrize}</span>
      </div>
      <div className="relative h-2">
        <div className="overflow-hidden h-full w-full px-1 bg-gray-100 relative">
          <div
            className="w-full h-full bg-black absolute top-0"
            style={{
              width: `calc(${
                ((values.maxPrize - values.minPrize) / maxPrize) * 100
              }% - 6px)`,
              left: `calc(${(values.minPrize / maxPrize) * 100}% + 4px)`,
            }}
          />
        </div>
        <input
          type="range"
          name="minPrize"
          id="min"
          min={0}
          max={maxPrize}
          value={values.minPrize}
          onChange={handleChange}
          className="absolute top-0 left-0 w-full h-full"
        />
        <input
          type="range"
          name="maxPrize"
          id="max"
          min={0}
          max={maxPrize}
          className="absolute top-0 left-0 w-full h-full"
          onChange={handleChange}
          value={values.maxPrize}
        />
      </div>
    </div>
  );
};

export default PrizeRange;
