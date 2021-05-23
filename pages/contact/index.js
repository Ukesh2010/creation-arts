import React, {Fragment} from "react";
import Head from "next/head";
import Nav from "../../components/nav";

const Contact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Nav/>
            <section className={"container"}>
                <div className={"about-us-container"}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={"/images/prabin.jpg"} className={"about-us-image"} alt={"owner"}/>
                        <p><strong>Yala Treasure</strong> is an online handicraft store with the coolest and unique
                            monuments and ornaments designed by our professionals.</p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="app-page-container">
                    <div className="info-container">
                        <div className="contact-image"/>
                        <h3 className="mb-2 text-center">Contact Us</h3>
                        <a className="contact-details" href="mailto:admin@yalatreasure.com">
                            admin@yalatreasure.com
                        </a>
                        <a className="contact-details" href="tel:+977-9803001320">
                            +977-9803001320 / +977-01-5261764
                        </a>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;
