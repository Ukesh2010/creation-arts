import React, { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import { getServerSideCookie } from "../../utils/serverSideStorage";
import { getUser } from "../../api";

const Profile = ({ user }) => {
  const { logout } = useAuth();
  const router = useRouter();

  const onLogoutClick = () => {
    logout();
    router.push("/login");
  };

  const onChangePasswordClick = () => {
    router.push("/change-password");
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
