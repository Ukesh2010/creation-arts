import React, { Fragment } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Head from "next/head";
import Nav from "../../components/nav";
import { getServerSideCookie } from "../../utils/serverSideStorage";
import Footer from "../../components/footer";
import { getOrders } from "../../api";

const OrderItems = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total amount</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.product.name}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{item.total_amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
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
              <div className="login-required"></div>
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div className="product-grid-container">
            <div className="product-list-container">
              <div className="product-block">
                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Items</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item, index) => (
                      <tr key={index}>
                        <td>{item._id}</td>
                        <td>
                          <OrderItems items={item.items} />
                        </td>
                        <td>{item.total_amount}</td>
                        <td>{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
