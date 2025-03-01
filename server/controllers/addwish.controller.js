const User = require("../models/user.model");
const Product = require("../models/product.model");

const addWish = async (req, res) => {
  try {
    const { idProduct } = req.body;
    console.log(req.user);
    const product = await Product.findOne({ _id: idProduct });
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      {
        $addToSet: {
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

module.exports = addWish;
