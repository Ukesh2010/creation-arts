import React from "react";
import "./app.scss";
import "./home.component.scss";
import "./products/products.component.scss";
import "./product-detail/product-details.component.scss";
import "./cart/cart.component.scss";
import CartProvider from "../contexts/CartContext";
import App from "next/app";
import { getServerSideCookie } from "../utils/serverSideStorage";
import AuthProvider from "../contexts/AuthContext";
import JWTValidator from "../utils/JWTValidator";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );
};

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  const { ctx } = appContext;
  const token = getServerSideCookie(ctx)("token");
  const authenticated = token && JWTValidator(token);
  const NoAuthPages = ["/login"];
  const AuthPages = ["/checkout", "/change-password"];

  if (NoAuthPages.includes(ctx.pathname)) {
    if (authenticated) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
      return {};
    }
  }

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
