import React from "react";
import Image from "next/image";
import CounterInput from "./counterInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { useCartActions } from "../contexts/CartContext";
import { PRODUCT_IMAGE_FILLER } from "../utils/consts";


const CartItem = ({ data }) => {
  const {
    _id,
    name,
    price,
    images: [image],
    quantity,
  } = data;

  const { updateItem, removeItem } = useCartActions();
  const onChange = (value) => {
    updateItem(_id, { ...data, quantity: value, total_amount: value * price });
  };

  const onRemove = () => {
    removeItem(_id);
  };

  return (
    <div className="cart-item">
      <div className="product-image">
        <Image
          src={PRODUCT_IMAGE_FILLER}
          // src={image ? image.url : PRODUCT_IMAGE_FILLER}
          alt={name}
          layout="fill"
        />
      </div>
      <div className="product-name">
        <span>{name}</span>
      </div>
      <div className="product-price">${price}</div>
      <div className="product-qty">
        <CounterInput
          className={"input-sm"}
          value={quantity}
          onChange={onChange}
        />
      </div>
      <div className="remove-option">
        <button className="btn icon-button">
          <FontAwesomeIcon icon={faTrashAlt} size={"2x"} onClick={onRemove} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
