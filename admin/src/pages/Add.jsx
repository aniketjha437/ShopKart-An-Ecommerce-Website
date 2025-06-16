import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 px-4 py-10">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white max-w-4xl mx-auto rounded-2xl shadow-md p-8 flex flex-col gap-5 border"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Add New Product
        </h2>

        {/* Images */}
        <div>
          <p className="mb-2 font-medium">Upload Images</p>
          <div className="flex flex-wrap gap-3">
            {[image1, image2, image3, image4].map((img, i) => (
              <label key={i} htmlFor={`image${i + 1}`}>
                <img
                  className="w-24 h-24 rounded-lg object-cover border cursor-pointer transition-transform hover:scale-105"
                  src={!img ? assets.upload_area : URL.createObjectURL(img)}
                  alt={`Upload ${i + 1}`}
                />
                <input
                  onChange={(e) => {
                    const fileSetter = [
                      setImage1,
                      setImage2,
                      setImage3,
                      setImage4,
                    ][i];
                    fileSetter(e.target.files[0]);
                  }}
                  type="file"
                  id={`image${i + 1}`}
                  hidden
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div>
          <p className="mb-2 font-medium">Product Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full max-w-lg px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            type="text"
            placeholder="Type here"
            required
          />
        </div>

        {/* Description */}
        <div>
          <p className="mb-2 font-medium">Description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full max-w-lg px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Write content here"
            rows={4}
            required
          />
        </div>

        {/* Category/Price */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
          <div>
            <p className="mb-2 font-medium">Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <p className="mb-2 font-medium">Sub Category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div>
            <p className="mb-2 font-medium">Price</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="w-full px-3 py-2 border rounded"
              type="number"
              placeholder="25"
            />
          </div>
        </div>

        {/* Sizes */}
        <div>
          <p className="mb-2 font-medium">Available Sizes</p>
          <div className="flex flex-wrap gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes(size)
                      ? prev.filter((s) => s !== size)
                      : [...prev, size]
                  )
                }
              >
                <p
                  className={`${
                    sizes.includes(size)
                      ? "bg-pink-200 text-black"
                      : "bg-slate-100 text-gray-600"
                  } px-4 py-1 rounded cursor-pointer hover:bg-pink-100 transition`}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bestseller */}
        <div className="flex items-center gap-2">
          <input
            onChange={() => setBestseller((prev) => !prev)}
            checked={bestseller}
            type="checkbox"
            id="bestseller"
          />
          <label htmlFor="bestseller" className="cursor-pointer text-sm">
            Mark as Bestseller
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 bg-black text-white px-6 py-3 rounded shadow-md hover:bg-gray-900 transition cursor-pointer"
        >
          ADD PRODUCT
        </button>
      </motion.form>
    </div>
  );
};

export default Add;
