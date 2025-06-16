import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <div className="bg-sky-200 ">
      <div className="pt-5 border-2 text-2xl">
        <Title text1="Our" text2="Policy" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 p-4">
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <img
            src={assets.exchange_icon}
            alt="Exchange Policy"
            className="mb-4 w-16"
          />
          <p className="font-semibold text-lg">Easy Exchange</p>
          <p className="text-gray-700 text-sm">
            Exchange any product within 7 days—quick and simple!
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center p-4 text-center">
          <img
            src={assets.quality_icon}
            alt="Quality Assurance"
            className="mb-4 w-16"
          />
          <p className="font-semibold text-lg">Quality Assurance</p>
          <p className="text-gray-700 text-sm">
            Every item is quality checked to ensure top standards.
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center p-4 text-center">
          <img
            src={assets.support_img}
            alt="Customer Support"
            className="mb-4 w-16"
          />
          <p className="font-semibold text-lg">24/7 Support</p>
          <p className="text-gray-700 text-sm">
            Our support team is always here to help—day or night.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
