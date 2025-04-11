const express = require("express");
const { auth } = require("../middlewares/auth");
const { createRecipe, getRecipesByCategory, getAllRecipes, getRecipesByUser } = require("../controllers/recipeController");
const { saveRecipe, getSavedRecipes } = require("../controllers/saveRecipeController");
const router = express.Router();

router.post("/create-recipe", auth, createRecipe);
router.get("/category/:categoryId", auth, getRecipesByCategory);
router.get("/all-recipe", auth, getAllRecipes);
router.get("/user-recipe", auth, getRecipesByUser);
router.post("/save-recipe", auth, saveRecipe);
router.get("/saved-recipe", auth, getSavedRecipes);
module.exports = router;