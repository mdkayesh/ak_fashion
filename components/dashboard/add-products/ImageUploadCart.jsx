import React, { useEffect, useState } from "react";
import { handleDeleteImage, hanldeUploadImage } from "./formFunctions";
import styles from "@/components/styles";
import { Edit } from "@/utils/icons";
import ImageSizeChecker from "./ImageSizeChecker";
import { v4 as uuid4 } from "uuid";

const ImageUploadCart = ({
  values,
  setValues,
  className,
  imageProperty,
  index,
  errors,
  handleBlur,
  touched,
}) => {
  const [thumbnail_img_url, setThumbnail_img_url] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sizeError, setSizeError] = useState("");

  // get the thumbnail image url

  useEffect(() => {
    if (!thumbnail_img_url) return;

    setSizeError("");

    // if user change the img delete the previous img
    if (imageProperty === "other_images") {
      if (
        values[imageProperty].length &&
        values[imageProperty][index] &&
        !values[imageProperty][index].includes(thumbnail_img_url.name)
      ) {
        const prevImgName = values[imageProperty][index]
          .split("%2F")[1]
          .split("?")[0];

        handleDeleteImage(prevImgName);
      }
    } else if (values[imageProperty]) {
      const prevImgName = values[imageProperty].split("%2F")[1].split("?")[0];
      handleDeleteImage(prevImgName);
    }

    setLoading(true);
    hanldeUploadImage(uuid4() + thumbnail_img_url.name, thumbnail_img_url)
      .then((url) => {
        setValues((prev) => {
          if (imageProperty === "other_images") {
            prev[imageProperty][index] = url;
            return {
              ...prev,
              [imageProperty]: [...prev[imageProperty]],
            };
          } else {
            return { ...prev, [imageProperty]: url };
          }
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    return () => null;
  }, [thumbnail_img_url]);

  // check the sizeerror then delete the image

  useEffect(() => {
    if (sizeError) {
      if (imageProperty === "other_images") {
        const prevImgName = values[imageProperty][index]
          .split("%2F")[1]
          .split("?")[0];

        handleDeleteImage(prevImgName);
      } else if (values[imageProperty]) {
        const prevImgName = values[imageProperty].split("%2F")[1].split("?")[0];
        handleDeleteImage(prevImgName);
      }
    }

    return () => null;
  }, [sizeError]);

  return (
    <div className={className}>
      <div className="img border p-3 rounded-xl relative max-w-xs mx-auto">
        <div className="absolute p-2 bg-white shadow-md rounded-xl top-4 right-4 cursor-pointer text-sm">
          <Edit />
        </div>
        <label
          htmlFor={
            imageProperty === "other_images"
              ? `${imageProperty}${index}`
              : imageProperty
          }
          className="cursor-pointer"
          title={imageProperty}
        >
          <img
            src={
              sizeError
                ? "/assets/preview.jpg"
                : imageProperty !== "other_images"
                ? values[imageProperty] || "/assets/preview.jpg"
                : values[imageProperty][index] || "/assets/preview.jpg"
            }
            width={400}
            height={500}
            alt="preview"
            className="object-cover"
          />
        </label>
        {loading && (
          <div
            className={`${styles.loaderBox} absolute top-0 left-0 w-full h-full`}
          />
        )}
      </div>
      <input
        type="file"
        name={imageProperty}
        id={
          imageProperty === "other_images"
            ? `${imageProperty}${index}`
            : imageProperty
        }
        className="appearance-none hidden"
        // required={imageProperty === "other_images" ? false : true}
        onChange={(e) => setThumbnail_img_url(e.target.files[0])}
        onBlur={handleBlur}
      />
      <ImageSizeChecker
        imageUrl={
          imageProperty !== "other_images"
            ? values[imageProperty]
            : values[imageProperty][index]
        }
        sizeError={sizeError}
        setSizeError={setSizeError}
      />
      {(imageProperty !== "other_images" &&
        errors.thumbnail_img_url &&
        touched.thumbnail_img_url) ||
        (errors.hover_img_url && touched.hover_img_url && (
          <p className={styles.inputErrorText}>
            {errors.hover_img_url || touched.thumbnail_img_url}
          </p>
        ))}
    </div>
  );
};

export default ImageUploadCart;
