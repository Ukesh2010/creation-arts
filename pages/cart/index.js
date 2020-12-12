import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import CartItem from "../../components/cartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { useCartActions, useCartState } from "../../contexts/CartContext";

const Cart = () => {
  const cart = useCartState();
  const { countItem } = useCartActions();

  if (countItem() === 0) {
    return (
      <Fragment>
        <Head>
          <title>Products</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <section className="container">
          <div className="app-page-container">
            <h4 className="mb-2">Shopping Cart</h4>
            <div className="cart-item-container">
              No items added to the cart.
            </div>
          </div>
        </section>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <h4 className="mb-2">Shopping Cart</h4>
          <div className="cart-item-container">
            {cart.items.map((item) => (
              <CartItem data={item} />
            ))}
          </div>

          <div className="checkout-container">
            <button className="btn accent-btn checkout-btn">
              <FontAwesomeIcon icon={faShoppingCart} size={"2x"} />
              Checkout
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Cart;
