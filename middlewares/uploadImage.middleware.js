const multer = require("multer");
const path = require("path");

// Cấu hình lưu trữ của Multer
const storageImgProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/src/assets/Product/"); // Thư mục lưu trữ file tải lên
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Tạo tên file mới với timestamp để tránh trùng lặp
  },
});
// Khởi tạo upload middleware với cấu hình storage
const uploadImgProduct = multer({ storage: storageImgProduct });

module.exports = uploadImgProduct;