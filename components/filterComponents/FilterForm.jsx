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
  filterBy,
  getTheDocs,
  setLoading,
  setProductsLength,
} from "@/redux/features/filterSlice";
import {
  and,
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
import {
  db,
  getAllProducts,
  getCount,
  getProductsByCategory,
} from "@/firebase/firebase";

const FilterForm = () => {
  const { handleChange, values, setValues } = useFormik({
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

  const colRef = collection(db, "all_products");
  let q = query(colRef);
  const limitCount = 10;

  useEffect(() => {
    const { categories, colors, minPrize, maxPrize } = values;
    let cancel = false;

    // set loading

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

  return (
    <form action={""}>
      <Categories handleChange={handleChange} values={values} />
      <PrizeRange
        handleChange={handleChange}
        values={values}
        setValues={setValues}
        maxPrize={max}
      />
      <Colors handleChange={handleChange} />
      <Sizes handleChange={handleChange} />
      <Compositions handleChange={handleChange} />
      <Property handleChange={handleChange} />
      <Availability handleChange={handleChange} />
    </form>
  );
};

export default FilterForm;
