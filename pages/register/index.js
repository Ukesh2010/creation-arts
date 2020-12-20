import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="auth-container">
        <div className="auth-card">
          <div className="left-container">
            <Image
              src="/images/product2.jpg"
              alt="Picture of the author"
              layout="fill"
            />
          </div>

          <div className="right-container">
            <div className="info-block">
              <div>
                Already have an account? <Link href={"/login"}>Login</Link>
              </div>
            </div>

            {/*Register Form*/}
            <form action="submit">
              <div className="form-group">
                <label htmlFor="username">Full Name</label>
                <input type="text" className="form-control" id={"userName"} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id={"email"} />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id={"password"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="rePassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id={"rePassword"}
                />
              </div>

              <div className="form-group horizontal">
                <input type="checkbox" className="form-control" id={"terms"} />
                <label htmlFor="terms">Password</label>
              </div>
              <button className="btn accent-btn">Register</button>
            </form>

            <div className="or-block">
              <span>OR</span>
            </div>
            <div className="social-login-container">
              <button className="btn fb-btn">
                <FontAwesomeIcon icon={faFacebookF} size={"2x"} />
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
