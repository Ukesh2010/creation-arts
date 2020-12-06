import React, {Fragment} from "react";
import Head from "next/head";
import Image from 'next/image'
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Product from '../../components/product';
import IconSearch from '../../components/icons/icon-search';
import IconChevronDown from '../../components/icons/icon-chevron-down';
import CartItem from '../../components/cartItem';

export default () => {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Nav/>
      <section className="container">
        <div className="app-page-container">
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};
