const express = require("express");
const router = express.Router();
const verified = require("../middlewares/verifiedToken.Middleware");
const controller = require("../controllers/removewish.controller");

router.put("/removewish", verified, controller);

module.exports = router;
