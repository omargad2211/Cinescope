import React from "react";

const MainBackground = ({ background, children }) => {
  return (
    <div className="relative pd-14 min-h-screen">
      <img
        src={`${background}`}
        alt=""
        width={1920}
        height={1080}
        className="w-full h-full object-cover fixed"
      />
      <div className="absolute top-0 w-full h-full naVglass"></div>
      {children}
      <div className="fixed w-full h-full  top-0 bg-gradient-to-t from-black to-[#ffffff00] z-3  "></div>
    </div>
  );
};

export default MainBackground;
