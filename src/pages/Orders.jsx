import { useEffect, useState } from "react";
import api from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    const response = await api.get(`/orders?userId=${user.id}`);
    setOrders(response.data);
  }

  return (
    <div>
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <div className="empty">
          <h2>No Orders Yet</h2>
          <p>Buy skincare products from product details page.</p>
        </div>
      ) : (
        <div className="products">
          {orders.map((order) => (
            <div className="card" key={order.id}>
              <img src={order.image} alt={order.productName} />
              <h3>{order.productName}</h3>
              <p>₹ {order.price}</p>
              <p>Order Date: {order.date}</p>
              <p className="success-text">Order Confirmed</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;