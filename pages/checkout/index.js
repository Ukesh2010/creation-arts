import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useCartActions, useCartState } from "../../contexts/CartContext";
import { captureOrder, createPayPalTransaction } from "../../api";
import { router } from "next/client";
import Image from "next/image";
import { PRODUCT_IMAGE_FILLER } from "../../utils/consts";

const Checkout = () => {
  const cart = useCartState();
  const { clearCart } = useCartActions();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: function () {
          return createPayPalTransaction()({
            total_amount: cart?.total_amount,
          }).then((data) => {
            return data.result.id;
          });
        },
        onApprove: function (data, actions) {
          return captureOrder()({
            paypal_order_id: data.orderID,
            order: cart,
          }).then((response) => {
            if (response.error === "INSTRUMENT_DECLINED") {
              return actions.restart();
            }

            clearCart();
            router.push("/products");
          });
        },
      })
      .render("#paypal-button-container");
  }, []);

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
            {cart.items.map(
              ({ name, price, quantity, total_amount }, index) => (
                <div className="cart-item" key={index}>
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
                  <div className="product-qty">{quantity}</div>
                  <div className="product-price">${total_amount}</div>
                </div>
              )
            )}
          </div>

          <div className="checkout-container">
            <button
              className="btn primary-outline-btn checkout-btn"
              onClick={() => router.push("/products")}
            >
              <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
              Back to shopping
            </button>
            <div id="paypal-button-container" />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Checkout;
