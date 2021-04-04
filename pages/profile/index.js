import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import { getServerSideCookie } from "../../utils/serverSideStorage";
import { getUser, login, updateUser } from "../../api";
import Link from "next/link";
import { Formik } from "formik";
import { PulseLoader } from "react-spinners";
import { useToasts } from "react-toast-notifications";

const Profile = ({ user }) => {
  const { name, contact_no, full_address } = user;
  const { logout } = useAuth();
  const router = useRouter();
  const { addToast } = useToasts();

  const onLogoutClick = () => {
    logout();
    router.push("/login");
  };

  const onChangePasswordClick = () => {
    router.push("/change-password");
  };

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await updateUser(values);
      addToast(response?.message || "User updated successfully.", {
        appearance: "success",
      });
    } catch (response) {
      if (response.errors) {
        setErrors(response.errors.reduce((p, c) => ({ ...p, ...c }), {}));
      } else {
        addToast(response?.message || "Error while updating user.", {
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
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div className="profile-details-container">
            <div className="profile-avatar">
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
            <div className="wrapper">
              <div className="profile-info">
                <h3 className="username">{user?.role}</h3>
                <span className="email">{user?.email}</span>
                <Link href={"/my-orders"}>My orders</Link>
              </div>
              <div className="action-container">
                <button
                  className="btn accent-btn"
                  onClick={onChangePasswordClick}
                >
                  Change Password
                </button>
                <button
                  className="btn primary-outline-btn"
                  onClick={onLogoutClick}
                >
                  Logout
                </button>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <Formik
                  initialValues={{ name, contact_no, full_address }}
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
                        <label htmlFor="name">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name={"name"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        {errors.name && touched.name && (
                          <span className={"error-message"}>{errors.name}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact_no">Contact no</label>
                        <input
                          className="form-control"
                          type="text"
                          name={"contact_no"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.contact_no}
                        />
                        {errors.contact_no && touched.contact_no && (
                          <span className={"error-message"}>
                            {errors.contact_no}
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="full_address">Full address</label>
                        <input
                          className="form-control"
                          type="text"
                          name={"full_address"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.full_address}
                        />
                        {errors.full_address && touched.full_address && (
                          <span className={"error-message"}>
                            {errors.full_address}
                          </span>
                        )}
                      </div>
                      <button
                        className="btn accent-btn"
                        disabled={isSubmitting}
                      >
                        Update <PulseLoader loading={isSubmitting} size={4} />
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Profile;

export const getServerSideProps = async (context) => {
  const token = getServerSideCookie(context)("token");

  try {
    const user = await getUser(token)();
    return { props: { user } };
  } catch (e) {
    console.log("error", e.message);
  }
  return { props: { user: {} } };
};
