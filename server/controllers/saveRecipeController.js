const Recipe = require("../models/recipe");

exports.saveRecipe = async (req, res) => {
    try {
        const { recipeId, type } = req.body;
        const userId = req.user.id;
        if (!recipeId || !type) {
            return res.status(400).json({
                success: false,
                message: "Recipe ID and type are required!",
            });
        }

        const recipe = await Recipe.findById(recipeId);
        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "No recipes found with the provided recipeId!",
            });
        }
        if (type === "unsave" && !recipe.favourites.includes(userId)) {
            return res.status(404).json({
                success: false,
                message: "No saved recipes found!",
            });
        }

        if (type === "save") {
            if (!recipe.favourites.includes(userId)) {
                recipe.favourites.push(userId);
                const newFavourite = await recipe.save();
                return res.status(200).json({
                    success: true,
                    message: "Recipe saved in your CookBook successfully!",
                    data: newFavourite
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: "Recipe already saved!",
                });
            }
        } else {
            if (!recipe.favourites.includes(userId)) {
                return res.status(400).json({
                    success: false,
                    message: "Recipe not found in saved recipes!",
                });
            } else {
                const updatedFavourite = await Recipe.findOneAndUpdate(
                    { _id: recipeId },
                    { $pull: { favourites: userId } },
                    { new: true }
                );
                return res.status(200).json({
                    success: true,
                    message: "Recipe removed from CookBook!",
                    data: updatedFavourite
                });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getSavedRecipes = async (req, res) => {
    try {
        let recipes = await Recipe.find({}).lean().sort({ createdAt: -1 });

        if (!recipes.length) {
            return res.status(404).json({
                success: false,
                message: "No recipes found!",
            })
        }

        recipes = recipes.filter((recipe) => {
            const favouriteIds = recipe.favourites?.map(id => id.toString()) || [];
            if (favouriteIds.includes(req.user.id)) {
                return {
                    ...recipe,
                    favourites: undefined
                };
            }
        });
        return res.status(200).json({
            success: true,
            message: "Recipr fetched successfully!",
            data: recipes
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}