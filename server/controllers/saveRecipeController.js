const Favourite = require("../models/favourite");

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

        const savedReipe = await Favourite.findOne({ user: userId });
        if (type === "unsave" && !savedReipe) {
            return res.status(404).json({
                success: false,
                message: "No saved recipes found!",
            });
        }

        if (type === "save") {
            if (!savedReipe) {
                const newFavourite = await Favourite.create({
                    user: userId,
                    recipe: [recipeId]
                });
                return res.status(201).json({
                    success: true,
                    message: "Recipe saved successfully!",
                    data: newFavourite
                });
            } else {
                const isRecipeSaved = savedReipe.recipe.includes(recipeId);
                if (isRecipeSaved) {
                    return res.status(400).json({
                        success: false,
                        message: "Recipe already saved!",
                    });
                } else {
                    savedReipe.recipe.push(recipeId);
                    const newFavourite = await savedReipe.save();
                    return res.status(200).json({
                        success: true,
                        message: "Recipe saved successfully!",
                        data: newFavourite
                    });
                }
            }
        } else {
            const isRecipeSaved = savedReipe.recipe.includes(recipeId);
            if (!isRecipeSaved) {
                return res.status(400).json({
                    success: false,
                    message: "Recipe not found in saved recipes!",
                });
            } else {
                const updatedFavourite = await Favourite.findOneAndUpdate(
                    { user: userId },
                    { $pull: { recipe: recipeId } },
                    { new: true }
                );
                return res.status(200).json({
                    success: true,
                    message: "Recipe unsaved successfully!",
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