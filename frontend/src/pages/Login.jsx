import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const endpoint =
        currentState === "Sign Up" ? "/api/user/register" : "/api/user/login";
      const payload =
        currentState === "Sign Up"
          ? { name, email, password }
          : { email, password };

      const response = await axios.post(backendUrl + endpoint, payload);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success(`${currentState} successful`);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  const inputVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <AnimatePresence mode="wait">
        {currentState === "Sign Up" && (
          <motion.input
            key="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            variants={inputVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full px-3 py-2 border border-gray-800"
            required
          />
        )}
      </AnimatePresence>

      <motion.input
        key="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        variants={inputVariants}
        custom={1}
        initial="hidden"
        animate="visible"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />

      <motion.input
        key="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        variants={inputVariants}
        custom={2}
        initial="hidden"
        animate="visible"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer hover:underline">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer hover:underline"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer hover:underline"
          >
            Login Here
          </p>
        )}
      </div>

      <motion.button
        whileTap={{ scale: 0.96 }}
        className="bg-black text-white font-light px-8 py-2 mt-4 w-full hover:bg-gray-900 transition-all"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </motion.button>
    </motion.form>
  );
};

export default Login;
