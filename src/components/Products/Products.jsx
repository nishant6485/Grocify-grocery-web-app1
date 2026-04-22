import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];

const Products = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <Heading highlight="our" heading="products" />

        {/* tabs */}
        <div className="mt-8 md:mt-10 flex flex-wrap gap-2 sm:gap-3 justify-center">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base md:text-lg font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-sm"
                    : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.slice(0, 8).map((product) => (
            <Cards
              key={product.id}
              image={product.image}
              title={product.name}
              price={product.price}
            />
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <Link
            to="/allproducts"
            className="inline-flex items-center justify-center bg-gradient-to-b from-orange-400 to-orange-500 text-white font-medium rounded-lg px-6 py-3 text-sm md:text-base lg:text-lg hover:to-orange-600 hover:scale-[1.03] transition-all duration-300"
          >
            view all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
