import React from "react";
import SidebarAdmin from "./components/Admin.sidebar";
import NavbarAdmin from "./components/Admin.navbar";

const TradeMarkAdmin = () => {
  const trademarkMale = [
    {
      name: "Rolex",
      amount: 10,
    },
    {
      name: "Omega",
      amount: 10,
    },
    {
      name: "Panerai",
      amount: 10,
    },
    {
      name: "Tudor",
      amount: 10,
    },
    {
      name: "Citizen",
      amount: 10,
    },
    {
      name: "Casio",
      amount: 10,
    },
  ];
  const trademarkFemale = [
    {
      name: "Chanel",
      amount: 10,
    },
    {
      name: "Gucci",
      amount: 10,
    },
    {
      name: "Dior",
      amount: 10,
    },
    {
      name: "Tissot",
      amount: 10,
    },
    {
      name: "Citizen",
      amount: 10,
    },
    {
      name: "Audemars Piguet",
      amount: 10,
    },
  ];
  return (
    <div className="flex h-screen">
      <SidebarAdmin />
      <div className="flex basis-3/4 flex-col">
        <NavbarAdmin />
        <div className="overflow-y-auto">
          <div className="relative p-6 h-full flex justify-between">
            <div className="w-[45%] flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold mb-2">Đồng hồ nam</h1>
              <table className="w-full bg-white border border-gray-500">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-500">
                      Thương hiệu
                    </th>
                    <th className="py-2 px-4 border-b border-gray-500">
                      Số lượng tồn kho
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trademarkMale.map((product) => (
                    <tr key={product._id} className="text-center">
                      <td className="py-2 px-4 border-b border-gray-500">
                        {product.name}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-500">
                        {product.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-[45%] flex flex-col items-center justify-center">
                <h1 className="font-semibold mb-2 text-xl">Đồng hồ nữ</h1>
              <table className="w-full bg-white border border-gray-500">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-500">
                      Thương hiệu
                    </th>
                    <th className="py-2 px-4 border-b border-gray-500">
                      Số lượng tồn kho
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trademarkFemale.map((product) => (
                    <tr key={product._id} className="text-center">
                      <td className="py-2 px-4 border-b border-gray-500">
                        {product.name}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-500">
                        {product.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeMarkAdmin;
