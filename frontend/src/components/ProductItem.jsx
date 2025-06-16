import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image[0]}
          alt=""
          className=" hover:scale-110 transition ease-in-out   "
        />
      </div>
      <p>{name}</p>

      <p className="   ">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
