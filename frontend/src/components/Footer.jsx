import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div className="flex flex-col gap-4">
          <img src={assets.logoo} alt="ShopKart Logo" className="w-32" />
          <p className="text-sm leading-relaxed">
            Welcome to ShopKart — your one-stop destination for quality and
            affordable shopping. We bring you curated collections with fast
            delivery and excellent support.
          </p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">COMPANY</h2>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">QUICK LINKS</h2>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/collection">Shop</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
          <p className="text-sm">📞 +91 9874563210</p>
          <p className="text-sm">✉️ aniketjhaxxxx@gmail.com</p>

          <div className="flex gap-4 mt-2">
            <Link
              to="https://www.linkedin.com/in/aniketjha437/"
              className="hover:scale-110 transition"
            >
              <LinkedInIcon className="text-blue-500" />
            </Link>

            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://wa.me/918459031678?text=Hello%20Aniket%2C%20WhatsUp!%20Kaisa%20hai%3F",
                  "_blank"
                );
              }}
              className="hover:scale-110 transition"
            >
              <WhatsAppIcon className="text-green-600" />
            </Link>

            <Link
              to="https://x.com/aniketjha437"
              className="hover:scale-110 transition"
            >
              <TwitterIcon className="text-blue-400" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
        © {new Date().getFullYear()} ShopKart. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
