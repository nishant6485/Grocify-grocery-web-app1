import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgAll from "../../assets/images/all-banner.jpg";

const AllProducts = () => {
  return (
    <>
      <div>
        <CategoryPage title="all Products" bgImage={BgAll} categories={["All"]} />
      </div>
    </>
  );
};

export default AllProducts;
