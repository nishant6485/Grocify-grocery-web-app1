import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from "../../assets/images/fruits-banner.jpg"

const Fruits = () => {
  return (
    <>
        <div>
            <CategoryPage title="fruits & veggies" bgImage={BgFruits} categories={["Fruits","Vegetables"]}/>
        </div>
    </>
  )
}

export default Fruits