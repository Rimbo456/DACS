import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCart from "../components/ProductCart";
import { TextField, Button, Stepper, StepButton, Step } from "@mui/material";
import axiosInstance from "../utils/axiosIstance";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigation = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [sum, setSum] = useState(0);
  const [payMeth, setPayMeth] = useState(0);

  const [ma] = useState(() => Math.floor(10000 + Math.random() * 90000));

  const selectPaymentMethods = (value) => {
    setPayMeth(value);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleOrder = async () => {
    try {
      const res = await axiosInstance.put("/api/order", {
        id: ma,
        price: sum,
        payMeth: payMeth,
      });
      navigation(`/order/${ma}`);
    } catch (error) {
      console.error("Error in handleOrder:", error);
    }
  };

  useEffect(() => {
    const getCartList = async () => {
      try {
        const res = await axiosInstance.get("/api/getcartlist");
        if (res.data === cartList) {
        } else {
          setCartList(res.data);
        }
        let newSum = 0;
        for (let i = 0; i < res.data.length; i++) {
          newSum += res.data[i].product.price * res.data[i].quantity;
        }
        setSum(newSum);
      } catch (error) {
        console.error(error);
      }
    };
    getCartList();
    const socket = io("http://localhost:3000");
    socket.on("cartUpdated", (data) => {
      getCartList();
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axiosInstance.get("/api/getprofile");
        setName(res.data.userName);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setNumber(res.data.number);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  return (
    <div>
      <Header></Header>
      <Stepper
        nonLinear
        className="mt-[150px]"
        activeStep={activeStep}
        alternativeLabel
      >
        <Step>
          <StepButton onClick={handleStep(0)}>Cart</StepButton>
        </Step>
        <Step>
          <StepButton onClick={handleStep(1)}>Detail</StepButton>
        </Step>
        <Step>
          <StepButton onClick={handleStep(2)}>Payment</StepButton>
        </Step>
      </Stepper>
      {activeStep === 0 && (
        <div className="flex w-full px-3 mb-6">
          <div className="w-7/12 mt-10 border">
            <div className="grid grid-cols-[1fr_16%_16%_16%] items-center justify-items-center pt-2">
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                sản phẩm
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                giá
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                số lượng
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                tổng
              </h1>
            </div>
            <hr className="h-1 bg-slate-500" />
            {cartList.length === 0 ? (
              <div className="w-full flex items-center justify-center h-full">
                <h1 className="text-2xl">
                  Không có sản phẩm nào trong giỏ hàng
                </h1>
              </div>
            ) : (
              cartList.map((item) => (
                <ProductCart
                  product={item.product}
                  cnt={item.quantity}
                ></ProductCart>
              ))
            )}
          </div>
          <div className="w-5/12 mt-10 ml-5">
            <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
              tổng số lượng
            </h1>
            <hr className="h-1 bg-slate-500" />
            <div className="flex justify-between my-3">
              <h1>tong phu</h1>
              <p>{sum.toLocaleString()}₫</p>
            </div>
            <hr className="h-1 bg-slate-500" />
            <div className="flex justify-between my-3">
              <TextField placeholder="ABZH41B" size="small" label="Voucher" />
              <Button variant="outlined">Apply Voucher</Button>
            </div>
            <hr />
            <div className="flex justify-between my-3">
              <h1>giao hang</h1>
              <div>
                <p>giao hang mien phi</p>
                <p>uoc tinh cho viet nam</p>
                <p>dia chi</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between my-3">
              <h1>tong</h1>
              <p>210000000</p>
            </div>
            <hr />
          </div>
        </div>
      )}
      {activeStep === 1 && (
        <div className="flex w-full px-3 mb-6">
          <div className="w-7/12 mt-10 border">
            <div className="grid grid-cols-[1fr_16%_16%_16%] items-center justify-items-center pt-2">
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                sản phẩm
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                giá
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                số lượng
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                tổng
              </h1>
            </div>
            <hr className="h-1 bg-slate-500" />
            {cartList.length === 0 ? (
              <div className="w-full flex items-center justify-center h-full">
                <h1 className="text-2xl">
                  Không có sản phẩm nào trong giỏ hàng
                </h1>
              </div>
            ) : (
              cartList.map((item) => (
                <ProductCart
                  product={item.product}
                  cnt={item.quantity}
                ></ProductCart>
              ))
            )}
          </div>
          <div className="w-5/12 mt-10 ml-5">
            <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
              thông tin người mua
            </h1>
            <hr className="h-1 bg-slate-500 mb-5" />
            <div className="flex justify-between">
              <h1>Họ và tên:</h1>
              <p>{name}</p>
            </div>
            <div className="flex justify-between mt-3">
              <h1>Địa chỉ email:</h1>
              <p>{email}</p>
            </div>
            <div className="mt-3">
              <h1>Địa chỉ:</h1>
              <TextField
                className="w-full"
                label="Số nhà, tên đường"
                variant="standard"
                size="small"
              ></TextField>
              <div className="h-2"></div>
              <TextField
                className="w-full mb-3"
                label="Quận, Huyện"
                variant="standard"
                size="small"
              ></TextField>
              <div className="h-2"></div>
              <TextField
                className="w-full mb-3"
                label="Tỉnh, Thành phố"
                variant="standard"
                size="small"
              ></TextField>
            </div>
            <div className="mt-3 flex justify-between">
              <h1>Số điện thoại:</h1>
              <TextField
                defaultValue={number}
                placeholder="0XXXXXX..."
                variant="standard"
                size="small"
              ></TextField>
            </div>
            <div>
              <h1 className="my-3">Ghi chú:</h1>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
        </div>
      )}
      {activeStep === 2 && (
        <div className="flex w-full px-3 my-9 flex-col items-center">
          <div className="w-2/3 mt-10 border-2 border-slate-600 rounded-md">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] items-center justify-items-center pt-2 border-b border-slate-600">
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                mã đơn hàng
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                giá trị đơn hàng
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                phí giao dịch
              </h1>
              <h1 className="mb-[.5rem] font-bold uppercase opacity-[.6]">
                thành tiền
              </h1>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] items-center justify-items-center pt-2">
              <h1 className="mb-[.5rem] uppercase opacity-[.6]">#{ma}</h1>
              <h1 className="mb-[.5rem] uppercase opacity-[.6]">
                {sum.toLocaleString()}₫
              </h1>
              <h1 className="mb-[.5rem] uppercase opacity-[.6]">20000₫</h1>
              <h1 className="mb-[.5rem] uppercase opacity-[.6]">
                {(sum + 20000).toLocaleString()}₫
              </h1>
            </div>
          </div>
          <h1 className="my-[1.5rem] text-3xl font-bold uppercase opacity-[.6]">
            phương thức thanh toán
          </h1>
          <div className="flex justify-around mb-8 w-9/12">
            <div
              onClick={() => selectPaymentMethods(1)}
              className={
                payMeth === 1
                  ? `border-double border-4 border-sky-400 w-3/12 shadow-xl`
                  : `w-3/12 cursor-pointer`
              }
            >
              <img
                className=""
                src="https://missluxury.vn/wp-content/uploads/2022/07/8543_13-06-2016_Tienmat_Icon_big-2.png"
                alt=""
              />
            </div>
            <div
              onClick={() => selectPaymentMethods(2)}
              className={
                payMeth === 2
                  ? `border-double border-4 border-sky-400 w-3/12 shadow-xl`
                  : `w-3/12 cursor-pointer`
              }
            >
              <img
                src="https://maxkiwi.vn/wp-content/uploads/2018/02/chuyen-khoan.png"
                alt=""
              />
            </div>
          </div>
          {payMeth === 0 ? (
            <h1 className="font-sans text-xl">
              Vui lòng chọn phương thức thanh toán
            </h1>
          ) : payMeth === 1 ? (
            <div className="w-full flex justify-center flex-col items-center">
              <h1 className="font-sans text-xl">
                Thanh toán trực tiếp khi nhận hàng
              </h1>
              <div className="flex w-8/12 justify-end">
                <Button onClick={handleOrder} size="large" variant="contained">
                  Đặt hàng
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center flex-col items-center">
              <h1 className="font-sans text-xl">
                Thanh toán bằng chuyển khoản qua ứng dụng ngân hàng
              </h1>
              <div className="flex w-8/12 justify-end">
                <Button onClick={handleOrder} size="large" variant="contained">
                  Đặt hàng
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Cart;
