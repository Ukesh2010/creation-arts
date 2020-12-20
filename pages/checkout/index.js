import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import CartItem from "../../components/cartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {useCartActions, useCartState} from '../../contexts/CartContext';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons/faShoppingBag';

const Checkout = () => {
  const cart = useCartState();
  const { countItem } = useCartActions();

  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <h4 className="mb-2">Checkout</h4>
          <div className="cart-item-container">
            {cart.items.map((item) => (
              <CartItem data={item} />
            ))}
          </div>

          <div className="checkout-container">
            <button className="btn primary-outline-btn checkout-btn">
              <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
              Back to shopping
            </button>
            <button className="btn accent-btn checkout-btn">
              <FontAwesomeIcon icon={faShoppingBag} size={"2x"} />
              Checkout
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Checkout;
