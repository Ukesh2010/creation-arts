import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { useCartActions, useCartState } from "../../contexts/CartContext";
import { captureOrder, createPayPalTransaction } from "../../api";
import Image from "next/image";
import { PRODUCT_IMAGE_FILLER } from "../../utils/consts";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import { PulseLoader } from "react-spinners";
import { useToasts } from "react-toast-notifications";

const paypal_load = (onLoad = () => {}) => {
  const aScript = document.createElement("script");
  aScript.type = "text/javascript";
  aScript.src =
    "https://www.paypal.com/sdk/js?client-id=Ac1N1G72VYm_9nP3q3KFWX_RCfpUZkwLbRcUI8_NrerFWVSBDvDRXGYKoSNYLdKiYC_C7_gOT6R2Yy-Q&currency=USD";

  document.head.appendChild(aScript);
  aScript.onload = onLoad;
};

const Checkout = () => {
  const cart = useCartState();
  const { clearCart } = useCartActions();
  const { authenticated } = useAuth();
  const router = useRouter();
  const { addToast } = useToasts();

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    paypal_load(() => {
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
    });
  }, []);

  if (!authenticated) {
    return (
      <Fragment>
        <Head>
          <title>Checkout</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <section className="container">
          <div className="app-page-container">
            <div className="info-container">
              <div className="login-required" />
              <h3 className="text-center">Please login to continue.</h3>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <h4 className="mb-2">Checkout</h4>
          <div className="cart-item-container checkout-page">
            <div className="cart-item-header">
              <div className="product-name">Product</div>
              <div className="product-price">Product Price</div>
              <div className="product-qty">Quantity</div>
              <div className="total-amount">Total Amount</div>
            </div>
            {cart.items.map(
              ({ name, price, quantity, total_amount, images }, index) => (
                <div className="cart-item" key={index}>
                  <div className="product-image">
                    <Image
                      src={images?.[0]?.url || PRODUCT_IMAGE_FILLER}
                      alt={name}
                      layout="fill"
                    />
                  </div>
                  <div className="product-name">
                    <span>{name}</span>
                  </div>
                  <div className="product-price">${price}</div>
                  <div className="product-qty">{quantity}</div>
                  <div className="total-amount">${total_amount}</div>
                </div>
              )
            )}
          </div>

          <div className="checkout-container paypal-container">
            <button
              className="btn primary-outline-btn checkout-btn"
              onClick={() => router.push("/cart")}
            >
              <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
              Back to Cart
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <button
                  className="btn accent-btn"
                  onClick={() => {
                    setIsSubmitting(true);
                    captureOrder()({
                      paypal_order_id: null,
                      order: cart,
                    })
                      .then(() => {
                        addToast("Order checkout successfully.", {
                          appearance: "success",
                        });
                        clearCart();
                        router.push("/products");
                      })
                      .catch((err) => {
                        addToast(err?.message || "Error while checking out.", {
                          appearance: "error",
                        });
                      })
                      .finally(() => {
                        setIsSubmitting(false);
                      });
                  }}
                  disabled={isSubmitting}
                >
                  Pay on delivery{" "}
                  <PulseLoader loading={isSubmitting} size={4} />
                </button>
              </div>
              <div style={{ marginLeft: "16px" }}>
                <div id="paypal-button-container" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Checkout;
