import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";

const PageNotFound = () => {
  return (
    <Fragment>
      <Head>
        <title>Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div className="info-container">
            <div className="page-not-found"></div>
            <h3 className="mb-2 text-center">404 - Page Not Found</h3>
            <a href="/login">Go back to login</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PageNotFound;
