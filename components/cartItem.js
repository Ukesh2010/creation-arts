import React from "react";
import Image from 'next/image';
import CounterInput from './counterInput';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons/faTrashAlt';

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
        <FontAwesomeIcon icon={faTrashAlt} size={"2x"} />
      </button>
    </div>
  </div>
);

export default CartItem;
