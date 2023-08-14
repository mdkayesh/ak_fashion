import * as Yup from "yup";

export const addressSchema = Yup.object({
  name: Yup.string()
    .min(3, "must be 3 characters or up")
    .max(20, "must be 20 characters or less")
    .required("required"),
  address: Yup.string().required("required"),
  city: Yup.string().required("please write the name of your city"),
  country: Yup.string().required("please, select your country"),
  phone: Yup.string().required("write your phone number"),
});

export const addProductSchema = Yup.object({
  title: Yup.string()
    .min(5, "must be 5 characters or up")
    .max(60, "must be 60 characters or less")
    .required("please, enter your product title or name"),
  thumbnail_img_url: Yup.string().required("required"),
  hover_img_url: Yup.string().required("required"),
  other_images: Yup.array().notRequired(),
  category: Yup.string().required("Select any category"),
  description: Yup.string().required(
    "write some description about the product"
  ),
  prize: Yup.number("must be in number").required("product prize is required"),
  old_prize: Yup.number("must be in number").notRequired(),
  discount: Yup.number("must be in number")
    .min(0, "min 1 or upper")
    .max(100, "max 100 or lower")
    .notRequired(),
  colors: Yup.array().min(1, "please, select at least one color").required(),
  properties: Yup.array().notRequired(),
  sizes: Yup.array().min(1, "at least one size is required").required(),
  quantity: Yup.number().required("must enter the amount of product"),
  composition: Yup.array().notRequired(),
  display: Yup.array().notRequired(),
  badges: Yup.array().notRequired(),
  tags: Yup.array().min(
    1,
    "must have tags so that user can search your product"
  ),
});
