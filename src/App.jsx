import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import Register from "./pages/Register.page";
import Men from "./pages/Men.page";
import Woman from "./pages/Woman.page";
import ProductDetail from "./pages/ProductDetail.page";
import Cart from "./pages/Cart.page";
import Profile from "./pages/Profile.page";
import Admin from "./pages/Admin/Admin.page";
import ProductAdmin from "./pages/Admin/ProductAdmin.page";
import TradeMarkAdmin from "./pages/Admin/TradeMarkAdmin.page";
import { io } from "socket.io-client";
import { initiateSocketConnection } from "./utils/socketService";
import DetailOrder from "./pages/DetailOrder.page";
import Contact from "./pages/Contact.page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* user route */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dong-ho-nam" element={<Men />}></Route>
        <Route path="/dong-ho-nu" element={<Woman />}></Route>
        <Route path="/detail/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/order/:id" element={<DetailOrder />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        {/* admin route */}
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/product-admin" element={<ProductAdmin />}></Route>
        <Route path="/trademark-admin" element={<TradeMarkAdmin />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
