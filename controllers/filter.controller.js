const Product = require("../models/product.model");

const getProduct = async (req, res) => {
  try {
    const value = req.query.value;
    const products = await Product.find({ trademark: value });
    res.json(products);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getProduct;
