const User = require("../models/user.model");
const Product = require("../models/product.model");

const getWish = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    const listID = user.wishlist;
    if (!listID || listID.length === 0) {
      return res.json([]); // Return an empty list if there are no wishlist items
    }
    const list = await Promise.all(
      listID.map((id) => Product.findOne({ _id: id }))
    );
    res.json(list);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getWish;
