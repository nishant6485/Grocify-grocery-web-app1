import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  const filteredItems = categories.includes("All")
    ? ProductList
    : ProductList.filter((item) => categories.includes(item.category));

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredItems.map((product) => (
            <Cards
              key={product.id}
              image={product.image}
              title={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
