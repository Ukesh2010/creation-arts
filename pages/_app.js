import React from "react";
import "./app.scss";
import "./home.component.scss";
import "./products/products.component.scss";
import "./product-detail/product-details.component.scss";
import "./profile/profile.component.scss";
import "./cart/cart.component.scss";
import "./my-orders/my-orders.component.scss";
import CartProvider from "../contexts/CartContext";
import App from "next/app";
import { getServerSideCookie } from "../utils/serverSideStorage";
import AuthProvider from "../contexts/AuthContext";
import JWTValidator from "../utils/JWTValidator";
import { ToastProvider } from "react-toast-notifications";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ToastProvider placement={"bottom-center"} autoDismiss>
      <AuthProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
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
