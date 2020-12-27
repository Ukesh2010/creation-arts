import React, {Fragment} from "react";
import Head from 'next/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle';

const Profile = () => {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Nav/>
      <section className="container">
        <div className="app-page-container">
          <div className="profile-details-container">
            <div className="profile-avatar">
              <FontAwesomeIcon icon={faUserCircle}/>
            </div>
            <div className="wrapper">
              <div className="profile-info">
                <h3 className="username">Random User</h3>
                <span className="email">random_user@mail.com</span>
              </div>
              <div className="action-container">
                <button className="btn accent-btn">Change Password</button>
                <button className="btn primary-outline-btn">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};

export default Profile;
