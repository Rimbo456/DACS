const express = require("express");
const router = express.Router();
const controller = require("../controllers/getproduct.controller");

router.get("/getproduct", controller);

module.exports = router;
