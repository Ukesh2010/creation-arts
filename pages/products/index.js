import React from "react";
import Head from "next/head";

export default () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="product-container">
        <div class="sidebar">
          <div class="sidebar-heading">Categories</div>

          <div class="category-list">
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

        <div class="product-list-container">
          <div class="page-heading">Category Name</div>
          <div class="product-block">
            <div class="product-item">
              <div class="prod-image">
                <img
                  src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
                  alt=""
                />
              </div>
              <div class="prod-desc">
                <div class="prod-title">Item One</div>
                <div class="prod-price">$ 15.00</div>
              </div>
            </div>

            <div class="product-item">
              <div class="prod-image">
                <img
                  src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
                  alt=""
                />
              </div>
              <div class="prod-desc">
                <div class="prod-title">Item One</div>
                <div class="prod-price">$ 15.00</div>
              </div>
            </div>

            <div class="product-item">
              <div class="prod-image">
                <img
                  src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
                  alt=""
                />
              </div>
              <div class="prod-desc">
                <div class="prod-title">Item One</div>
                <div class="prod-price">$ 15.00</div>
              </div>
            </div>

            <div class="product-item">
              <div class="prod-image">
                <img
                  src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
                  alt=""
                />
              </div>
              <div class="prod-desc">
                <div class="prod-title">Item One</div>
                <div class="prod-price">$ 15.00</div>
              </div>
            </div>

            <div class="product-item">
              <div class="prod-image">
                <img
                  src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
                  alt=""
                />
              </div>
              <div class="prod-desc">
                <div class="prod-title">Item One</div>
                <div class="prod-price">$ 15.00</div>
              </div>
            </div>

            <div class="product-item">
              <div class="prod-image">
                <img
                  src="./../../../assets/img/pexels-karolina-grabowska-4219654.jpg"
                  alt=""
                />
              </div>
              <div class="prod-desc">
                <div class="prod-title">Item One</div>
                <div class="prod-price">$ 15.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
