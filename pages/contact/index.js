import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";

const PageNotFound = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div className="info-container">
            <div className="contact-image"></div>
            <h3 className="mb-2 text-center">Contact Us</h3>
            <a className="contact-details" href="mailto:admin@mail.com">
              admin@mail.com
            </a>
            <a className="contact-details" href="tel:977">
              00987612345
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PageNotFound;
