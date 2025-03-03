import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosIstance";

const ProductCart = ({ product, cnt }) => {
  const [count, setCount] = useState(cnt);
  const [sum, setSum] = useState(0);

  const removeCart = async () => {
    try {
      await axiosInstance.put("/api/removecart", { idProduct: product._id });
    } catch (error) {
      console.error(error);
    }
  };
  const add1Click = async () => {
    try {
      await axiosInstance.put("/api/addcart", {
        idProduct: product._id,
        count: 1,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const remove1Click = async () => {
    try {
      await axiosInstance.put("/api/addcart", {
        idProduct: product._id,
        count: -1,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const increase = (e) => {
    e.preventDefault();
    setCount(count + 1);
    add1Click();
  };
  const decrease = (e) => {
    e.preventDefault();
    if (count > 1) setCount(count - 1);
    remove1Click();
  };
  useEffect(() => {
    setSum(product.price * count);
  }, [count]);
  return (
    <div className="grid grid-cols-[1fr_16%_16%_16%] items-center justify-items-center border">
      <div className="flex justify-center items-center border">
        <MdDelete onClick={removeCart} size={30} className="cursor-pointer" />
        <img
          className="w-1/2"
          src={`https://joyful-syrniki-c66fec.netlify.app/src/assets/Product/` + product.image[0]}
          alt=""
        />
        <Link to={`/detail/${product._id}`}>
          <p className="hover:underline font-semibold">
            {product.nameProduct.slice(0, 20) + `...`}
          </p>
        </Link>
      </div>
      <h1 className="border w-full h-full flex justify-center items-center">
        {product.price.toLocaleString()}₫
      </h1>
      <div className="border w-full h-full flex justify-center items-center">
        <button onClick={decrease} className="w-6 h-[42px] bg-slate-300">
          -
        </button>
        <input
          value={count}
          readOnly
          className="w-10 h-10 text-center border-2 border-slate-700"
          type="text"
        />
        <button onClick={increase} className="w-6 h-[42px] bg-slate-300">
          +
        </button>
      </div>
      <h1 className="border w-full h-full flex justify-center items-center">
        {sum.toLocaleString()}₫
      </h1>
    </div>
  );
};

export default ProductCart;
