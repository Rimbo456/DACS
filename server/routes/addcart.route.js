const express = require("express");
const router = express.Router();
const verified = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/addcart.controller");

router.put("/addcart", verified, controller);

module.exports = router;
