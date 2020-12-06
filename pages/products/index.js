import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Product from "../../components/product";
import IconSearch from "../../components/icons/icon-search";
import IconChevronDown from "../../components/icons/icon-chevron-down";
import { getCategories, getProducts } from "../../api";
import cookies from "next-cookies";

const Products = ({ categories, products }) => {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div className="product-grid-container">
            <div className="product-filter-container">
              <div className="accordion-block">
                <div className="accordion-heading">
                  <span>Type</span>
                  <IconChevronDown />
                </div>
                <div className="accordion-content">
                  {categories.map((item) => (
                    <div className="list-item">
                      <label className="checkbox-wrapper">
                        <input type="checkbox" className="form-control" />
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="accordion-block">
                <div className="accordion-heading">
                  <span>Price Range</span>
                  <IconChevronDown />
                </div>
                <div className="accordion-content">
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> $30 and
                      Under
                    </label>
                  </div>
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> $31 to
                      $50
                    </label>
                  </div>
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> $51 to
                      $75
                    </label>
                  </div>
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> $76 to
                      $100
                    </label>
                  </div>
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> Above
                      $100
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-container">
              <div className="product-list-heading">
                <div className="search-container">
                  <IconSearch />
                  <input
                    type="search"
                    className={"form-control"}
                    placeholder={"Search"}
                  />
                </div>
                <div className="select-container">
                  <select className="form-control">
                    <option>Sort By</option>
                    <option value={"top"}>Top Rated</option>
                    <option value={"priceHL"}>Price: High to Low</option>
                    <option value={"priceLH"}>Price: Low to High</option>
                  </select>
                </div>
              </div>
              <div className="product-block">
                {products.map((item, index) => (
                  <Product key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Products;

export const getStaticProps = async (context) => {
  const token = cookies(context).token;

  try {
    const products = await getProducts(token)();
    const categories = await getCategories(token)();
    return { props: { categories, products } };
  } catch (e) {
    console.log("error", e.message);
  }
  return { props: { categories: [], products: [] } };
};
