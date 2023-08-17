import Logo from "@/public/assets/Logo";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white">
      <Logo />
    </div>
  );
};

export default Loading;
