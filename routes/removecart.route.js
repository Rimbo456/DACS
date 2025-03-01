const express = require("express");
const router = express.Router();
const verified = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/removecart.controller");

router.put("/removecart", verified, controller);

module.exports = router;
