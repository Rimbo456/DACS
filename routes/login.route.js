const express = require("express");
const router = express.Router();
const controller = require("../controllers/login.controller");
const middleware = require("../middlewares/login.middleware.js");

router.post("/login", middleware, controller);

module.exports = router;
