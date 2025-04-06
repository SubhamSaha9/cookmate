const Recipe = require("../models/recipe");

exports.createRecipe = async (req, res) => {
    try {
        const { recipeName, description, ingredients, steps, calories, cookTime, serveTo, imagePrompt, image, email } = req.body;

        if (!recipeName || !description || !ingredients?.length || !steps?.length || !calories || !cookTime || !serveTo || !imagePrompt || !image || !email) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            })
        }

        const recipe = await Recipe.findOne({ recipeName: recipeName });
        if (recipe) {
            return res.status(403).json({
                success: false,
                message: "Recipe already exist into database."
            })
        }

        const newRecipe = await Recipe.create({
            recipeName,
            description,
            ingredients,
            steps,
            calories,
            cookTime,
            serveTo,
            imagePrompt,
            image,
            userId: email,
        });

        return res.status(200).json({
            success: true,
            message: "Recipe created successfully",
            data: newRecipe
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}