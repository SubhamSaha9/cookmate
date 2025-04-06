const express = require("express");
const { auth } = require("../middlewares/auth");
const { createRecipe } = require("../controllers/recipeController");
const router = express.Router();

router.post("/create-recipe", auth, createRecipe);
module.exports = router;