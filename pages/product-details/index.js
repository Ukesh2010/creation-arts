import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Image from "next/image";
import CounterInput from "../../components/counterInput";

const ProductDetail = () => {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div className="bread-crumb-container">
            <a className="bread-crumb-item">
              <span className="bread-crumb-link">Category</span>
              <span className="bread-crumb-separator">/</span>
            </a>
            <a className="bread-crumb-item">
              <span className="bread-crumb-link">Product</span>
              <span className="bread-crumb-separator">/</span>
            </a>
            <a className="bread-crumb-item active">
              <span className="bread-crumb-link">Test Product</span>
              <span className="bread-crumb-separator">/</span>
            </a>
          </div>

          <div className="product-container">
            <div className="product-images-container">
              <div className="main-image">
                <Image
                  src="/images/product2.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              {/*<div className="image-slider">*/}
              {/*  <div className="product-image">*/}
              {/*    <Image*/}
              {/*      src="/images/product2.jpg"*/}
              {/*      alt="Picture of the author"*/}
              {/*      layout="fill"*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*  <div className="product-image">*/}
              {/*    <Image*/}
              {/*      src="/images/product2.jpg"*/}
              {/*      alt="Picture of the author"*/}
              {/*      layout="fill"*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*  <div className="product-image">*/}
              {/*    <Image*/}
              {/*      src="/images/product2.jpg"*/}
              {/*      alt="Picture of the author"*/}
              {/*      layout="fill"*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
            <div className="product-details">
              <h4 className="product-title">
                Sterling Silver Adjustable Tree of Life White Lab Opal & Clear
                CZ Box Chain Bracelet
              </h4>
              <div className="product-price">
                <span className="label">Price</span>
                <h3>$99.99</h3>
              </div>
              <div className="action-container">
                <CounterInput />
                <button className="btn primary-btn">Add to Cart</button>
              </div>
              <div className="product-description">
                <span className="label">Description</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  eligendi ipsa iusto. Aspernatur optio, velit? Amet dolorem
                  eius eligendi facere nam officia perspiciatis provident,
                  quaerat recusandae! Aliquam eos hic maxime.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  eligendi ipsa iusto. Aspernatur optio, velit? Amet dolorem
                  eius eligendi facere nam officia perspiciatis provident,
                  quaerat recusandae! Aliquam eos hic maxime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default ProductDetail;
