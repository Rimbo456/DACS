const User = require("../models/user.model");

const createOrder = async (req, res) => {
  try {
    const { id, price, payMeth } = req.body;
    const user = await User.findOne({ email: req.user.email });
    user.order.push({
      id: id,
      price: price,
      payMeth: payMeth,
      products: user.cart,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = createOrder;
