import React from "react";
import Image from "next/image";
import { PRODUCT_IMAGE_FILLER } from "../utils/consts";
import Link from "next/link";
import { useCartActions, useCartState } from "../contexts/CartContext";

const Product = ({ data }) => {
  const {
    _id,
    name,
    price,
    images: [image],
  } = data;
  const { findItem, addItem } = useCartActions();
  const disableButton = Boolean(findItem(_id));
  const onAddToCart = () => {
    addItem({ ...data, quantity: 1, total_amount: price });
  };
  return (
    <div className="product-item">
      <div className="product-image">
        <Link href={`/product-detail/${_id}`}>
          <Image
            src={image ? image.url : PRODUCT_IMAGE_FILLER}
            alt={name}
            layout="fill"
          />
        </Link>
      </div>
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className="product-price">${price}</div>
        <button
          className="btn primary-outline-btn"
          disabled={disableButton}
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
