const Product = require("../models/product.model");

const getDetail = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.json(product);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getDetail;
