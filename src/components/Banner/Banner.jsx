import React from "react";

const Banner = ({ title, bgImage }) => {
  return (
    <div
      className="relative mt-16 md:mt-20 h-48 sm:h-64 md:h-80 lg:h-[50vh] w-full bg-center bg-cover flex justify-center items-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <h2 className="relative z-10 text-zinc-800 bg-white rounded-xl font-bold text-center px-4 sm:px-6 py-2 sm:py-3 md:py-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default Banner;
