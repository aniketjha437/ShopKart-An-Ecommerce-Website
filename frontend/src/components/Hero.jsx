import { NavLink } from "react-router-dom";
import heroImg from "../assets/Hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-100">
      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-blue-600">ShopKart</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We provide top-notch solutions to help your business grow and succeed.
          Let’s build something amazing together.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <NavLink to="/collection">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </NavLink>
          <NavLink to="/about">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-100 transition duration-300">
              Learn More
            </button>
          </NavLink>
        </div>
      </div>

      {/* Image Section */}
      <div className="mb-10 md:mb-0">
        <img src={heroImg} alt="Hero" className="rounded-2xl shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
