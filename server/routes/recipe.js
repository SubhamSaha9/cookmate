const express = require("express");
const { auth } = require("../middlewares/auth");
const { createRecipe, getRecipesByCategory, getAllRecipes } = require("../controllers/recipeController");
const router = express.Router();

router.post("/create-recipe", auth, createRecipe);
router.get("/category/:categoryId", auth, getRecipesByCategory);
router.get("/all-recipe", auth, getAllRecipes);
module.exports = router;