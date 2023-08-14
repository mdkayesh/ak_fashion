"use client";

import React, { useEffect } from "react";

const ImageSizeChecker = ({ imageUrl, sizeError, setSizeError }) => {
  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();

    img.onload = function () {
      const width = this.width;
      const height = this.height;
      // const aspectRatio = width / height;

      if (width > 765 || height > 884) {
        setSizeError("Image should be equal or lower than 765 * 884");
      }
    };

    img.onerror = function () {
      console.error("Error loading image.");
    };

    img.src = imageUrl;

    return () => null;
  }, [imageUrl]);

  return <div className="mt-3 text-red-600 text-sm">{sizeError}</div>;
};

export default ImageSizeChecker;
