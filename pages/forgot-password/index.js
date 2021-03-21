import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { forgotPassword } from "../../api";
import { useToasts } from "react-toast-notifications";
import { PulseLoader } from "react-spinners";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

const ForgotPassword = () => {
  const router = useRouter();
  const { addToast } = useToasts();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await forgotPassword(values);
      router.push("/");
    } catch (response) {
      if (response.errors) {
        setErrors(response.errors.reduce((p, c) => ({ ...p, ...c }), {}));
      } else {
        addToast(response?.message || "Error while trying to reset password", {
          appearance: "error",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Forgot password</title>
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
                We will send you a reset password link, please enter your email.
              </div>
            </div>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotPasswordSchema}
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
                  <div>
                    <Link href={"/login"}>Go back to Login</Link>
                  </div>
                  <button className="btn accent-btn" disabled={isSubmitting}>
                    Reset password{" "}
                    <PulseLoader loading={isSubmitting} size={4} />
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

export default ForgotPassword;
