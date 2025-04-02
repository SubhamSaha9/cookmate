const express = require("express");
const { auth } = require("../middlewares/auth");
const { createCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/create-category", auth, createCategory);
// router.get("get-category");

module.exports = router;