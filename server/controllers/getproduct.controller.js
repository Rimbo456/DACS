const Product = require("../models/product.model");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getProduct;
