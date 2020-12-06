import React from "react";
import "./app.scss";
import "./home.component.scss";
import "./products/products.component.scss";
import "./product-details/product-details.component.scss";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
