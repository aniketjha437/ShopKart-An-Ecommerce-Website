import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-gradient-to-bl from-[#f5f9ff] via-[#e9f0ff] to-[#f0faff] min-h-screen rounded-2xl shadow-lg"
    >
      <p className="mb-5 text-xl font-bold text-gray-800">🛍 Product Catalog</p>

      <div className="flex flex-col gap-3">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-white/80 border border-blue-100 backdrop-blur-md py-2 px-4 rounded-xl shadow-sm text-sm font-semibold text-gray-700">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Product Rows */}
        {list.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03 }}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-3 py-3 px-4 bg-white border border-blue-100 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              className="w-12 h-12 rounded-lg object-cover"
              src={item.image[0]}
              alt={item.name}
            />
            <p className="text-gray-800 font-medium truncate">{item.name}</p>
            <p className="text-blue-600 text-sm">{item.category}</p>
            <p className="text-gray-900 font-bold">
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-red-500 hover:text-red-700 text-center font-extrabold cursor-pointer transition text-lg"
              title="Remove product"
            >
              ✕
            </p>
          </motion.div>
        ))}

        {/* No Product Fallback */}
        {list.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 text-gray-500"
          >
            No products available right now.
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default List;
