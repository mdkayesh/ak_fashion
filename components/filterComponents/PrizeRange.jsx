"use client";

import React, { useEffect } from "react";
import styles from "../styles";
import { Minus, Plus } from "@/utils/icons";

const PrizeRange = ({
  handleChange,
  values,
  setValues,
  maxPrize,
  filterName,
  handleFilterName,
}) => {
  useEffect(() => {
    setValues((prev) => {
      return { ...prev, maxPrize: maxPrize || 0 };
    });

    return () => null;
  }, [maxPrize]);

  return (
    <div className="prize-range mt-3 lg:mt-6">
      <h3
        className={`${styles.filterHeading}`}
        onClick={() => handleFilterName("prizeRange")}
      >
        <span>Prize</span>
        <span className="lg:hidden">
          {filterName === "prizeRange" ? <Minus /> : <Plus />}
        </span>
      </h3>

      <div
        className={`${
          filterName === "prizeRange" ? "h-[60px]" : "h-0 lg:h-auto"
        } transition-all duration-500 ease-in-out overflow-hidden`}
      >
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
    </div>
  );
};

export default PrizeRange;
