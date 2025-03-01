const User = require("../models/user.model");
const Product = require("../models/product.model");

const removeWish = async (req, res) => {
  try {
    const { idProduct } = req.body;
    const product = await Product.findOne({ _id: idProduct });
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      {
        $pull: {
          wishlist: product._id,
        },
      },
      { new: true }
    );

    //socket
    const io = req.app.get("socketio"); // Lấy instance của socketIO từ express
    io.emit("cartUpdated", { user });
  } catch (error) {
    console.error(error);
  }
};

module.exports = removeWish;
