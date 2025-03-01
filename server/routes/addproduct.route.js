const express = require("express");
const router = express.Router();
const controller = require("../controllers/addproduct.controller");
const uploadImgProduct = require("../middlewares/uploadImage.middleware");

router.post("/addproduct", uploadImgProduct.array("imageFile", 10), controller);

module.exports = router;
