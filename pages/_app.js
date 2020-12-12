import React from "react";
import "./app.scss";
import "./home.component.scss";
import "./products/products.component.scss";
import "./product-detail/product-details.component.scss";
import "./cart/cart.component.scss";
import CartProvider from "../contexts/CartContext";

const App = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default App;
