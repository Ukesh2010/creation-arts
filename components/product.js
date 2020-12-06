import React from "react";
import Image from "next/image";

const Product = ({ data: { name, price, category } }) => (
  <div className="product-item">
    <div className="product-image">
      <Image
        src="/images/product1.jpg"
        alt="Picture of the author"
        layout="fill"
      />
    </div>
    <div className="product-details">
      <div className="product-name">{name}</div>
      <div className="product-price">${price}</div>
      <button className="btn primary-outline-btn">Add to Cart</button>
    </div>
  </div>
);

export default Product;
