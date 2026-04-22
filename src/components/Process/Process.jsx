import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];

const Process = () => {
  return (
    <section id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="w-fit mx-auto sm:mx-0 sm:mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6">
          {steps.map((item) => (
            <div key={item.id} className="flex flex-col">
              {/* number bubble */}
              <span className="mx-auto flex justify-center items-center rounded-full bg-zinc-800 text-white outline-[3px] outline-offset-4 outline-zinc-800 outline-dotted w-14 h-14 md:w-16 md:h-16 text-5xl md:text-6xl">
                {item.number}
              </span>

              <div className="mt-6 md:mt-8 flex items-center gap-4">
                <span className="shrink-0 flex justify-center items-center rounded-full text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 md:w-14 md:h-14 text-2xl md:text-3xl">
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-zinc-800 font-bold text-lg md:text-xl lg:text-2xl">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-zinc-600 mt-1">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
