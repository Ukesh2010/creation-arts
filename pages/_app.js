import React from "react";
import "./app.scss";
import "./home.component.scss";
import "./products/products.component.scss";
import "./product-details/product-details.component.scss";

export default ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  );
};
