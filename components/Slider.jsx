import React, { useRef, useState } from "react";
// import "./Slider.css"; // Create a CSS file for styling

const Slider = ({ images }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const slideWidth = 100 / images.length; // Calculate slide width as a percentage

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const deltaX = currentX - startX;
    const sliderWidth = sliderRef.current.offsetWidth;
    const maxDeltaX = (images.length - 1) * (sliderWidth / images.length);

    if (deltaX < 0 && Math.abs(deltaX) > maxDeltaX) {
      setStartX(currentX + maxDeltaX);
    } else if (deltaX > 0 && Math.abs(deltaX) > maxDeltaX) {
      setStartX(currentX - maxDeltaX);
    }

    const slideWidth = sliderWidth / images.length;
    const slideChange = Math.round(deltaX / slideWidth);

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - slideChange;

      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= images.length) {
        newIndex = images.length - 1;
      }

      return newIndex;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const sliderWidth = sliderRef.current.offsetWidth;
    const maxDeltaX = (images.length - 1) * (sliderWidth / images.length);

    if (deltaX < 0 && Math.abs(deltaX) > maxDeltaX) {
      setStartX(currentX + maxDeltaX);
    } else if (deltaX > 0 && Math.abs(deltaX) > maxDeltaX) {
      setStartX(currentX - maxDeltaX);
    }

    const slideWidth = sliderWidth / images.length;
    const slideChange = Math.round(deltaX / slideWidth);

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - slideChange;

      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= images.length) {
        newIndex = images.length - 1;
      }

      return newIndex;
    });
  };

  return (
    <div
      className="slider-container overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(0)}
    >
      <div
        className="slider flex gap-5 transition-all duration-500"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
        }}
        ref={sliderRef}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="slide min-w-[25%]"
            // style={{ width: `${slideWidth}%` }}
          >
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>
        Prev
      </button>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
