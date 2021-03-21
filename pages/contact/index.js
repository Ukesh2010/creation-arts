import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";

const Contact = () => {
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
            <div className="contact-image" />
            <h3 className="mb-2 text-center">Contact Us</h3>
            <a className="contact-details" href="mailto:admin@yalatreasure.com">
              admin@yalatreasure.com
            </a>
            <a className="contact-details" href="tel:+977-9860777330">
              +977-9860777330
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
