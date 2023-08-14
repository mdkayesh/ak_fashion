"use client";

import styles from "@/components/styles";
import { Checked } from "@/utils/icons";
import React, { useEffect, useState } from "react";
import ImageUploadCart from "./ImageUploadCart";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateModal } from "@/redux/features/modalSlice";
import SearchTags from "./SearchTags";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { addProductSchema } from "@/components/yup";

const colors = [
  "#ffffff",
  "#000000",
  "#AAB2BD",
  "#FCCACD",
  "#556B2F",
  "#CD5C5C",
  "#483D8B",
  "#5D9CEC",
  "#F1C40F",
  "#964B00",
  "#FAEBD7",
];

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

const display = [
  { title: "best sellers", value: "best_sellers" },
  { title: "featured", value: "featured" },
  { title: "new products", value: "new_products" },
  { title: "special products", value: "special_products" },
];

const dressProperties = [
  "neckline",
  "short sleeves",
  "long sleeves",
  "embellishments",
  "fit",
  "occasion",
  "removal cover",
];

const composition = [
  "ceramic",
  "cotton",
  "matt paper",
  "polyester",
  "recycled cardboard",
];

const badges = ["new", "pack"];

const UpdateProductModal = () => {
  // states
  const [loading, setLoading] = useState(false);
  const { isUpdateModal, currentProduct } = useSelector(
    (state) => state.modalSlice
  );
  const dispatch = useDispatch();

  const {
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    errors,
    setValues,
    touched,
  } = useFormik({
    initialValues: {
      title: "",
      thumbnail_img_url: "",
      hover_img_url: "",
      other_images: [],
      category: "",
      description: "",
      prize: "",
      old_prize: "",
      discount: "",
      colors: [],
      properties: [],
      sizes: [],
      quantity: "",
      composition: [],
      display: [],
      badges: [],
      tags: [],
    },
    validationSchema: addProductSchema,

    onSubmit: (values) => {
      setLoading(true);
      const docRef = doc(db, "all_products", currentProduct.id);
      updateDoc(docRef, { ...values, createdAt: serverTimestamp() })
        .then(() => {
          setLoading(false);
          dispatch(setUpdateModal());
        })
        .catch((err) => console.log(err));
    },
  });

  useEffect(() => {
    if (!currentProduct.colors) return;
    setValues({ ...currentProduct });
  }, [isUpdateModal]);

  return (
    <div
      className={`${
        isUpdateModal
          ? "translate-y-0 opacity-100 visible"
          : "-translate-y-14 opacity-0 invisible"
      } fixed top-0 left-0 w-full h-screen bg-[#0000007b] z-50 overflow-auto transition-all duration-500`}
    >
      <div
        className="flex justify-center items-center min-h-screen py-10 px-10"
        onClick={() => {
          dispatch(setUpdateModal());
        }}
      >
        <div
          className={`bg-white rounded-2xl px-5 py-8 max-w-4xl`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-semibold mb-6 pb-4 border-b">
            Update Products
          </h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-7">
              <div className="w-full md:w-1/3">
                <div className="sticky top-16">
                  <ImageUploadCart
                    values={values}
                    setValues={setValues}
                    imageProperty={"thumbnail_img_url"}
                    errors={errors}
                    handleBlur={handleBlur}
                    touched={touched}
                  />

                  <div className="grid gap-3 grid-cols-2 mt-6">
                    <ImageUploadCart
                      values={values}
                      setValues={setValues}
                      imageProperty={"hover_img_url"}
                      errors={errors}
                      handleBlur={handleBlur}
                      touched={touched}
                    />
                    {[...Array(5)].map((_, index) => (
                      <ImageUploadCart
                        values={values}
                        setValues={setValues}
                        imageProperty={"other_images"}
                        index={index}
                        key={index}
                        errors={errors}
                        handleBlur={handleBlur}
                        touched={touched}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex gap-6 flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="product-name" className={`${styles.label}`}>
                      Product Name
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      id="product-name"
                      className={`${styles.input} ${
                        errors.title && touched.title
                          ? styles.inputErrorBorder
                          : ""
                      }`}
                      placeholder="Name"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.title && touched.title && (
                      <p className={`${styles.inputErrorText}`}>
                        {errors.title}
                      </p>
                    )}
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="product-name" className={`${styles.label}`}>
                      Select Category
                    </label>
                    <select
                      required
                      name="category"
                      id="category"
                      onChange={handleChange}
                      value={values.category}
                      className={`${styles.input} ${
                        errors.category && touched.category
                          ? styles.inputErrorBorder
                          : ""
                      }`}
                      onBlur={handleBlur}
                    >
                      <option value="">Select</option>
                      <option value="men">men</option>
                      <option value="women">women</option>
                      <option value="kids">kids</option>
                      <option value="party wear">party wear</option>
                      <option value="traditional">traditional</option>
                      <option value="western">western</option>
                    </select>
                    {errors.category && touched.category && (
                      <p className={`${styles.inputErrorText}`}>
                        {errors.category}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-7">
                  <label htmlFor="description" className={`${styles.label}`}>
                    Short Description
                  </label>
                  <textarea
                    required
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={values.description}
                    cols="30"
                    rows="4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.input} ${
                      errors.description && touched.description
                        ? styles.inputErrorBorder
                        : ""
                    }`}
                  ></textarea>
                  {errors.description && touched.description && (
                    <p className={`${styles.inputErrorText}`}>
                      {errors.description}
                    </p>
                  )}
                </div>

                <div className="flex gap-6 mt-7 flex-col sm:flex-row">
                  <div className="w-full md:w-1/2">
                    <h4 className={`${styles.label}`}>Colors</h4>
                    <div className="flex gap-2 gap-y-3 flex-wrap">
                      {colors.map((color) => (
                        <label
                          htmlFor={color}
                          key={color}
                          id="colors"
                          onBlur={handleBlur}
                        >
                          <input
                            type="checkbox"
                            name="colors"
                            id={color}
                            value={color}
                            className="appearance-none peer hidden"
                            onChange={handleChange}
                            checked={values.colors.includes(color)}
                          />
                          <div className="h-7 w-7 p-0.5 cursor-pointer hover:border-black hover:shadow-md hover:scale-110 transition-all duration-300 rounded-full peer-checked:scale-110 peer-checked:opacity-90 peer-checked:border-2 peer-checked:border-black">
                            <div
                              style={{ backgroundColor: color }}
                              className="w-full h-full rounded-full border border-gray-500"
                            />
                          </div>
                        </label>
                      ))}
                      {errors.colors && touched.colors && (
                        <p className={`${styles.inputErrorText}`}>
                          {errors.colors}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className={`${styles.label}`}>Sizes</h4>
                    <div className="flex gap-x-4 gap-y-2 flex-wrap">
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
                                className={`${styles.filterInput}`}
                                onChange={handleChange}
                                value={size.title}
                                checked={values.sizes.includes(size.title)}
                                onBlur={handleBlur}
                              />
                              <Checked className={`${styles.filterChecked}`} />
                            </div>
                            <span className="ml-3 capitalize">
                              {size.title}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.sizes && touched.sizes && (
                      <p className={`${styles.inputErrorText}`}>
                        {errors.sizes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-6 mt-7 flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="prize" className={`${styles.label}`}>
                      Prize (In USD)
                    </label>
                    <input
                      required
                      type="number"
                      name="prize"
                      id="prize"
                      min={0}
                      placeholder="Prize"
                      step={0.01}
                      value={values.prize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${styles.input} ${
                        errors.prize && touched.prize
                          ? styles.inputErrorBorder
                          : ""
                      }`}
                    />

                    {errors.prize && touched.prize && (
                      <p className={`${styles.inputErrorText}`}>
                        {errors.prize}
                      </p>
                    )}
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="old_prize" className={`${styles.label}`}>
                      Old prize (In USD)
                    </label>
                    <input
                      type="number"
                      name="old_prize"
                      id="old_prize"
                      min={0}
                      step={0.01}
                      placeholder="Old prize"
                      value={values.old_prize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${styles.input} ${
                        errors.old_prize && touched.old_prize
                          ? styles.inputErrorBorder
                          : ""
                      }`}
                    />
                    {errors.old_prize && touched.old_prize && (
                      <p className={`${styles.inputErrorText}`}>
                        {errors.old_prize}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-6 mt-7 flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="quantity" className={`${styles.label}`}>
                      Quantity
                    </label>
                    <input
                      required
                      type="number"
                      name="quantity"
                      id="quantity"
                      min={0}
                      placeholder="Quantity"
                      value={values.quantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${styles.input} ${
                        errors.quantity && touched.quantity
                          ? styles.inputErrorBorder
                          : ""
                      }`}
                    />
                    {errors.quantity && touched.quantity && (
                      <p className={`${styles.inputErrorText}`}>
                        {errors.quantity}
                      </p>
                    )}
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="discount" className={`${styles.label}`}>
                      discount (In percent)
                    </label>
                    <input
                      type="number"
                      name="discount"
                      id="discount"
                      min={0}
                      max={100}
                      placeholder="Discount"
                      value={values.discount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${styles.input} ${
                        errors.discount && touched.discount
                          ? styles.inputErrorBorder
                          : ""
                      }`}
                    />
                    {errors.discount && touched.discount && (
                      <p className={`${styles.inputErrorText}`}>
                        {errors.discount}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-7">
                  <div className="w-full">
                    <h4 className={`${styles.label}`}>Badges</h4>
                    <div className="flex gap-x-4 gap-y-2 flex-wrap">
                      {badges.map((item) => (
                        <label
                          htmlFor={item}
                          className={`${styles.filterLevel}`}
                          key={item}
                        >
                          <div className="flex items-center">
                            <div className={`${styles.inputContainer}`}>
                              <input
                                type="checkbox"
                                name="badges"
                                id={item}
                                className={`${styles.filterInput}`}
                                onChange={handleChange}
                                checked={values.badges.includes(item)}
                                value={item}
                              />
                              <Checked className={`${styles.filterChecked}`} />
                            </div>
                            <span className="ml-3 capitalize">{item}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="w-full">
                    <h4 className={`${styles.label}`}>Where to Display</h4>
                    <div className="flex gap-x-4 gap-y-2 flex-wrap">
                      {display.map((item) => (
                        <label
                          htmlFor={item.value}
                          className={`${styles.filterLevel}`}
                          key={item.title}
                        >
                          <div className="flex items-center">
                            <div className={`${styles.inputContainer}`}>
                              <input
                                type="checkbox"
                                name="display"
                                id={item.value}
                                className={`${styles.filterInput}`}
                                onChange={handleChange}
                                checked={values.display.includes(item.value)}
                                value={item.value}
                              />
                              <Checked className={`${styles.filterChecked}`} />
                            </div>
                            <span className="ml-3 capitalize">
                              {item.title}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="w-full">
                    <h4 className={`${styles.label}`}>Composition</h4>
                    <div className="flex gap-x-4 gap-y-2 flex-wrap">
                      {composition.map((item) => (
                        <label
                          htmlFor={item}
                          className={`${styles.filterLevel}`}
                          key={item}
                        >
                          <div className="flex items-center">
                            <div className={`${styles.inputContainer}`}>
                              <input
                                type="checkbox"
                                name="composition"
                                id={item}
                                className={`${styles.filterInput}`}
                                onChange={handleChange}
                                checked={values.composition.includes(
                                  item.toLowerCase()
                                )}
                                value={item}
                              />
                              <Checked className={`${styles.filterChecked}`} />
                            </div>
                            <span className="ml-3 capitalize">{item}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="w-full">
                    <h4 className={`${styles.label}`}>Properties</h4>
                    <div className="flex gap-x-4 gap-y-2 flex-wrap">
                      {dressProperties.map((item) => (
                        <label
                          htmlFor={item}
                          className={`${styles.filterLevel}`}
                          key={item}
                        >
                          <div className="flex items-center">
                            <div className={`${styles.inputContainer}`}>
                              <input
                                type="checkbox"
                                name="properties"
                                id={item}
                                className={`${styles.filterInput}`}
                                onChange={handleChange}
                                checked={values.properties.includes(
                                  item.toLowerCase()
                                )}
                                value={item}
                              />
                              <Checked className={`${styles.filterChecked}`} />
                            </div>
                            <span className="ml-3 capitalize">{item}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <SearchTags
                  tags={values.tags}
                  setValues={setValues}
                  errors={errors.tags}
                  handleBlur={handleBlur}
                  touched={touched.tags}
                />
              </div>
            </div>
            <div className="flex justify-end flex-wrap mt-6 gap-7 items-center">
              <button
                type="button"
                className={`border px-4 md:px-6 py-1.5 rounded-[99px] text-black border-primary hover:bg-primary hover:text-white transition-all duration-500`}
                onClick={() => dispatch(setUpdateModal())}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`${loading ? "animate-pulse" : ""} ${
                  styles.btn_rounded_secondary
                }`}
                disabled={loading}
              >
                {loading ? "Updating" : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductModal;
