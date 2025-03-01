const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
  number: { type: String },
  address: { type: String },
  wishlist: [
    {
      type: String,
      ref: "Product",
    },
  ],
  cart: [
    {
      item: {
        type: String,
        ref: "Product",
      },
      quantity: { type: Number },
    },
  ],
  order: [
    {
      id: Number,
      price: Number,
      payMeth: Number,
      products: [],
      createAt: {
        type: Date,
        default: Date.now, // Lưu ngày giờ hiện tại khi tạo đối tượng
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
