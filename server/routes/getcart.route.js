const express = require("express");
const router = express.Router();
const verified = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/getcart.controller");

router.get("/getcartlist", verified, controller);

module.exports = router;