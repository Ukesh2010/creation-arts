import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {useAuth} from "../contexts/AuthContext";

const Footer = () => {
    const {authenticated} = useAuth();
    return (
        <div className="app-footer">
            <div className="container">
                <div className="footer-content">
                    <div className={"data-content"}>
                        <h5>About us</h5>
                        <p><strong>Yala Treasure</strong> is an online handicraft store with the coolest and unique
                            monuments and ornaments designed by our professionals.</p>
                    </div>
                    <div className={"data-content"}>
                        <h5>Links</h5>
                        <ul>
                            <li><a href={"/products"}> Products</a></li>
                            <li><a href={"/contact"}>About us</a></li>
                            {!authenticated && <li><a href={"/login"}>Login</a></li>}
                        </ul>
                    </div>
                    <div className={"data-content"}>
                        <h5>contact us</h5>
                        <ul>
                            <li><a className="contact-details"
                                   href="mailto:admin@yalatreasure.com">admin@yalatreasure.com</a></li>
                            <li><a className="contact-details" href="tel:+977-9803001320">+977-9803001320 /
                                +977-01-5261764</a></li>
                        </ul>
                        <div style={{display: "flex", marginTop: 25}}>
                            <a href="https://www.facebook.com/yelatreasure" target="_blank">
                                <div className="icon-button">
                                    <FontAwesomeIcon icon={faFacebookF} size={"2x"}/>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/creation_arts05/?igshid=9tv0ltuk84xh&fbclid=IwAR0pChQaJEqTQW-2HGLSI4OoIqCwV0zDkYFJESgsO5bo9m9wP5IqKcVi6j8"
                               target="_blank">
                                <div className="icon-button">
                                    <FontAwesomeIcon icon={faInstagram} size={"2x"}/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright-text">© 2021 Yalatreasure, All Rights Reserved.</div>
            </div>

        </div>
    );
}

export default Footer;
