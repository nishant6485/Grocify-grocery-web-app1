import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgDairy from "../../assets/images/dairy-banner.jpg";

const Dairy = () => {
  return (
    <>
      <div>
        <CategoryPage title="dairy & eggs" bgImage={BgDairy} categories={["Dairy"]}/>
      </div>
    </>
  );
};

export default Dairy;
