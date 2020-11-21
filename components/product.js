import React from "react";
import Image from 'next/image';

const Product = () => (
  <div className="product-item">
    <div className="product-image">
      <Image
        src="/images/product1.jpg"
        alt="Picture of the author"
        layout="fill"
      />
    </div>
    <div className="product-details">
      <div className="product-name">Item One</div>
      <div className="product-price">$ 15.00</div>
    </div>
  </div>
);

export default Product;
