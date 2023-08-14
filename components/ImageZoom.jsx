import Image from "next/image";
import React, { useState } from "react";

const ImageZoom = ({ url }) => {
  const [mousePosiition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden cursor-zoom-in [&_.zoomImg]:hover:opacity-100 hidden lg:block xl:hidden"
      // onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      // onLoad={calculateZoom}
    >
      <div className="w-full h-full relative z-20 bg-transparent"></div>
      <div className="w-full h-full relative">
        <Image
          className="zoomImg bg-no-repeat absolute top-0 left-0 min-w-[750px] h-[1000px] opacity-0"
          src={url}
          alt="Zoomable Image"
          width={1000}
          height={1000}
          style={{
            left: `-${mousePosiition.x}px`,
            top: `-${mousePosiition.y + 500}px`,
          }}
          // onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default ImageZoom;
