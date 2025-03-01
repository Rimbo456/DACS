import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SidebarAdmin from "./components/Admin.sidebar";
import NavbarAdmin from "./components/Admin.navbar";
import { FaHandPointRight } from "react-icons/fa";
import axiosInstance from "../../utils/axiosIstance";

const Admin = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigation("/login");
        } else {
          const res = await axiosInstance.get("/api/getprofile");
          if (res.data.admin === false) {
            navigation("/");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkAdmin();
  }, []);
  return (
    <div className="flex h-screen">
      <SidebarAdmin />
      <div className="flex flex-col basis-3/4">
        <NavbarAdmin />
        <main className="flex-grow overflow-y-auto">
          <div className="p-6 h-full">
            <h1 className="text-3xl font-bold mb-4">
              Welcome to the Admin Dashboard
            </h1>
            <p className="mb-6">
              Here is where you can manage your application content and
              settings.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to={"/product-admin"}
                className="relative border-b-2 border-e-2 border-blue-300 bg-white h-48 p-4 shadow rounded"
              >
                <h2 className="text-xl font-bold mb-2">Quản lý sản phẩm</h2>
                <p>Thêm, sửa, xóa, cập nhật thông tin sản phẩm</p>
                <FaHandPointRight
                  size={40}
                  className="absolute bottom-2 right-2 z-10"
                />
              </Link>
              <Link
                to={"/trademark-admin"}
                className="relative border-b-2 border-e-2 border-blue-300 bg-white h-48 p-4 shadow rounded"
              >
                <h2 className="text-xl font-bold mb-2">
                  Danh mục và thương hiệu
                </h2>
                <p>Quản lý phân loại các mặt hàng, thương hiệu</p>
                <FaHandPointRight
                  size={40}
                  className="absolute bottom-2 right-2 z-10"
                />
              </Link>
              <Link
                to={"/orders-admin"}
                className="relative border-b-2 border-e-2 border-blue-300 bg-white h-48 p-4 shadow rounded"
              >
                <h2 className="text-xl font-bold mb-2">Quản lý đơn hàng</h2>
                <p>
                  Cập nhật trạng thái đơn hàng đang xử lý, đã gửi, đã giao, đã
                  hủy
                </p>
                <FaHandPointRight
                  size={40}
                  className="absolute bottom-2 right-2 z-10"
                />
              </Link>
              <Link
                to={"/feedback-admin"}
                className="relative border-b-2 border-e-2 border-blue-300 bg-white h-48 p-4 shadow rounded"
              >
                <h2 className="text-xl font-bold mb-2">
                  Đánh giá và phản hồi của khách hàng
                </h2>
                <p>
                  Tổng hợp các đánh giá từ khách hàng, phản hồi và hỗ trợ khách
                  hàng
                </p>
                <FaHandPointRight
                  size={40}
                  className="absolute bottom-2 right-2 z-10"
                />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Admin;
