import React, { Fragment } from "react";
import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";
import { changePassword } from "../../api";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import Nav from "../../components/nav";

const ChangePasswordSchema = Yup.object().shape({
  old_password: Yup.string().min(8).max(16).required(),
  password: Yup.string().min(8).max(16).required(),
  password2: Yup.string()
    .oneOf([Yup.ref("password")], "should match with password")
    .required("password confirmation is a required field"),
});

const ChangePassword = () => {
  const router = useRouter();
  const { authenticated, logout } = useAuth();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    try {
      await changePassword(values);
      logout();
      router.push("/login");
    } catch (response) {
      if (response.errors) {
        setErrors(response?.errors?.reduce((p, c) => ({ ...p, ...c }), {}));
      } else {
        console.log("error", response.message);
      }
    } finally {
      setSubmitting(false);
    }
  };
  if (!authenticated) {
    return (
      <Fragment>
        <Head>
          <title>Checkout</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <section className="container">
          <div className="app-page-container">
            <div className="illustration-container">
              <img className="img" src="/images/login.png" alt="login_to_continue"/>
              <h4>Please login to continue.</h4>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Change password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="auth-card">
              <Formik
                initialValues={{
                  old_password: "",
                  password: "",
                  password2: "",
                }}
                validationSchema={ChangePasswordSchema}
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
                  isValid,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="password">Old password</label>
                      <input
                        type="password"
                        className="form-control"
                        name={"old_password"}
                        value={values.old_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.old_password && touched.old_password && (
                        <span className={"error-message"}>
                          {errors.old_password}
                        </span>
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
                        <span className={"error-message"}>
                          {errors.password}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="rePassword">Password confirmation</label>
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
                    <button
                      className="btn accent-btn"
                      disabled={isSubmitting || !isValid}
                    >
                      Change password
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ChangePassword;
