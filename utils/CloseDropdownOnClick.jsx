import React, { useEffect, useRef } from "react";

const CloseDropdownOnClick = ({ children, onClose, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default CloseDropdownOnClick;
