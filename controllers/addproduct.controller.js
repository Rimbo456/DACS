const express = require("express");
const Product = require("../models/product.model");

const addProduct = async (req, res) => {
  const {
    nameProduct,
    priceProduct,
    desProduct,
    gender,
    trademark,
    amountProduct,
  } = req.body;
  const fileList = [];
  req.files.forEach((element) => {
    const fileName = element.filename;
    fileList.push(fileName);
  });
  const newProduct = new Product({
    nameProduct: nameProduct,
    price: priceProduct,
    description: desProduct,
    productType: gender,
    trademark: trademark,
    amount: amountProduct,
    image: fileList,
  });
  await newProduct.save();
};

module.exports = addProduct;
