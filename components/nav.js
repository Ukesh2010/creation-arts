import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

const Nav = () => (
  <nav className="app-navbar">
    <div className="container">
      <div className="nav-left">
        <div className="logo">
          <Link href={"/"}>
            {/*<Image src={'/images/logo.png'} height={"3rem"} width={"auto"}/>*/}
            <h4>Creation Arts</h4>
          </Link>
        </div>
      </div>

      <div className="nav-container">
        <div className="nav-item">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="nav-item">
          <Link href={"/products"}>Products</Link>
        </div>
        <div className="nav-item">
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <Link href={"/login"}>Login</Link>
        </div>
        <div className="nav-item">
          <Link href={"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} size={"2x"} />
          </Link>
        </div>
        <div className="nav-item mobile-nav">
            <FontAwesomeIcon icon={faBars} size={"2x"} />
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
