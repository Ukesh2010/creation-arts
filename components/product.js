import React from "react";
import Image from "next/image";
import { PRODUCT_IMAGE_FILLER } from "../utils/consts";

const Product = ({
  data: {
    name,
    price,
    images: [image],
  },
}) => (
  <div className="product-item">
    <div className="product-image">
      <Image
        src={image ? image.url : PRODUCT_IMAGE_FILLER}
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
