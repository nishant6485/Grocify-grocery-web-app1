import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({ image, title, price }) => {
  return (
    <article className="bg-zinc-100 p-3 sm:p-4 md:p-5 rounded-xl flex flex-col h-full">
      {/* top icons */}
      <div className="flex justify-between items-start">
        <button
          aria-label="favorite"
          className="text-xl sm:text-2xl md:text-3xl text-zinc-300 hover:text-orange-400 transition-colors"
        >
          <FaHeart />
        </button>
        <button
          aria-label="add"
          className="bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-lg p-2 sm:p-2.5 md:p-3 text-sm md:text-base hover:to-orange-600 transition-colors"
        >
          <FaPlus />
        </button>
      </div>

      {/* image */}
      <div className="w-full aspect-square mt-2 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* content */}
      <div className="text-center mt-3 flex flex-col">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-zinc-800 truncate">
          {title}
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-800 mt-1 md:mt-2 mb-3">
          ${price.toFixed(2)}
        </p>
        <div className="flex justify-center">
          <Button content="Shop Now" />
        </div>
      </div>
    </article>
  );
};

export default Cards;
