import React from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from '../../components/nav';
import IconArrowLeft from '../../components/icons/icon-arrow-left';
import IconFacebook from '../../components/icons/icon-facebook';
import IconInstagram from '../../components/icons/icon-instagram';
import IconTwitter from '../../components/icons/icon-twitter';
import Footer from '../../components/footer';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Nav/>
    <section className="home-container">
      <div className="banner">
        <div className="banner-image">
          <Image src={"/images/bg.jpeg"} alt={"banner image"} layout={"fill"}/>
        </div>

        <div className="social-icons">
          <div className="icon-button"><IconFacebook/></div>
          <div className="icon-button"><IconInstagram/></div>
          <div className="icon-button"><IconTwitter/></div>
        </div>
        <div className="control-icons">
          <div className="icon-button arrow-up"><IconArrowLeft/></div>
          <div className="icon-button arrow-down"><IconArrowLeft/></div>
        </div>

        <div className="banner-details">
          <h3 className="title">Hand Crafted Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequatur cumque doloribus ducimus
            fugiat inventore, molestias neque nihil perspiciatis, praesentium quae, quibusdam repellat ut vel?
            Accusantium fuga in ipsum?</p>
          <button className="btn accent-btn">Shop Now</button>
        </div>
      </div>
      <div className="container">
        <div className="featured-container">
          <div className="heading">Featured Shop</div>
          <div className="product-container">
            <div className="product-item">
              <div className="product-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="item-detail">
                <div className="name">Title</div>
                <div className="price">$50</div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="item-detail">
                <div className="name">Title</div>
                <div className="price">$50</div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image">
                <Image
                  src="/images/product2.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="item-detail">
                <div className="name">Title</div>
                <div className="price">$50</div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image">
                <Image
                  src="/images/product2.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="item-detail">
                <div className="name">Title</div>
                <div className="price">$50</div>
              </div>
            </div>
          </div>
        </div>
        <div className="new-arrivals-container">
          <div className="heading">New Arrivals</div>
          <div className="product-container">
            <div className="product-item">
              <div className="product-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="item-detail">
                <div className="name">Title</div>
                <div className="price">$50</div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="item-detail">
                <div className="name">Title</div>
                <div className="price">$50</div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="item-detail">
                <div className="name">Title</div>
                <div className="price">$50</div>
              </div>
            </div>
            <div className="product-item">
              <div className="product-image">
                <Image
                  src="/images/product1.jpg"
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="item-detail">
                <div className="name">Title</div>
                <div className="price">$50</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>
);

export default Home;
