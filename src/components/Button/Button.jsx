import React from "react";

const Button = ({ content, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "inline-flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-500 text-white font-medium rounded-lg px-5 py-2.5 text-sm sm:text-base md:px-6 md:py-3 md:text-base lg:text-lg cursor-pointer shadow-sm hover:to-orange-600 hover:shadow-md hover:scale-[1.03] active:scale-95 transition-all duration-300 " +
        className
      }
    >
      {content}
    </button>
  );
};

export default Button;
