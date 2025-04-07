const express = require("express");
const { auth } = require("../middlewares/auth");
const { createRecipe, getRecipesByCategory } = require("../controllers/recipeController");
const router = express.Router();

router.post("/create-recipe", auth, createRecipe);
router.get("/:categoryId", auth, getRecipesByCategory);
module.exports = router;