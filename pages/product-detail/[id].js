import React, { Fragment, useState } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Image from "next/image";
import CounterInput from "../../components/counterInput";
import cookies from "next-cookies";
import { getProductDetail, getProducts } from "../../api";
import { PRODUCT_IMAGE_FILLER } from "../../utils/consts";
import { useCartActions } from "../../contexts/CartContext";

const ProductDetail = ({ product }) => {
  // const router = useRouter();
  // const { id } = router.query;
  const { _id, name, price, category, images: [image] = [] } = product;

  const { findItem, addItem } = useCartActions();
  const disableButton = Boolean(findItem(_id));

  const [quantity, setQuantity] = useState(1);

  const onAddToCart = () => {
    addItem({ ...product, quantity, total_amount: price * quantity });
  };

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
                  src={image ? image.url : PRODUCT_IMAGE_FILLER}
                  alt={name}
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
              <h4 className="product-title">{name}</h4>
              <div className="product-price">
                <span className="label">Price</span>
                <h3>${price}</h3>
              </div>
              <div className="action-container">
                <CounterInput
                  value={quantity}
                  onChange={(value) => setQuantity(value)}
                />
                <button
                  className="btn primary-btn"
                  disabled={disableButton}
                  onClick={onAddToCart}
                >
                  Add to Cart
                </button>
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

export const getStaticPaths = async (context) => {
  const token = cookies(context).token;
  const products = await getProducts(token)();

  const paths = products.map((item) => ({
    params: { id: item._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const token = cookies(context).token;

  const product = await getProductDetail(token)(context.params.id);
  return { props: { product } };
};
