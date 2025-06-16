import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { motion } from "framer-motion";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14 px-4 sm:px-10">
      <div className="text-2xl mb-10">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="space-y-6">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border rounded-xl shadow-sm p-4 flex flex-col sm:flex-row justify-between items-center gap-4"
            >
              <div className="flex items-center gap-5 w-full sm:w-auto">
                <img
                  className="w-20 rounded-lg shadow"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-base font-semibold text-gray-800">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-3 py-1 bg-gray-100 rounded border text-xs">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) => {
                    if (e.target.value !== "" && e.target.value !== "0") {
                      updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      );
                    }
                  }}
                  className="border rounded w-16 px-2 py-1 text-center text-sm"
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition"
                  src={assets.bin_icon}
                  alt="delete"
                  title="Remove"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {cartData.length > 0 ? (
        <div className="flex justify-end mt-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full sm:w-[450px]"
          >
            <CartTotal />
            <div className="text-end mt-4">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm px-8 py-3 rounded hover:bg-gray-800 transition-all duration-300"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-500 text-sm">
          Your cart is empty. Start adding some products!
        </div>
      )}
    </div>
  );
};

export default Cart;
