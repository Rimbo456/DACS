import React, { useEffect, useState } from "react";
import SidebarAdmin from "./components/Admin.sidebar";
import NavbarAdmin from "./components/Admin.navbar";
import { IoMdAddCircleOutline } from "react-icons/io";
import Button from "@mui/material/Button";
import { Autocomplete, TextField } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { MdCloudUpload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosIstance";

const ProductAdmin = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isClose, setIsClose] = useState(true);
  const [gender, setGender] = useState(null);
  const [trademarkList, setTrademarkList] = useState([]);
  const [nameProduct, setNameProduct] = useState("");
  const [desProduct, setDesProduct] = useState("");
  const [trademark, setTrademark] = useState("");
  const [priceProduct, setPriceProduct] = useState(0);
  const [amountProduct, setAmountProduct] = useState(0);
  const [products, setProducts] = useState([]);

  const onChangeGender = (e, value) => {
    if (value === "Nam") {
      setGender(true);
      setTrademarkList([
        "Rolex",
        "Omega",
        "Panerai",
        "Tudor",
        "Citizen",
        "Casio",
      ]);
    } else if (value === "Nữ") {
      setGender(false);
      setTrademarkList([
        "Chanel",
        "Gucci",
        "Dior",
        "Tissot",
        "Citizen",
        "Audemars Piguet",
      ]);
    } else {
      setGender(null);
      setTrademarkList([]);
    }
  };

  const handleClose = () => {
    setIsClose(!isClose);
  };

  const onChangeImage = (e) => {
    const files = e.target.files;
    const dataPreview = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageUrl = URL.createObjectURL(file);
      dataPreview.push(imageUrl);
    }
    setImagePreview(dataPreview);
    setImageFile(files);
  };

  //   const products = [
  //     {
  //       id: 1,
  //       name: "Sản phẩm A",
  //       trademark: "Rolex",
  //       gender: true,
  //       price: 100000,
  //       stock: 10,
  //     },
  //     { id: 2, name: "Sản phẩm B", price: 200000, stock: 5 },
  //     { id: 3, name: "Sản phẩm C", price: 150000, stock: 0 },
  //     { id: 4, name: "Sản phẩm D", price: 120000, stock: 7 },
  //   ];
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosInstance.get("/api/getproduct");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [products]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    handleClose();
    const formData = new FormData();
    formData.append("nameProduct", nameProduct);
    formData.append("priceProduct", priceProduct);
    formData.append("desProduct", desProduct);
    formData.append("gender", gender);
    formData.append("trademark", trademark);
    formData.append("amountProduct", amountProduct);
    for (let i = 0; i < imageFile.length; i++) {
      formData.append("imageFile", imageFile[i]);
    }
    try {
      const res = await axiosInstance.post("/api/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      <SidebarAdmin />
      <div className="flex basis-3/4 flex-col">
        <NavbarAdmin />
        <div className="flex-grow overflow-y-auto">
          <div className="relative p-6 h-full">
            <h1 className="text-3xl font-bold mb-4">Quản lý sản phẩm</h1>
            <p className="mb-6">
              Here is where you can manage your application content and
              settings.
            </p>
            {/* table */}
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
              <Button
                onClick={handleClose}
                sx={{ marginBottom: 3 }}
                size="large"
                variant="outlined"
                startIcon={<IoMdAddCircleOutline />}
              >
                Thêm sản phấm
              </Button>
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">ID</th>
                    <th className="py-2 px-4 border-b">Tên sản phẩm</th>
                    <th className="py-2 px-4 border-b">Giới tính</th>
                    <th className="py-2 px-4 border-b">Thương hiệu</th>
                    <th className="py-2 px-4 border-b">Giá</th>
                    <th className="py-2 px-4 border-b">Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="text-center">
                      <td className="py-2 px-4 border-b">{product._id}</td>
                      <td className="py-2 px-4 border-b">
                        {product.nameProduct}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {product.productType ? `Nam` : `Nữ`}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {product.trademark}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {product.price.toLocaleString()} ₫
                      </td>
                      <td
                        className={`py-2 px-4 border-b ${
                          product.amount === 0 ? "text-red-500" : ""
                        }`}
                      >
                        {product.amount > 0 ? product.amount : "Hết hàng"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* thêm sản phẩm */}
            <div
              className={`${
                isClose ? `hidden` : `block`
              } absolute flex justify-center items-center h-full w-full top-0 left-0`}
            >
              <div className="w-full h-full bg-black opacity-50"></div>
              <div className="absolute bg-white w-1/2 h-[97%] rounded-md">
                <form
                  className="flex gap-2 flex-col p-3 relative h-full"
                  action=""
                >
                  <div className="w-full justify-end flex">
                    <div className="p-1 text-red-500 hover:bg-red-500 hover:text-white rounded-md cursor-pointer">
                      <MdClose onClick={handleClose} className="" size={25} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <TextField
                      onChange={(e) => setNameProduct(e.target.value)}
                      label="Name Product"
                      variant="filled"
                    />
                    <TextField
                      onChange={(e) => setPriceProduct(e.target.value)}
                      type="number"
                      label="Price"
                      variant="filled"
                    />
                  </div>
                  <textarea
                    onChange={(e) => {
                      setDesProduct(e.target.value);
                    }}
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                  <div className="flex gap-2 mb-2">
                    <Autocomplete
                      disablePortal
                      disableClearable={true}
                      freeSolo={false}
                      onChange={onChangeGender}
                      id="combo-box-demo"
                      options={["Nam", "Nữ"]}
                      sx={{ width: "35%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Product Type" />
                      )}
                    />
                    <Autocomplete
                      disablePortal
                      disableClearable={true}
                      freeSolo={false}
                      onChange={(e, v) => {
                        setTrademark(v);
                      }}
                      id="combo-box-demo"
                      options={trademarkList}
                      sx={{ width: "50%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Trademark" />
                      )}
                    />
                    <TextField
                      onChange={(e) => setAmountProduct(e.target.value)}
                      type="number"
                      sx={{ width: "22%" }}
                      label="Amount"
                      variant="filled"
                    />
                  </div>
                  <Button
                    onChange={onChangeImage}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<MdCloudUpload />}
                  >
                    Thêm ảnh sản phẩm
                    <input
                      className="hidden"
                      multiple
                      accept="image/*"
                      type="file"
                    />
                  </Button>
                  {imagePreview && (
                    <ImageList
                      sx={{ width: "100%", height: 146 }}
                      cols={7}
                      rowHeight={50}
                    >
                      {imagePreview.map((item) => (
                        <ImageListItem>
                          <img src={`${item}`} loading="lazy" />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  )}
                  <Button
                    type="submit"
                    onClick={handleAddProduct}
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      right: 10,
                      width: "20%",
                    }}
                    variant="contained"
                    size="large"
                  >
                    Add
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdmin;
