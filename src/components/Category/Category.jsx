import React from "react";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import FruitsCat from "../../assets/images/fruits-and-veggies.png";
import SeeFoodCat from "../../assets/images/meat-and-seafood.png";
import DairyCat from "../../assets/images/dairy-and-eggs.png";

const category = [
  {
    id: 1,
    title: "fruits & veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path: "/dairy",
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeeFoodCat,
    path: "/seafood",
  },
];

const Category = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <Heading highlight="shop" heading="by category" />

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {category.map((card) => (
            <article key={card.id} className="flex flex-col">
              {/* image */}
              <div className="relative h-40 sm:h-48 -mb-8 flex items-end justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-auto h-full object-contain max-w-full"
                />
              </div>

              {/* content */}
              <div className="bg-zinc-100 pt-12 p-6 md:p-8 rounded-xl flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-600 mt-3 mb-6 md:mb-8 flex-1">
                  {card.description}
                </p>
                <Link
                  to={card.path}
                  className="self-start inline-flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-500 text-white font-medium rounded-lg px-5 py-2.5 text-sm md:text-base hover:to-orange-600 hover:scale-[1.03] transition-all duration-300"
                >
                  see all
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
