import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Failed to load orders:", error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 bg-gradient-to-br from-pink-50 via-purple-50 to-white min-h-screen px-4 sm:px-10">
      <div className="text-3xl font-bold text-gray-800 mb-8">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="flex flex-col gap-5">
        {orderData.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            You haven't placed any orders yet.
          </p>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 border border-gray-200 shadow-md rounded-xl px-5 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-lg transition duration-200"
            >
              {/* Left Side - Info */}
              <div className="flex items-start gap-5 text-sm text-gray-800">
                <img
                  className="w-16 sm:w-20 rounded-md"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div>
                  <p className="text-base font-semibold">{item.name}</p>
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                    <p>Qty: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-1 text-sm">
                    📅 Date:{" "}
                    <span className="text-gray-500">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  <p className="mt-1 text-sm">
                    💳 Payment:{" "}
                    <span className="text-gray-500">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              {/* Right Side - Status & Button */}
              <div className="flex flex-col md:items-end gap-3 md:w-1/3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium">{item.status}</span>
                </div>
                <button
                  onClick={loadOrderData}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition duration-200 shadow cursor-pointer"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
