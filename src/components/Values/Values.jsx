import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/images/basket-full-vegetables.png";

const values = [
  {
    id: 1,
    title: "trust",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
    side: "left",
  },
  {
    id: 2,
    title: "Always Fresh",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
    side: "left",
  },
  {
    id: 3,
    title: "Food Safety",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    icon: <FaShieldAlt />,
    side: "right",
  },
  {
    id: 4,
    title: "100% Organic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
    side: "right",
  },
];

const ValueCard = ({ item, reverse }) => (
  <div
    className={`flex items-center gap-4 md:gap-6 ${
      reverse ? "md:flex-row-reverse md:text-right" : ""
    }`}
  >
    <span className="shrink-0 flex justify-center items-center rounded-full text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 md:w-14 md:h-14 text-2xl md:text-3xl">
      {item.icon}
    </span>
    <div className="flex-1 min-w-0">
      <h3 className="font-bold text-zinc-800 text-xl sm:text-2xl md:text-3xl">
        {item.title}
      </h3>
      <p className="text-sm md:text-base text-zinc-600 mt-1 md:mt-2">
        {item.description}
      </p>
    </div>
  </div>
);

const Values = () => {
  const left = values.filter((v) => v.side === "left");
  const right = values.filter((v) => v.side === "right");

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <Heading highlight="our" heading="values" />

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 items-center">
          {/* left */}
          <div className="flex flex-col gap-8 md:gap-10 md:order-1">
            {left.map((item) => (
              <ValueCard key={item.id} item={item} reverse />
            ))}
          </div>

          {/* image (hidden on mobile) */}
          <div className="hidden md:flex md:order-2 justify-center">
            <img
              src={Basket}
              alt="basket full of vegetables"
              className="w-full h-auto object-contain max-w-sm lg:max-w-md"
            />
          </div>

          {/* right */}
          <div className="flex flex-col gap-8 md:gap-10 md:order-3">
            {right.map((item) => (
              <ValueCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
