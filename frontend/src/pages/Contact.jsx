import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">
      <div className="text-center text-3xl pt-12 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-16 flex flex-col md:flex-row gap-14 px-6 md:px-16 items-center mb-28">
        {/* Animated Image */}
        <motion.img
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:max-w-[480px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          src={assets.contact_img}
          alt="Contact"
        />

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center items-start gap-6 w-full max-w-xl"
        >
          <div>
            <h3 className="font-semibold text-xl text-gray-700 flex items-center gap-2">
              <MapPin size={20} /> Our Store
            </h3>
            <p className="text-gray-500 leading-relaxed mt-1">
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-gray-700 flex items-center gap-2">
              <Phone size={20} /> Contact Info
            </h3>
            <p className="text-gray-500 mt-1">Tel: (415) 555-0132</p>
            <p className="text-gray-500">Email: admin@ShopKart.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-gray-700 flex items-center gap-2">
              <Briefcase size={20} /> Careers at ShopKart
            </h3>
            <p className="text-gray-500 mt-1">
              Learn more about our teams and job openings.
            </p>
            <button className="mt-3 border border-gray-800 px-6 py-2 text-sm font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
              Explore Jobs
            </button>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-gray-700 flex items-center gap-2">
              🕒 Business Hours
            </h3>
            <p className="text-gray-500 mt-1">Mon – Fri: 9am – 6pm</p>
            <p className="text-gray-500">Sat – Sun: 10am – 4pm</p>
          </div>
        </motion.div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
