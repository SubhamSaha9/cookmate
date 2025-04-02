const express = require("express");
const { auth } = require("../middlewares/auth");
const { createCategory, getAllCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/create-category", auth, createCategory);
router.get("/get-categories", auth, getAllCategory);

module.exports = router;