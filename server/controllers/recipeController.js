const Category = require("../models/category");
const Recipe = require("../models/recipe");
const User = require("../models/user");

exports.createRecipe = async (req, res) => {
    try {
        const { recipeName, description, ingredients, steps, calories, cookTime, serveTo, imagePrompt, image, email, category } = req.body;

        if (!recipeName || !description || !ingredients?.length || !steps?.length || !calories || !cookTime || !serveTo || !imagePrompt || !image || !email || !category) {
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

        const categoryList = await Category.findOne({ name: category });
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
            category: categoryList._id,
        });
        const user = await User.findOne({ email: email });
        user.credits -= 1;
        await user.save();
        return res.status(200).json({
            success: true,
            message: "Recipe created successfully",
            data: newRecipe,
            credits: user.credits
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}