import React, { Fragment } from "react";
import Head from "next/head";
import IconFacebook from "../../components/icons/icon-facebook";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
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
                Don't have an account?{" "}
                <Link href={"/register"}>Register Now</Link>
              </div>
            </div>

            {/*Login Form*/}
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id={"email"} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id={"password"}
                />
              </div>

              <div className="form-group horizontal">
                <input
                  type="checkbox"
                  className="form-control"
                  id={"forgotPassword"}
                />
                <label htmlFor="forgotPassword">Forgot Password?</label>
              </div>

              <button className="btn primary-btn">login</button>
            </form>

            <div className="or-block">
              <span>OR</span>
            </div>
            <div className="social-login-container">
              <button className="btn fb-btn">
                <IconFacebook />
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
