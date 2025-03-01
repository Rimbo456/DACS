const express = require("express");
const router = express.Router();
const verified = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/createorder.controller");

router.put("/order", verified, controller);

module.exports = router;
