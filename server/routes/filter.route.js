const express = require("express");
const router = express.Router();
const controller = require("../controllers/filter.controller");

router.get("/filter", controller);

module.exports = router;
