import React, {Fragment} from "react";
import Head from "next/head";
import Image from 'next/image'
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Product from '../../components/product';

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
          <div className="page-heading title">
            <div className="title">Category Name</div>
            <div className="action-container">
              <select className="form-control">
                <option >Sort By</option>
                <option value={'top'}>Top Rated</option>
                <option value={'priceHL'}>Price: High to Low</option>
                <option value={'priceLH'}>Price: Low to High</option>
              </select>
            </div>
          </div>

          <div className="product-grid-container">
            <div className="product-filter-container">
              <div className="filter-heading">Categories</div>
              <div className="category-list">
                <ul>
                  <li>Category One</li>
                  <li>Category Two</li>
                  <li>Category Three</li>
                  <li>Category Four</li>
                  <li>Category Five</li>
                  <li>Category Six</li>
                </ul>
              </div>
            </div>
            <div className="product-list-container">
              <div className="product-block">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};
