import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

import Title from "./Title";
import ProductItem from "./ProductItem";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 10)); // Show more for carousel
  }, [products]);

  return (
    <div className=" bg-amber-400 ">
      <div className="pt-5 border-2 text-2xl">
        <Title text1="Best" text2="Seller" />
      </div>

      <div className="p-4 ">
        {bestSeller.length === 0 ? (
          <p className="text-center">Loading best sellers...</p>
        ) : (
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            navigation
            autoplay={{ delay: 1000 }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="px-4 "
          >
            {bestSeller.map((item) => (
              <SwiperSlide key={item._id}>
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
