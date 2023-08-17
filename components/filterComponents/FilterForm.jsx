"use client";

import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Categories, Sizes } from "..";
import PrizeRange from "./PrizeRange";
import Colors from "./Colors";
import Compositions from "./Composition";
import Property from "./Property";
import Availability from "./Availability";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheDocs,
  setLoading,
  setProductsLength,
} from "@/redux/features/filterSlice";
import {
  collection,
  getDocs,
  limit,
  or,
  orderBy,
  query,
  startAfter,
  startAt,
  where,
} from "firebase/firestore";
import { db, getCount } from "@/firebase/firebase";
import styles from "../styles";

const FilterForm = () => {
  const { handleChange, values, setValues, resetForm } = useFormik({
    initialValues: {
      categories: [],
      minPrize: 0,
      maxPrize: 0,
      colors: [],
      sizes: [],
      compositions: [],
      properties: [],
      availablility: [],
    },
  });

  const { currentPage } = useSelector((state) => state.filterSlice);
  const dispatch = useDispatch();
  const [max, setMax] = useState();
  const [lastVisible, setLastVisible] = useState();
  const [clearFilter, setClearFilter] = useState(false);
  const [filterName, setFilterName] = useState(null); // for mobile device

  const colRef = collection(db, "all_products");
  let q = query(colRef);
  const limitCount = 10;

  useEffect(() => {
    const { categories, colors, minPrize, maxPrize } = values;
    let cancel = false;

    // set loading
    if (categories.length > 0 || colors.length > 0 || minPrize > 0) {
      setClearFilter(true);
    } else {
      setClearFilter(false);
    }

    dispatch(setLoading(true));

    if (categories.length > 0) {
      const lower = categories.map((category) => category.toLowerCase());
      q = query(q, where("category", "in", lower));
    }

    if (colors.length > 0) {
      q = query(q, where("colors", "array-contains-any", colors));
    }

    if (minPrize) {
      q = query(q, where("prize", ">=", minPrize));
    }

    if (maxPrize) {
      q = query(q, or(where("prize", "<=", maxPrize)));
    }

    getCount(q).then((count) => {
      dispatch(setProductsLength(count));
    });

    if (limitCount) {
      q = query(
        q,
        orderBy("prize", "asc"),
        orderBy("createdAt", "desc"),
        startAt(0),
        limit(limitCount)
      );
    }

    if (currentPage > 1) {
      q = query(q, startAfter(lastVisible || 0));
    }

    if (cancel) return;

    dispatch(getTheDocs({ q, values, setLastVisible }));

    return () => (cancel = true);
  }, [values, currentPage]);

  // get the maximum prize of product
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await getDocs(
          query(colRef, orderBy("prize", "desc"), limit(1))
        );

        // get all products length

        res.docs.forEach((item) => {
          setMax(item.data().prize);
        });
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }

    return () => null;
  }, []);

  const handleFilterName = (name) => {
    setFilterName(name !== filterName ? name : null);
  };

  return (
    <form action={""}>
      <h2 className="text-heading_color text-lg font-semibold mb-4 lg:hidden">
        Filter by
      </h2>
      {clearFilter && (
        <button
          type="button"
          className={`${styles.btn_rounded_secondary} mb-4`}
          onClick={() =>
            setValues({
              categories: [],
              minPrize: 0,
              maxPrize: max,
              colors: [],
              sizes: [],
              compositions: [],
              properties: [],
              availablility: [],
            })
          }
        >
          Clear Filter
        </button>
      )}
      <Categories
        handleChange={handleChange}
        values={values}
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
      <PrizeRange
        handleChange={handleChange}
        values={values}
        setValues={setValues}
        maxPrize={max}
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
      <Colors
        handleChange={handleChange}
        filterName={filterName}
        handleFilterName={handleFilterName}
        values={values}
      />
      <Sizes
        handleChange={handleChange}
        filterName={filterName}
        handleFilterName={handleFilterName}
        values={values}
      />
      <Compositions
        handleChange={handleChange}
        filterName={filterName}
        handleFilterName={handleFilterName}
        values={values}
      />
      <Property
        handleChange={handleChange}
        filterName={filterName}
        handleFilterName={handleFilterName}
        values={values}
      />
      <Availability
        handleChange={handleChange}
        filterName={filterName}
        handleFilterName={handleFilterName}
        values={values}
      />
    </form>
  );
};

export default FilterForm;
