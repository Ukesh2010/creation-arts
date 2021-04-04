import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { Formik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../../api";
import { useRouter } from "next/router";
import { PulseLoader } from "react-spinners";
import { useToasts } from "react-toast-notifications";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(8).max(16).required(),
  password2: Yup.string()
    .oneOf([Yup.ref("password")], "should match with password")
    .required("password confirmation is a required field"),
});

const ResetPassword = ({ token }) => {
  const router = useRouter();
  const { addToast } = useToasts();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    try {
      await resetPassword({ ...values, token: token });
      router.push("/login");
      addToast("Password reset successfully", {
        appearance: "success",
      });
    } catch (response) {
      if (response.errors) {
        setErrors(response?.errors?.reduce((p, c) => ({ ...p, ...c }), {}));
      } else {
        addToast(response?.message || "Error while logging in.", {
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
        <title>Reset password</title>
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
              validationSchema={ResetPasswordSchema}
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

export default ResetPassword;

export const getServerSideProps = async (ctx) => {
  return { props: { token: ctx.query.token || null } };
};
