import React from "react";

const MainHeader = () => {
  return (
    <>
      <header className="relative pt-32 pb-2 h-full overflow-hidden">
        <div className="lg:mx-28 mx-4 relative z-50 flex justify-center items-center flex-col cover">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/5 xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl text-4xl py-2 font-extrabold transition-all">
            CineScope
          </h1>

          <p className="text-white uppercase lg:text-base text-[14px] font-medium mt-4">
            Dive into the world of cinematic adventures
          </p>

          <button className="mt-6 px-6 py-3 gradient-border text-white uppercase text-sm font-semibold rounded-lg shadow-md">
            Discover Now
          </button>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
