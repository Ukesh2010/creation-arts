import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { Formik } from "formik";
import * as Yup from "yup";
import { setNewPassword } from "../../api";
import { useRouter } from "next/router";

const SetNewPasswordSchema = Yup.object().shape({
  password: Yup.string().min(8).max(16).required(),
  password2: Yup.string()
    .oneOf([Yup.ref("password")], "should match with password")
    .required("password confirmation is a required field"),
});

const SetNewPassword = ({ token }) => {
  const router = useRouter();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    try {
      await setNewPassword({ ...values, token: token });
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

  return (
    <Fragment>
      <Head>
        <title>Set new password</title>
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
              <div>This link is valid only for 24hrs.</div>
            </div>
            <Formik
              initialValues={{ password: "", password2: "" }}
              validationSchema={SetNewPasswordSchema}
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
                    Set new password
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SetNewPassword;

export const getServerSideProps = async (ctx) => {
  return { props: { token: ctx.query.token || null } };
};
