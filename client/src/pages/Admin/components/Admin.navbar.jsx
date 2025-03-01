// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarAdmin = () => {
  const navigation = useNavigate();

  const handleLogout = () => {
    // Logic to handle logout
    navigation("/login");
    localStorage.removeItem("token");
  };

  return (
    <div className="bg-indigo-600 h-16 flex items-center justify-between px-5 shadow">
      <div className="text-lg font-bold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            navigation("/");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Store
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
