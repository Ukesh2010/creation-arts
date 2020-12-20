import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { login } from "../../api";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required(),
});

const Login = () => {
  const router = useRouter();
  const { login: setAuthToken } = useAuth();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      setSubmitting(false);

      const response = await login(values);
      setAuthToken(response.token);
      router.push("/");
    } catch (response) {
      setErrors(response?.errors?.reduce((p, c) => ({ ...p, ...c }), {}));
    }
  };

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
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="text"
                      name={"email"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <span className={"error-message"}>{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name={"password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <span className={"error-message"}>{errors.password}</span>
                    )}
                  </div>
                  <div>
                    <Link href="/forgot-password">Forgot Password?</Link>
                  </div>
                  <button className="btn accent-btn" disabled={isSubmitting}>
                    login
                  </button>
                </form>
              )}
            </Formik>
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

export default Login;
