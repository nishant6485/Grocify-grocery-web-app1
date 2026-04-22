import React from "react";
import Grocery from "../../assets/images/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="inline-block bg-orange-100 text-orange-500 rounded-full px-4 py-1.5 text-sm sm:text-base md:text-lg font-medium">
              export best quality...
            </span>

            <h1 className="font-bold text-zinc-800 mt-4 md:mt-5 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              tasty organic{" "}
              <span className="text-orange-500">fruits</span> &amp;{" "}
              <span className="text-orange-500">veggies</span>
              <br className="hidden sm:block" /> in your city
            </h1>

            <p className="text-zinc-600 mt-4 md:mt-6 mb-6 md:mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>

            <Button content="Shop Now" />
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={Grocery}
              alt="Fresh grocery"
              className="w-full h-auto object-contain max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
