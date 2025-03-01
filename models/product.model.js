const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

const productSchema = new Schema({
  _id: { type: String, default: shortid.generate },
  nameProduct: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  productType: { type: Boolean },
  trademark: { type: String },
  amount: { type: Number },
  image: { type: Array },
});

module.exports = mongoose.model("Product", productSchema);
