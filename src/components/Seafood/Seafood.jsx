import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from "../../assets/images/seafood-banner.jpg"

const Seafood = () => {
  return (
    <>
        <div>
            <CategoryPage title="meat & seaFood" bgImage={BgSeaFood} categories={["Meat","SeaFood"]} />
        </div>
    </>
  )
}

export default Seafood