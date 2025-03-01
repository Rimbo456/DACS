import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Header from "../components/Header";
import { Tabs, Tab, Box } from "@mui/material";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosIstance";
import ProductRating from "../components/ProductRating";

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const [nameProduct, setNameProduct] = useState("");
  const [desProduct, setDesProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [imgProduct, setImgProduct] = useState([]);
  const [product, setProduct] = useState(null);

  const addToCartClick = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put("/api/addcart", {
        idProduct: id,
        count: count,
      });
    } catch (error) {
      console.error(error);
    }
  };

  //tabs
  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const increase = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrease = (e) => {
    e.preventDefault();
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await axiosInstance.get(`/api/getdetail/${id}`);
        setNameProduct(res.data.nameProduct);
        setDesProduct(res.data.description);
        setPriceProduct(res.data.price);
        setImgProduct(res.data.image);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadProduct();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="mt-[104px] flex w-full px-3 mb-6">
        <div className="mr-1 w-5/12">
          <Swiper
            className="my-3"
            modules={[Thumbs, Navigation, FreeMode, Pagination]}
            pagination={{ clickable: true }}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
          >
            {imgProduct.map((img) => (
              <SwiperSlide>
                <img
                  src={`http://localhost:5173/src/assets/Product/` + img}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbs Swiper -> store swiper instance */}
          {/* It is also required to set watchSlidesProgress prop */}
          <Swiper
            className="active:cursor-grabbing hover:cursor-grab"
            slidesPerView={4}
            spaceBetween={10}
            freeMode={true}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {imgProduct.map((img) => (
              <SwiperSlide>
                <img
                  src={`http://localhost:5173/src/assets/Product/` + img}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-1 flex-row ml-1 w-7/12 px-3">
          <div className="mt-20 ml-10">
            <h1 className="text-3xl font-semibold">{nameProduct}</h1>
            <div className="w-10 h-1 bg-slate-400 my-3"></div>
            <h1 className="text-2xl font-medium">
              {priceProduct.toLocaleString()}₫
            </h1>
            {/* <h2 className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi reiciendis repudiandae temporibus esse earum, eligendi
              doloremque alias. Mollitia voluptas nam corrupti maiores
              asperiores at, voluptate consequatur minus, ipsa officia incidunt?
            </h2> */}
            <ul className="list-disc mt-3 ml-10">
              <li className="text-lg">Mã hàng: {product && product._id}</li>
              <li className="text-lg">
                Thể loại: {product && product.productType ? `Nam` : `Nữ`}
              </li>
              <li className="text-lg">Thương hiệu: {product && product.trademark}</li>
            </ul>
            <form className="flex mt-4" action="">
              <div>
                <button
                  onClick={decrease}
                  className="w-8 h-[42px] bg-slate-300"
                >
                  -
                </button>
                <input
                  value={count}
                  readOnly
                  className="w-10 h-10 text-center border-2 border-slate-700"
                  type="text"
                />
                <button
                  onClick={increase}
                  className="w-8 h-[42px] bg-slate-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={addToCartClick}
                className="ml-20 bg-red-400 text-lg uppercase font-semibold text-white p-2"
                type="submit"
              >
                thêm vào giỏ
              </button>
            </form>
            <div className="mt-10 ml-2">
              <h1 className="font-semibold text-lg">Hỗ trợ thanh toán</h1>
              <div className="flex flex-wrap">
                <img
                  className="w-32"
                  src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-acb.jpg"
                  alt=""
                />
                <img
                  className="w-32"
                  src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-techcombank.jpg"
                  alt=""
                />
                <img
                  className="w-32"
                  src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vib.jpg"
                  alt=""
                />
                <img
                  className="w-32"
                  src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vcb.jpg"
                  alt=""
                />
                <img
                  className="w-32"
                  src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-paypal.jpg"
                  alt=""
                />
                <img
                  className="w-32"
                  src="https://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-mastercard.jpg"
                  alt=""
                />
                <img
                  className="w-32"
                  src="https://dongphucvina.vn/wp-content/uploads/2023/05/logo-BIDV-dongphucvina.vn_.png"
                  alt=""
                />
                <img
                  className="w-32"
                  src="https://apithanhtoan.com/wp-content/uploads/2020/08/Logo-MBBank.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20 mt-10 border-2 p-3">
        <Box>
          <Tabs
            value={value}
            onChange={handleChangeTabs}
            aria-label="tabs example"
          >
            <Tab label="Mô tả" />
            <Tab label="đánh giá" />
          </Tabs>
          {value === 0 && (
            <pre className="m-5 whitespace-pre-wrap font-sans">
              {desProduct}
            </pre>
          )}
          {value === 1 && (
            <div>
              <ProductRating></ProductRating>
            </div>
          )}
        </Box>
      </div>
      <div className="flex justify-between my-10">
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
export default ProductDetail;
