import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/nav";

const Products = () => {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="product-container container">
        <div className="sidebar">
          <div className="sidebar-heading">Categories</div>

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
          <div className="page-heading">Category Name</div>
          <div className="product-block">
            <div className="product-item">
              <div className="prod-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="prod-desc">
                <div className="prod-title">Item One</div>
                <div className="prod-price">$ 15.00</div>
              </div>
            </div>

            <div className="product-item">
              <div className="prod-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="prod-desc">
                <div className="prod-title">Item One</div>
                <div className="prod-price">$ 15.00</div>
              </div>
            </div>

            <div className="product-item">
              <div className="prod-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="prod-desc">
                <div className="prod-title">Item One</div>
                <div className="prod-price">$ 15.00</div>
              </div>
            </div>

            <div className="product-item">
              <div className="prod-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="prod-desc">
                <div className="prod-title">Item One</div>
                <div className="prod-price">$ 15.00</div>
              </div>
            </div>

            <div className="product-item">
              <div className="prod-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="prod-desc">
                <div className="prod-title">Item One</div>
                <div className="prod-price">$ 15.00</div>
              </div>
            </div>

            <div className="product-item">
              <div className="prod-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="prod-desc">
                <div className="prod-title">Item One</div>
                <div className="prod-price">$ 15.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
