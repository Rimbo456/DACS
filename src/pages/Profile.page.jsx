import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Avatar, Button } from "@mui/material";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "../utils/axiosIstance";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [order, setOrder] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const edit = () => {
    setIsEdit(!isEdit);
  };

  const handleEdit = async () => {
    try {
      await axiosInstance.put("/api/editinfor", {
        name,
        number,
        address,
      });
      edit();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItemFromWishList = async (id) => {
    try {
      await axiosInstance.put("/api/removewish", { idProduct: id });
    } catch (error) {}
  };

  const location = useLocation();
  let { tabValue } = location.state || {};
  if (tabValue === undefined) {
    tabValue = 0;
  }
  //tabs
  const [value, setValue] = React.useState(tabValue);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axiosInstance.get("/api/getprofile");
        setName(res.data.userName);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setNumber(res.data.number);
        setOrder(res.data.order);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
  }, []);

  useEffect(() => {
    const getWishList = async () => {
      try {
        const res = await axiosInstance.get("/api/getwishlist");
        setWishlist(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getWishList();
  }, [wishlist]);

  return (
    <div>
      <Header></Header>
      <div className="mt-[130px] max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Thông tin người dùng */}
        <div className="flex items-center space-x-4 mb-6">
          <Avatar sx={{ width: 100, height: 100, bgcolor: "gray" }}>
            {name}
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div>
          <Box>
            <Tabs
              value={value}
              onChange={handleChangeTabs}
              aria-label="tabs example"
            >
              <Tab label="Thông tin cá nhân" />
              <Tab label="Lịch sử đơn hàng" />
              <Tab label="Yêu thích" />
            </Tabs>
            {value === 0 && (
              <div className="m-5">
                {/* Thông tin cá nhân */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Thông tin cá nhân
                  </h3>
                  <div className="w-full flex justify-end">
                    {isEdit ? (
                      <Button onClick={handleEdit} variant="contained">
                        Xác nhận
                      </Button>
                    ) : (
                      <Button onClick={edit} variant="contained">
                        Sửa thông tin
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Tên
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        disabled={isEdit ? false : true}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        disabled={isEdit ? false : true}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Địa chỉ
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        disabled={isEdit ? false : true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {value === 1 && (
              <div>
                {/* Danh sách đơn hàng */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Đơn hàng</h3>
                  <ul className="divide-y divide-gray-200">
                    {order.map((item) => (
                      <li className="py-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">
                            Đơn hàng #{item.id}
                          </p>
                          <p className="text-sm text-gray-500">
                            Ngày đặt: {item.createAt}
                          </p>
                        </div>
                        <Link
                          to={`/order/${item.id}`}
                          className="text-blue-500 hover:underline"
                        >
                          Xem chi tiết
                        </Link>
                      </li>
                    ))}
                    {/* Thêm các đơn hàng khác */}
                  </ul>
                </div>
              </div>
            )}
            {value === 2 && (
              <div>
                {/* Danh sách yêu thích */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Yêu thích</h3>
                  <ul className="grid grid-cols-2 gap-4">
                    {wishlist.map((item) => (
                      <li className="border p-4 rounded-lg flex items-center justify-between">
                        <div>
                          <Link
                            to={`/detail/${item._id}`}
                            className="text-sm font-medium hover:underline"
                          >
                            {item.nameProduct}
                          </Link>
                          <p className="text-sm text-gray-500">
                            {item.price.toLocaleString()}₫
                          </p>
                        </div>
                        <button
                          onClick={() => deleteItemFromWishList(item._id)}
                          className="text-red-500 hover:underline"
                        >
                          Xóa
                        </button>
                      </li>
                    ))}
                    {/* Thêm các sản phẩm yêu thích khác */}
                  </ul>
                </div>
              </div>
            )}
          </Box>
        </div>

        {/* Nội dung Tab */}
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
