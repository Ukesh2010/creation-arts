import React from "react";
import Image from 'next/image';
import IconTrash from './icons/icon-trash';
import CounterInput from './counterInput';

const CartItem = () => (
  <div className="cart-item">
    <div className="product-name">
      <div className="product-image">
        <Image
          src="/images/product1.jpg"
          alt="Picture of the author"
          layout="fill"
        />
      </div>
      <span>Item One</span>
    </div>
    <div className="product-price">$ 15.00</div>
    <div className="product-qtu">
      <CounterInput className={'input-sm'}/>
    </div>
    <div className="remove-option">
      <button className="btn icon-button">
        <IconTrash/>
      </button>
    </div>
  </div>
);

export default CartItem;
