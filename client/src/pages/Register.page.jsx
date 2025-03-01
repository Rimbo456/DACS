import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import background from "../assets/background/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axiosInstance from "../utils/axiosIstance";

const Register = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/register", {
        email,
        userName,
        password,
      });
      if (res.data.err === false) {
        setIsSuccess(true);
        setTimeout(() => {
          navigation("/login");
        }, 1000);
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigation("/");
    }
  }, []);

  return (
    <div className="relative">
      <img
        className="w-screen h-screen absolute -z-10"
        src={background}
        alt=""
      />
      <section class="dark:bg-gray-900 relative">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-14 mr-2" src={logo} alt="logo"></img>
            Flowbite
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <TextField
                    placeholder="name@company.com"
                    size="medium"
                    className="w-full"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    placeholder="abc..."
                    size="medium"
                    className="w-full"
                    label="Username"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    placeholder="••••••••"
                    type="password"
                    size="medium"
                    className="w-full"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* <button
                  type="submit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button> */}
                <div
                  className={`${
                    isSuccess === null
                      ? `hidden`
                      : `${
                          isSuccess
                            ? `block text-green-500`
                            : `block text-red-500`
                        }`
                  }`}
                >
                  {isSuccess ? "đăng nhập thành công" : "đăng nhập thất bại"}
                </div>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full"
                  size="large"
                  variant="contained"
                >
                  Register
                </Button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    href="#"
                    class="text-blue-600 font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
