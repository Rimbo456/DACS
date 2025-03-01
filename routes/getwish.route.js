const express = require("express");
const router = express.Router();
const verified = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/getwish.controller");

router.get("/getwishlist", verified, controller);

module.exports = router;