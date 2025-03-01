const express = require("express");
const router = express.Router();
const verified = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/addwish.controller");

router.put("/addwish", verified, controller);

module.exports = router;
