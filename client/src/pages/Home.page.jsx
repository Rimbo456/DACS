import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import ProductTypeCard from "../components/ProductTypeCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import axiosInstance from "../utils/axiosIstance";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigate();

  const product = {
    nameProduct: "Product Name",
    description: "This is a brief description of the product.",
    price: "19.99",
    image: [
      "1724954502754.jpg", // replace with actual image URL
    ],
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosInstance.get("/api/getproduct");
        const temp = res.data;
        setProducts(temp);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigation("/login");
    }
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Thời gian trễ giữa các phần tử con
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Thời gian hiệu ứng cho mỗi phần tử
      },
    },
  };

  return (
    <div className="w-full">
      <Header></Header>
      <Slider></Slider>
      <div className="flex justify-center">
        <ProductTypeCard
          title={"ĐỒNG HỒ NAM"}
          urlImg={
            "https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-1.jpg"
          }
        ></ProductTypeCard>
        <ProductTypeCard
          title={"ĐỒNG HỒ NỮ"}
          urlImg={
            "https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg"
          }
        ></ProductTypeCard>
      </div>
      <div className="w-full flex justify-around px-5">
        {loading ? (
          <h1>no data</h1>
        ) : (
          <>
            <ProductCard
              size={"max-w-[260px]"}
              product={products[Math.floor(Math.random() * products.length)]}
            ></ProductCard>
            <ProductCard
              size={"max-w-[260px]"}
              product={products[Math.floor(Math.random() * products.length)]}
            ></ProductCard>
            <ProductCard
              size={"max-w-[260px]"}
              product={products[Math.floor(Math.random() * products.length)]}
            ></ProductCard>
            <ProductCard
              size={"max-w-[260px]"}
              product={products[Math.floor(Math.random() * products.length)]}
            ></ProductCard>
          </>
        )}
      </div>
      <div className="flex justify-center">
        <ProductTypeCard
          title={"ĐỒNG HỒ NAM"}
          urlImg={
            "https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-1.jpg"
          }
        ></ProductTypeCard>
        <ProductTypeCard
          title={"ĐỒNG HỒ NỮ"}
          urlImg={
            "https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg"
          }
        ></ProductTypeCard>
      </div>
      <div className="px-5">
        <ul className="flex mb-10">
          <li className="mr-10 text-2xl font-semibold">san pham pho bien</li>
          <li className="mr-10 text-2xl font-semibold">san pham khuyen mai</li>
          <li className="text-2xl font-semibold">san pham moi</li>
        </ul>
        <div className="w-full flex justify-around">
          {loading ? (
            <h1>no data</h1>
          ) : (
            <>
              <ProductCard
                size={"max-w-[210px]"}
                product={products[Math.floor(Math.random() * products.length)]}
              ></ProductCard>
              <ProductCard
                size={"max-w-[210px]"}
                product={products[Math.floor(Math.random() * products.length)]}
              ></ProductCard>
              <ProductCard
                size={"max-w-[210px]"}
                product={products[Math.floor(Math.random() * products.length)]}
              ></ProductCard>
              <ProductCard
                size={"max-w-[210px]"}
                product={products[Math.floor(Math.random() * products.length)]}
              ></ProductCard>
              <ProductCard
                size={"max-w-[210px]"}
                product={products[Math.floor(Math.random() * products.length)]}
              ></ProductCard>
            </>
          )}
        </div>
      </div>
      <hr className="my-14 h-[1px] bg-slate-300" />
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-semibold ml-10 uppercase">
          đăng kí nhận thông tin
        </h1>
        <form className="mr-10 w-5/12" action="">
          <input
            placeholder="Email..."
            className="bg-gray-200 px-3 w-9/12 py-[7px] rounded-s-sm"
            type="email"
          />
          <button className="bg-blue-500 py-[7px] px-2 rounded-e-sm font-semibold text-white uppercase">
            đăng kí
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
