import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="contactus" className="bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl md:text-3xl font-semibold">
              Gr<span className="uppercase text-orange-500">o</span>cify
            </a>
            <p className="text-sm md:text-base text-zinc-600 mt-4 md:mt-6 max-w-sm">
              Bred for a high content of beneficial substances. Our products are
              all fresh and healthy.
            </p>
            <p className="text-sm md:text-base text-zinc-800 mt-4 md:mt-6">
              2026 &copy; all rights reserved
            </p>
          </div>

          {/* company */}
          <div>
            <h5 className="text-zinc-800 font-bold text-lg md:text-xl lg:text-2xl">
              company
            </h5>
            <ul className="mt-4 md:mt-6 flex flex-col gap-3 md:gap-4">
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-zinc-800 hover:text-orange-500 transition-colors"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-zinc-800 hover:text-orange-500 transition-colors"
                >
                  FAQ&apos;S
                </a>
              </li>
            </ul>
          </div>

          {/* support */}
          <div>
            <h5 className="text-zinc-800 font-bold text-lg md:text-xl lg:text-2xl">
              support
            </h5>
            <ul className="mt-4 md:mt-6 flex flex-col gap-3 md:gap-4">
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-zinc-800 hover:text-orange-500 transition-colors"
                >
                  support center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-zinc-800 hover:text-orange-500 transition-colors"
                >
                  feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-zinc-800 hover:text-orange-500 transition-colors"
                >
                  contact us
                </a>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h5 className="text-zinc-800 font-bold text-lg md:text-xl lg:text-2xl">
              stay connected
            </h5>
            <p className="mt-4 md:mt-6 text-sm md:text-base text-zinc-600">
              questions or feedback? <br />
              we&apos;d love hear from you.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 md:mt-6 flex items-center bg-white p-1 rounded-lg max-w-md"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="flex-1 min-w-0 bg-transparent h-10 px-3 text-sm md:text-base focus:outline-none"
              />
              <button
                type="submit"
                aria-label="subscribe"
                className="shrink-0 bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-lg p-2 text-xl md:text-2xl hover:to-orange-600 transition-colors"
              >
                <IoIosArrowForward />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
