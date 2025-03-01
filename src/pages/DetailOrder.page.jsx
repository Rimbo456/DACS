import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosIstance";
import { useNavigate, useParams } from "react-router-dom";

const DetailOrder = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState([]);

  const back = () => {
    navigation("/");
  };

  useEffect(() => {
    const getProfile = async () => {
      console.log(id);
      try {
        const res = await axiosInstance.get("/api/getprofile");
        setName(res.data.userName);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setNumber(res.data.number);
        const findOrder = res.data.order.find((o) => o.id.toString() === id);
        setOrder(findOrder);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  useEffect(() => {
    console.log(order);
  });

  return (
    <div>
      <div class="bg-white border border-slate-400 rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto my-8 relative">
        <div class="absolute inset-x-0 top-[-1px] w-full flex justify-center -mb-6">
          <div class="w-12 h-6 bg-white rounded-b-full border-x border-b border-slate-400"></div>
        </div>
        <h1 class="font-bold text-2xl my-4 text-center text-blue-600">
          Watch Store
        </h1>
        <div className="mb-2 border border-dashed border-black"></div>
        <div class="flex justify-between mb-6">
          <h1 class="text-xl font-bold font-mono">Hóa đơn</h1>
          <div class="text-gray-700">
            <div>Date: {order.createAt}</div>
            <div>Mã đơn hàng: #{order.id}</div>
          </div>
        </div>
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-4 font-mono">
            Thông tin khách hàng:
          </h2>
          <div class="text-gray-700 mb-2">Tên: {name}</div>
          <div class="text-gray-700 mb-2">Số điện thoại: {number}</div>
          <div class="text-gray-700 mb-2">Địa chỉ: {address}</div>
          <div class="text-gray-700">Email: {email}</div>
        </div>
        <table class="w-full mb-8">
          <thead>
            <tr>
              <th class="text-left font-bold font-mono text-lg text-gray-700">
                Sản phẩm
              </th>
              <th class="text-right font-bold font-mono text-lg text-gray-700">
                Số lượng
              </th>
            </tr>
          </thead>
          <tbody>
            {order.products &&
              order.products.map((item) => (
                <tr>
                  <td class="text-left text-gray-700">{item.item}</td>
                  <td class="text-right text-gray-700">{item.quantity}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td class="text-left font-bold font-mono text-lg text-gray-700">
                Tổng
              </td>
              <td class="text-right font-bold font-mono text-lg text-gray-700">
                {order.price ? order.price.toLocaleString() : "0"}₫
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="text-gray-700 mb-2">Cảm ơn vì đã mua hàng!</div>
        <div class="text-gray-700 text-sm">
          Hãy phản hồi với chúng tôi nếu có vấn đề gì xảy ra.
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <Button onClick={back} variant="contained" size="large">
          Quay về trang chủ
        </Button>
      </div>
    </div>
  );
};

export default DetailOrder;
