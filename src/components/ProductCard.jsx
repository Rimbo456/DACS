import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosIstance";
import { motion } from "framer-motion";

const ProductCard = ({ product, size }) => {
  const [isLiked, setIsLiked] = useState(false);
  const addToCartClick = async () => {
    try {
      await axiosInstance.put("/api/addcart", {
        idProduct: product._id,
        count: 1,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleLikeClick = async () => {
    try {
      if (!isLiked) {
        setIsLiked(true);
        await axiosInstance.put("/api/addwish", { idProduct: product._id });
      } else {
        setIsLiked(false);
        await axiosInstance.put("/api/removewish", { idProduct: product._id });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkIfLiked = async () => {
      try {
        const res = await axiosInstance.get(`/api/getprofile`);
        if (res.data.wishlist && Array.isArray(res.data.wishlist)) {
          // Dùng some để kiểm tra xem product._id có trong wishlist hay không
          const liked = res.data.wishlist.some((prd) => prd === product._id);
          setIsLiked(liked);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkIfLiked();
  }, []);

  const variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    normal: {
      opacity: [0, 1],
      x: [-30, 0],
      transition: { duration: 1.5 },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="normal"
      whileHover="hover"
      className={`${size} relative bg-white shadow-xl border-[1px] rounded-lg overflow-hidden mb-5`}
    >
      <Link to={`/detail/${product._id}`}>
        <img
          className="w-full h-64 object-cover"
          src={`https://joyful-syrniki-c66fec.netlify.app/src/assets/Product/` + product.image[0]}
          alt={product.nameProduct}
        />
      </Link>
      <div className="p-3">
        <Link to={`/detail/${product._id}`}>
          <h3 className="text-xl font-semibold hover:underline">
            {product.nameProduct.slice(0, 22) + `...`}
          </h3>
        </Link>
        <p className="text-gray-600 mt-2">
          {product.description.slice(0, 15) + `...`}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-800">
            {product.price.toLocaleString()}₫
          </span>
          <div className="flex justify-between items-center">
            <button
              onClick={addToCartClick}
              className="px-2 mr-1 py-2 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600"
            >
              Thêm vào giỏ
            </button>
            <motion.button
              whileTap={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.25 }}
              animate={{ scale: [1, 1.3, 1] }}
              onClick={handleLikeClick}
              className={`${
                isLiked
                  ? `border-[1px] border-red-500 hover:border-red-500`
                  : ``
              } size-8 p-2 rounded-full hover:border-[1px] hover:border-slate-500 flex justify-center items-center absolute top-1 z-40 right-1`}
            >
              {isLiked ? (
                <IoMdHeart className="text-red-500" />
              ) : (
                <IoMdHeartEmpty />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
