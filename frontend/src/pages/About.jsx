import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">
      <div className="text-3xl text-center pt-12 border-t border-gray-300">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-14 flex flex-col md:flex-row gap-16 items-center px-6 md:px-16">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:max-w-[480px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          src={assets.about_img}
          alt="About Forever"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-[15px] leading-relaxed"
        >
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">Our Mission</h3>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </motion.div>
      </div>

      <div className="text-center text-2xl text-gray-900 py-10">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row text-sm mb-20 px-6 md:px-16 gap-8"
      >
        {[
          {
            title: "Quality Assurance",
            desc: "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
          },
          {
            title: "Convenience",
            desc: "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
          },
          {
            title: "Exceptional Customer Service",
            desc: "Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="border border-gray-200 rounded-xl p-8 shadow-sm bg-white flex-1 hover:shadow-md transition-all duration-300 flex flex-col gap-4"
          >
            <h4 className="font-semibold text-base text-gray-800">
              {item.title}:
            </h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <NewsletterBox />
    </div>
  );
};

export default About;
