const express = require("express");
const router = express.Router();
const verified = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/getprofile.controller");

router.get("/getprofile", verified, controller);

module.exports = router;
