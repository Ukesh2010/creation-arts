import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import { register } from "../../api";
import { useRouter } from "next/router";

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(16).required(),
  password2: Yup.string()
    .oneOf([Yup.ref("password")], "should match with password")
    .required("password confirmation is a required field"),
});

const Register = () => {
  const router = useRouter();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    try {
      await register({ ...values, role: "customer" });
      router.push("/login");
    } catch (response) {
      setErrors(response?.errors?.reduce((p, c) => ({ ...p, ...c }), {}));
    } finally {
      setSubmitting(false);
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
                Already have an account? <Link href={"/login"}>Login</Link>
              </div>
            </div>
            <Formik
              initialValues={{ email: "", password: "", password2: "" }}
              validationSchema={RegisterSchema}
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
                      type="email"
                      className="form-control"
                      name={"email"}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <span className={"error-message"}>{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name={"password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <span className={"error-message"}>{errors.password}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="rePassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name={"password2"}
                      value={values.password2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password2 && touched.password2 && (
                      <span className={"error-message"}>
                        {errors.password2}
                      </span>
                    )}
                  </div>
                  <button className="btn accent-btn">Register</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
