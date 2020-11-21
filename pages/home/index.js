import React from "react";
import Head from "next/head";
import Image from "next/image";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="home-container">
      <div className="banner">
        <div className="social-icons">
          <div className="icon-box"></div>
          <div className="icon-box"></div>
          <div className="icon-box"></div>
        </div>

        <div className="right-icons">
          <div className="icon-box"></div>
          <div className="icon-box"></div>
        </div>
      </div>

      <div className="featured">
        <div className="heading">Featured Shop</div>
        <div className="image-container">
          <div className="product-item">
            <Image
              src="/images/pexels-karolina-grabowska-4219654.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div className="item-detail">
              <div>Title</div>
              <div>$50</div>
            </div>
          </div>

          <div className="product-item">
            <img src="./../../../assets/img/pgrabowska.jpg" alt="" />
            <div className="item-detail">
              <div>Title</div>
              <div>$50</div>
            </div>
          </div>

          <div className="product-item">
            <img
              src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
              alt=""
            />
            <div className="item-detail">
              <div>Title</div>
              <div>$50</div>
            </div>
          </div>

          <div className="product-item">
            <img src="./../../../assets/img/pgrabowska.jpg" alt="" />
            <div className="item-detail">
              <div>Title</div>
              <div>$50</div>
            </div>
          </div>

          {/* <button className="btn primary-btn" routerLink="/product-detail">
            Product details
          </button> */}
        </div>
      </div>

      <div className="new-arrivals">
        <div className="heading">New Arrivals</div>

        <div className="image-container">
          <div className="product-item">
            <img src="./../../../assets/img/pgrabowska.jpg" alt="" />
            <div className="item-detail">
              <div>Title</div>
              <div>$50</div>
            </div>
          </div>

          <div className="product-item">
            <img
              src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
              alt=""
            />
            <div className="item-detail">
              <div>Title</div>
              <div>$50</div>
            </div>
          </div>

          <div className="product-item">
            <img src="./../../../assets/img/pgrabowska.jpg" alt="" />
            <div className="item-detail">
              <div>Title</div>
              <div>$50</div>
            </div>
          </div>

          <div className="product-item">
            <img
              src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
              alt=""
            />
            <div className="item-detail">
              <div>Title</div>
              <div>$50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
