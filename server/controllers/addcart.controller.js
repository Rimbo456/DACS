const User = require("../models/user.model");
const Product = require("../models/product.model");

const addCart = async (req, res) => {
  try {
    const { idProduct, count } = req.body;
    const product = await Product.findOne({ _id: idProduct });
    const user = await User.findOne({ email: req.user.email });
    // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
    const existingItemIndex = user.cart.findIndex(
      (item) => item.item === idProduct
    );

    if (existingItemIndex !== -1) {
      // Nếu sản phẩm đã tồn tại, cập nhật số lượng
      user.cart[existingItemIndex].quantity += count;
    } else {
      // Nếu sản phẩm không tồn tại, thêm sản phẩm mới vào giỏ hàng
      user.cart.push({
        item: product._id,
        quantity: count,
      });
    }

    // Lưu thay đổi vào cơ sở dữ liệu
    await user.save();

    //socket
    const io = req.app.get("socketio"); // Lấy instance của socketIO từ express
    io.emit("cartUpdated", { user });
  } catch (error) {
    console.error(error);
  }
};

module.exports = addCart;
