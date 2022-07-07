import React from "react";
import ProductCard from "./ProductCard";
import Photo1 from "../../assets/img/img1.jpeg";
import Photo2 from "../../assets/img/img2.jpeg";
import Photo3 from "../../assets/img/img3.jpeg";
import Photo4 from "../../assets/img/img4.jpeg";


const products = [
  {
    name: "Fertilizer 1",
    price: "Rs 500",
    details: "Details of the product",
    img: Photo1,
  },
  {
    name: "Fertilizer 2",
    price: "Rs 500",
    details: "Details of the product",
    img: Photo2,
  },
  {
    name: "Fertilizer 3",
    price: "Rs 500",
    details: "Details of the product",
    img: Photo3,
  },
  {
    name: "Fertilizer 4",
    price: "Rs 500",
    details: "Details of the product",
    img: Photo4,
  },
];

function FeaturedProducts() {
  return (
    <>
    <div className="mb-5" id="shop">
      <h3 className="productHeading">Featured Products</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {products.map((product,index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
    <hr/>
    </>
  );
}

export default FeaturedProducts;
