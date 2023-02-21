import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h1>Order Summary</h1>
      <hr />
      <h2>You have placed: {orders.length} orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>{order.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
