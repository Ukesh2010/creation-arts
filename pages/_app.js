import React from "react";
import "./app.scss";
import "./home.component.scss";
import "./products/products.component.scss";
import "./product-detail/product-details.component.scss";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
