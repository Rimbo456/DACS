import React from "react";
import { IoMdStar } from "react-icons/io";
import Rating from "@mui/material/Rating";

const ProductRating = () => {
  const [value, setValue] = React.useState(2);
  return (
    <section class="py-4 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div class="">
          {/* <h2 class="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-8 text-center">
            Customer reviews & rating
          </h2> */}
          <div class="grid grid-cols-2 mb-11">
            <div class="col-span-1 xl:col-span-4 flex items-center w-full">
              <div class="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
                <div class="flex items-center w-full">
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    5
                  </p>
                  <IoMdStar className="ml-1 text-yellow-500" />
                  <p class="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span class="h-full w-[30%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    30
                  </p>
                </div>
                <div class="flex items-center w-full">
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    4
                  </p>
                  <IoMdStar className="ml-1 text-yellow-500" />
                  <p class="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span class="h-full w-[40%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    40
                  </p>
                </div>
                <div class="flex items-center">
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    3
                  </p>
                  <IoMdStar className="ml-1 text-yellow-500" />
                  <p class="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span class="h-full w-[20%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    20
                  </p>
                </div>
                <div class="flex items-center">
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    2
                  </p>
                  <IoMdStar className="ml-1 text-yellow-500" />
                  <p class="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span class="h-full w-[16%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    16
                  </p>
                </div>
                <div class="flex items-center">
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    1
                  </p>
                  <IoMdStar className="ml-1 text-yellow-500" />
                  <p class="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                    <span class="h-full w-[8%] rounded-[30px] bg-indigo-500 flex"></span>
                  </p>
                  <p class="font-medium text-lg py-[1px] text-black mr-[2px]">
                    8
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-1 max-xl:m-2 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
              <div class="sm:pr-3 border-gray-200 flex items-center justify-center">
                <h2 class="font-manrope font-bold text-5xl text-black text-center mb-1 mr-5">
                  4.3
                </h2>
                <div className="flex items-center flex-col">
                  <div class="flex items-center gap-3 mb-1">
                    <IoMdStar size={35} className=" text-yellow-500" />
                    <IoMdStar size={35} className=" text-yellow-500" />
                    <IoMdStar size={35} className=" text-yellow-500" />
                    <IoMdStar size={35} className=" text-yellow-500" />
                    <IoMdStar size={35} className=" text-yellow-500" />
                  </div>
                  <p class="font-normal text-lg leading-8 text-gray-400">
                    46 Ratings
                  </p>
                </div>
              </div>
              <hr className="h-[1px] bg-slate-500" />
              <div className="flex justify-center flex-col items-center mt-4">
                <h1 className="font-normal text-2xl leading-8 mb-2">
                  Đánh giá sản phẩm
                </h1>
                <Rating
                  size="large"
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <textarea className="border-2 p-2 w-full mt-2" rows={4} placeholder="Nêu cảm nghĩ của bạn.." name="" id=""></textarea>
              </div>
            </div>
          </div>
          <div class="pb-2 border-b border-gray-200 max-xl:max-w-5xl max-xl:mx-auto">
            <h4 class="font-sans font-semibold text-3xl leading-10 text-black mb-6">
              Đánh giá tích cực hữu ích nhất
            </h4>
            <div class="flex sm:items-center flex-col sm:flex-row justify-between  mb-4">
              <div class="flex items-center gap-3">
                <IoMdStar size={30} className=" text-yellow-500" />
                <IoMdStar size={30} className=" text-yellow-500" />
                <IoMdStar size={30} className=" text-yellow-500" />
                <IoMdStar size={30} className=" text-yellow-500" />
                <IoMdStar size={30} className=" text-yellow-500" />
              </div>
              <div class="flex items-center gap-3">
                <h6 class="font-semibold text-lg leading-8 text-black">
                  @john.doe
                </h6>
                <p class="font-medium text-base leading-7 text-gray-400">
                  Nov 01, 2023
                </p>
              </div>
            </div>

            <p class="font-normal text-lg leading-8 text-gray-500 ">
              I recently had the opportunity to explore Pagedone's UI design
              system, and it left a lasting impression on my workflow. The
              system seamlessly blends user-friendly features with a robust set
              of design components, making it a go-to for creating visually
              stunning and consistent interfaces.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-between pt-8  max-xl:max-w-3xl max-xl:mx-auto">
            <p class="font-normal text-lg py-[1px] text-black">46 reviews</p>
            <form>
              <div class="flex">
                <div class="relative ">
                  <div class=" absolute -left-0 px-2 top-0 py-2">
                    <p class="font-normal text-lg leading-8 text-gray-500">
                      Sort by:
                    </p>
                  </div>
                  <input
                    type="text"
                    class="block w-60 h-11 pr-4 pl-20 py-2.5 text-lg leading-8 font-medium rounded-full cursor-pointer shadow-xs text-black bg-transparent placeholder-black focus:outline-gray-200 "
                    placeholder="Most Relevant"
                  />
                  <div
                    id="dropdown-button"
                    data-target="dropdown"
                    class="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-gray-900 bg-transparent absolute right-0 top-2 pl-2 "
                    type="button"
                  >
                    <svg
                      class="ml-2"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                        stroke="#6B7280"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    id="dropdown"
                    class="absolute top-9 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Most Relevant
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          last week
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          oldest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRating;
