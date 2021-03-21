import React, { Fragment } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Head from "next/head";
import Nav from "../../components/nav";
import { getServerSideCookie } from "../../utils/serverSideStorage";
import Footer from "../../components/footer";
import { getOrders } from "../../api";

const OrderItems = ({ items }) => {
  return items.map((item, index) => (
    <div className="item-block" key={index}>
      <div className="name">{item.product.name}</div>
      <div>Price: ${item.product.price}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Total: ${item.total_amount}</div>
    </div>
  ));
};

const MyOrders = ({ orders }) => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return (
      <Fragment>
        <Head>
          <title>My orders</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <section className="container">
          <div className="app-page-container">
            <div className="info-container">
              <div className="login-required" />
              <h3 className="text-center">Please login to continue.</h3>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>My orders</title>
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div className="my-orders-container">
            <h4 className="title">My Orders</h4>
            <div className="my-orders-list">
              {orders.map((item, index) => (
                <div className="card order-details" key={index}>
                  <div className="order-info">
                    <div className="id">{item._id}</div>
                    <div>
                      <span className="amount" style={{ padding: "0 2rem" }}>
                        ${item.total_amount}
                      </span>
                      <span className="badge">{item.status}</span>
                    </div>
                  </div>
                  <div className="order-items">
                    <div className="title">Items</div>
                    <div className="items-list">
                      <OrderItems items={item.items} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
export default MyOrders;

export const getServerSideProps = async (context) => {
  const token = getServerSideCookie(context)("token");
  try {
    const orders = await getOrders(token)();
    return { props: { orders } };
  } catch (e) {
    console.log("error", e.message);
  }
  return { props: { orders: [] } };
};
