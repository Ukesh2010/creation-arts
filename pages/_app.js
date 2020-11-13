import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../themes";

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
