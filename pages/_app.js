import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../themes";
import "./app.scss";
import "./home.component.scss";
import "./products/products.component.scss";

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
