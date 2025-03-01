const express = require("express");
const router = express.Router();
const controller = require("../controllers/getdetail.controller");

router.get("/getdetail/:id", controller);

module.exports = router;
