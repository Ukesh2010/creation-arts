import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { useAuth } from "../contexts/AuthContext";
import { useCartState } from "../contexts/CartContext";
import { useRouter } from "next/router";

const Nav = () => {
  const { authenticated } = useAuth();
  const { items } = useCartState();
  const router = useRouter();

  const [opened, setOpened] = useState(false);

  return (
    <nav className="app-navbar">
      <div className={`container ${opened && "opened"}`}>
        <div className="nav-left">
          <div className="logo">
            <Link href={"/"}>
              {/*<Image src={'/images/logo.png'} height={"3rem"} width={"auto"}/>*/}
              <h4>Yalatreasure</h4>
            </Link>
          </div>
        </div>

        <div className="nav-container">
          <div
            className={`nav-item ${router.pathname === "/" ? "active" : ""}`}
          >
            <Link href={"/"}>Home</Link>
          </div>
          <div
            className={`nav-item ${
              router.pathname === "/products" ||
              router.pathname.startsWith("/product-detail")
                ? "active"
                : ""
            }`}
          >
            <Link href={"/products"}>Products</Link>
          </div>
          <div
            className={`nav-item ${
              router.pathname === "/contact" ? "active" : ""
            }`}
          >
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>

        <div className="nav-right">
          <div
            className={`nav-item ${
              ["/profile", "/login"].includes(router.pathname) ? "active" : ""
            }`}
          >
            {authenticated ? (
              <Link href={"/profile"}>Profile</Link>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </div>
          <div className="nav-item nav-cart-item">
            {items.length > 0 && (
              <span className="badge accent"> {items.length} </span>
            )}
            <Link href={"/cart"}>
              <FontAwesomeIcon icon={faShoppingBag} size={"2x"} />
            </Link>
          </div>
          <div
            className="nav-item mobile-nav"
            onClick={() => {
              setOpened((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faBars} size={"2x"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
