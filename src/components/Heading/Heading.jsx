import React from "react";

const Heading = ({ highlight, heading }) => {
  return (
    <div className="w-fit mx-auto max-w-full text-center sm:text-left">
      <h2 className="text-zinc-800 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="text-orange-500">{highlight} </span>
        {heading}
      </h2>
      <div className="h-1 bg-orange-300 rounded-full mt-2 md:mt-4 w-20 sm:w-28 md:w-32 lg:w-36 ml-auto" />
    </div>
  );
};

export default Heading;
