import React from "react";
import img1 from '../../../Images/1.png';
import img2 from '../../../Images/2.png';
import img3 from '../../../Images/3.png';
import img4 from '../../../Images/4.png';
import PopularProduct from "./PopularProduct";
import './PopularProducts.css';

const PopularProducts = () => {
    const popularProducts = [
        {
            id: 1,
            name: "Inventer Power Genarator",
            price: 30,
            img: img1
        },
        {
            id: 2,
            name: "Compound Saw Machine",
            price: 30,
            img: img2
        },
        {
            id: 3,
            name: "Impact Drill Machine New",
            price: 30,
            img: img3
        },
        {
            id: 4,
            name: "Lion Compact Drill H4p6",
            price: 30,
            img: img4
        },

    ]
  return (
    <div className="mb-20">
      <h2 className="lg:text-3xl sm:text-2xl text-center mt-20 text-primary popular-product-heading uppercase font-bold">Popular Products</h2>
      <h1 className="text-center xs:text-xs lg:text-xl uppercase mt-3">We have the best quality Electronics products.</h1>
      <div className="popular-products">
          {
              popularProducts.map(product => <PopularProduct key={product.id} product={product}></PopularProduct>)
          }
      </div>
    </div>
  );
};

export default PopularProducts;
