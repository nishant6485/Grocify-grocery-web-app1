import React from "react";
import Button from "../Button/Button";
import Freshfruits from "../../assets/images/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 md:bg-right md:bg-contain md:bg-no-repeat"
      style={{ backgroundImage: `url(${Freshfruits})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-orange-500 font-extrabold leading-none md:-rotate-90 md:origin-center md:shrink-0">
            20%
          </span>

          <div className="max-w-2xl">
            <h3 className="font-bold text-zinc-800 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              first order discount
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-zinc-600 mt-4 mb-6 md:mt-6 md:mb-8">
              Enjoy an exclusive first order discount on our grocery website!
              Shop fresh essentials and save big on your first purchase. Fast
              delivery and quality guaranteed.
            </p>
            <Button content="Get Discount" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
