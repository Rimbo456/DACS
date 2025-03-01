const express = require("express");
const router = express.Router();
const middlewares = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/editinfor.controller");

router.put("/editinfor", middlewares, controller);

module.exports = router;
