import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import { motion, transform } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { IoMdHeartEmpty } from "react-icons/io";
import Badge from "@mui/material/Badge";
import axiosInstance from "../utils/axiosIstance";
import { MdOutlineShoppingCart } from "react-icons/md";
import { io } from "socket.io-client";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isClickMenu, setIsClickMenu] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [cartlist, setCartList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [effect, setEffect] = useState(false);
  const navigation = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    navigation("/profile", { state: { tabValue: 0 } });
  };

  const handleLogout = () => {
    // Logic to handle logout
    navigation("/login");
    localStorage.removeItem("token");
  };

  const onClickMenu = () => {
    setIsClickMenu(!isClickMenu);
  };

  const dropdownVariants = {
    open: {
      scale: 1,
      transition: {
        delay: 0.15,
      },
    },

    closed: {
      scale: 0,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  useEffect(() => {
    const getWishList = async () => {
      try {
        const resWish = await axiosInstance.get("/api/getwishlist");
        setWishlist(resWish.data);
        const resCart = await axiosInstance.get("/api/getcartlist");
        setCartList(resCart.data);
      } catch (error) {
        console.error(error);
      }
    };
    getWishList();
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("cartUpdated", (data) => {
      setCartList(data.user.cart);
      setWishlist(data.user.wishlist);
      setEffect(true);
      setTimeout(() => {
        setEffect(false);
      }, 1000);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axiosInstance.get("/api/getprofile");
        if (res.data.admin === true) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkAdmin();
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="flex flex-wrap place-items-center w-full">
        <section className="relative mx-auto w-full">
          <nav className="flex justify-between bg-zinc-800 text-white w-full">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                <img className="size-14" src={logo} alt="logo" />
              </a>

              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link to={"/"} className="hover:text-gray-200" href="#">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dong-ho-nam"}
                    className="hover:text-gray-200"
                    href="#"
                  >
                    Đồng hồ nam
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dong-ho-nu"}
                    className="hover:text-gray-200"
                    href="#"
                  >
                    Đồng hồ nữ
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="hover:text-gray-200"
                    href="#"
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>

              <div className="hidden xl:flex items-center space-x-5">
                <a className="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>

                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <Link
              to={"/profile"}
              state={{ tabValue: 2 }}
              className="xl:hidden flex mr-6 items-center"
              href="#"
            >
              <Badge badgeContent={wishlist.length} color="error">
                <motion.div
                  animate={
                    effect ? { scale: [1, 1.5, 1, 1.5, 1] } : { scale: 1 }
                  }
                >
                  <IoMdHeartEmpty size={28} />
                </motion.div>
              </Badge>
              {/* <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span> */}
            </Link>

            <Link
              to={"/cart"}
              className="xl:hidden flex mr-6 items-center"
              href="#"
            >
              <Badge badgeContent={cartlist.length} color="error">
                <motion.div
                  animate={
                    effect ? { scale: [1, 1.5, 1, 1.5, 1] } : { scale: 1 }
                  }
                >
                  <MdOutlineShoppingCart size={28} />
                </motion.div>
              </Badge>
            </Link>
            <motion.a
              className={` rounded-t-md navbar-burger self-center mr-10 xl:hidden`}
              href="#"
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <IconButton
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <Avatar onClick={onClickMenu} sx={{ bgcolor: "gray" }}>
                  N
                </Avatar>
              </IconButton>
              <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>
                  <Typography>Profile</Typography>
                </MenuItem>
                <MenuItem
                  disabled={isAdmin ? false : true}
                  onClick={() => {
                    navigation("/admin");
                  }}
                >
                  <Typography>Admin Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography>Logout</Typography>
                </MenuItem>
              </Menu>
            </motion.a>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Header;
