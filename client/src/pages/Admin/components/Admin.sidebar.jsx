// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div className="h-full basis-1/4 bg-gray-800 text-white w-2/12 p-5">
      <Link to={"/admin"}>
        <h2 className="text-2xl font-bold mb-5">Admin Panel</h2>
      </Link>
      <ul className="space-y-4">
        <li>
          <Link
            to="/product-admin"
            className="block py-2 px-3 hover:bg-gray-700 rounded"
          >
            Sản phẩm
          </Link>
        </li>
        <li>
          <Link
            to="/trademark-admin"
            className="block py-2 px-3 hover:bg-gray-700 rounded"
          >
            Danh mục và thương hiệu
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className="block py-2 px-3 hover:bg-gray-700 rounded"
          >
            Đơn hàng
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="block py-2 px-3 hover:bg-gray-700 rounded"
          >
            Phản hồi
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
