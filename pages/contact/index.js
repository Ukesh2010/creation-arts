import React, {Fragment} from "react";
import Head from "next/head";
import Nav from "../../components/nav";

const Contact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property={"title"} content={"Yala Treasure Handicraft Services | Contact us"}
                      key={"contact_title"}/>
                <meta property={"description"}
                      content={"Yala Treasure has been offering high-quality and professional handicrafts services for several years. For any queries, please feel free to contact us."}
                      key={"contact_description"}/>
            </Head>
            <Nav/>
            <section className={"container"}>
                <div className={"about-us-container"}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={"/images/prabin.jpg"} className={"about-us-image"} alt={"owner"}/>
                        <p><strong>Yala Treasure</strong> is an online handicraft store with the coolest and unique
                            monuments and ornaments designed by our professionals. We offer all kinds of Nepali
                            handicrafts and other products at a cheap price. Apart from selling products in different
                            parts of Nepal, we also export our reliable products to different nations.</p>
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
