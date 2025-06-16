import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gradient-to-br from-pink-50 via-purple-100 to-white min-h-screen"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">📦 Orders</h3>

      {orders.length === 0 && (
        <p className="text-gray-500 text-center mt-20">No orders found.</p>
      )}

      <div className="flex flex-col gap-6">
        {orders.map((order, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white border shadow-md rounded-lg p-5 grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start hover:shadow-lg transition"
          >
            <img
              className="w-12 h-12 object-contain"
              src={assets.parcel_icon}
              alt="Parcel"
            />

            <div className="text-gray-700">
              {order.items.map((item, i) => (
                <p key={i} className="py-0.5 text-sm">
                  {item.name} x {item.quantity}{" "}
                  <span className="text-xs font-medium text-gray-500">
                    ({item.size})
                  </span>
                  {i !== order.items.length - 1 && ","}
                </p>
              ))}
              <p className="mt-3 font-semibold">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>{order.address.street},</p>
              <p>
                {order.address.city}, {order.address.state},{" "}
                {order.address.country}, {order.address.zipcode}
              </p>
              <p className="text-sm text-gray-500">📞 {order.address.phone}</p>
            </div>

            <div className="text-gray-700 text-sm space-y-1">
              <p>
                🧾 Items:{" "}
                <span className="font-medium">{order.items.length}</span>
              </p>
              <p>💳 Method: {order.paymentMethod}</p>
              <p>
                💰 Payment:{" "}
                <span
                  className={
                    order.payment
                      ? "text-green-600 font-medium"
                      : "text-red-500 font-medium"
                  }
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p>📅 Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className="text-gray-900 font-bold text-sm sm:text-base">
              {currency}
              {order.amount}
            </p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 rounded-md bg-gray-100 border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Orders;
