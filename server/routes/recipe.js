const express = require("express");
const { auth } = require("../middlewares/auth");
const { createRecipe, getRecipesByCategory, getAllRecipes, getRecipesByUser } = require("../controllers/recipeController");
const router = express.Router();

router.post("/create-recipe", auth, createRecipe);
router.get("/category/:categoryId", auth, getRecipesByCategory);
router.get("/all-recipe", auth, getAllRecipes);
router.get("/user-recipe", auth, getRecipesByUser);
module.exports = router;