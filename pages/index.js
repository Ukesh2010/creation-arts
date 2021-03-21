import React from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getServerSideCookie } from "../utils/serverSideStorage";
import { getProducts } from "../api";
import { PRODUCT_IMAGE_FILLER } from "../utils/consts";

const Home = (props) => {
  const { featuredProducts, newProducts } = props;

  console.log("props", props);
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="home-container">
        <div className="banner">
          <div className="banner-image">
            <Image
              src={"/images/bg.jpeg"}
              alt={"banner image"}
              layout={"fill"}
            />
          </div>

          <div className="social-icons">
            <div className="icon-button">
              <FontAwesomeIcon icon={faFacebookF} size={"2x"} />
            </div>
            <div className="icon-button">
              <FontAwesomeIcon icon={faInstagram} size={"2x"} />
            </div>
            <div className="icon-button">
              <FontAwesomeIcon icon={faTwitter} size={"2x"} />
            </div>
          </div>
          <div className="control-icons">
            <div className="icon-button arrow-up">
              <FontAwesomeIcon icon={faArrowUp} size={"2x"} />
            </div>
            <div className="icon-button arrow-down">
              <FontAwesomeIcon icon={faArrowDown} size={"2x"} />
            </div>
          </div>

          <div className="banner-details">
            <h3 className="title">Hand Crafted Products</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              atque consequatur cumque doloribus ducimus fugiat inventore,
              molestias neque nihil perspiciatis, praesentium quae, quibusdam
              repellat ut vel? Accusantium fuga in ipsum?
            </p>
            <Link href={`/products`}>
              <button className="btn accent-btn">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="featured-container">
            <div className="heading">Featured products</div>
            <div className="product-container">
              {featuredProducts.map((item, index) => {
                const [image] = item?.images || [];
                return (
                  <Link href={`/product-detail/${item?._id}`} key={index}>
                    <div className="product-item">
                      <div className="product-image">
                        <Image
                          src={image?.url || PRODUCT_IMAGE_FILLER}
                          alt={image?.originalFileName || "Product image"}
                          layout="fill"
                        />
                      </div>
                      <div className="item-detail">
                        <div className="name">{item.name}</div>
                        <div className="price">${item.price}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="new-arrivals-container">
            <div className="heading">New Arrivals</div>
            <div className="product-container">
              {newProducts.map((item, index) => {
                const [image] = item?.images || [];
                return (
                  <Link href={`/product-detail/${item?._id}`} key={index}>
                    <div className="product-item">
                      <div className="product-image">
                        <Image
                          src={image?.url || PRODUCT_IMAGE_FILLER}
                          alt={image?.originalFileName || "Product image"}
                          layout="fill"
                        />
                      </div>
                      <div className="item-detail">
                        <div className="name">{item.name}</div>
                        <div className="price">${item.price}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  const token = getServerSideCookie(context)("token");

  try {
    const featuredProducts = await getProducts(token)({
      isFeatured: true,
      limit: 8,
    });
    const newProducts = await getProducts(token)({
      limit: 8,
    });
    return { props: { featuredProducts, newProducts } };
  } catch (e) {
    console.log("error", e.message);
  }
  return { props: { featuredProducts: [], newProducts: [] } };
};
