const User = require("../models/user.model");
const Product = require("../models/product.model");

const getCart = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const listID = user.cart;
    if (!listID || listID.length === 0) {
      return res.json([]); // Return an empty list if there are no wishlist items
    }
    const list = await Promise.all(
      listID.map(async (item) => {
        const product = await Product.findOne({ _id: item.item });
        return {
          product,
          quantity: item.quantity,
        };
      })
    );
    res.json(list);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getCart;
