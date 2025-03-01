import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import background from "../assets/background/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axiosInstance from "../utils/axiosIstance";

const Login = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/login", { email, password });
      if (res.data.err === false) {
        localStorage.setItem("token", res.data.token);
        setIsSuccess(res.data.err);
        setIsLogin(res.data.message);
        setTimeout(() => {
          navigation("/");
        }, 1000);
      } else {
        setIsSuccess(res.data.err);
        setIsLogin(res.data.message);
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
      <section className="dark:bg-gray-900 relative">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-20 mr-2" src={logo} alt="logo"></img>
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <TextField
                    placeholder="name@company.com"
                    size="medium"
                    className="w-full"
                    label="Email"
                    error={!isSuccess ? false : true}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    placeholder="••••••••"
                    type="password"
                    size="medium"
                    className="w-full"
                    label="Password"
                    error={!isSuccess ? false : true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div
                  className={`${
                    !isSuccess ? `text-green-500` : `text-red-500`
                  }`}
                >
                  {isLogin}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      ></input>
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full"
                  size="large"
                  variant="contained"
                >
                  Sign in
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/register"}
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
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

export default Login;
