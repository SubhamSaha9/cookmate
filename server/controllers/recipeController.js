const Category = require("../models/category");
const Recipe = require("../models/recipe");
const User = require("../models/user");

exports.createRecipe = async (req, res) => {
    try {
        const { recipeName, description, ingredients, steps, calories, cookTime, serveTo, imagePrompt, image, email, category } = req.body;

        if (!recipeName || !description || !ingredients?.length || !steps?.length || !calories || !cookTime || !serveTo || !imagePrompt || !image || !email || !category.length) {
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

        const categoryList = await Promise.all(
            category.map(async (item) => {
                const category = await Category.findOne({ name: item });
                return category._id;
            })
        );

        console.log("categoryList", categoryList);

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
            category: categoryList,
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

exports.getRecipesByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;

        if (!categoryId) {
            return res.status(400).json({
                success: false,
                message: "Category is required!",
            })
        };

        const item = await Category.findById(categoryId);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Category not found!",
            })
        }

        const filteredRecipes = await Recipe.find({ category: categoryId }).sort({ createdAt: -1 });

        if (!filteredRecipes.length) {
            return res.status(404).json({
                success: false,
                message: "No recipes found for this category!",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Recipes fetched successfully",
            data: filteredRecipes,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({}).populate("category").sort({ createdAt: -1 });

        if (!recipes.length) {
            return res.status(404).json({
                success: false,
                message: "No recipes found!",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Recipes fetched successfully",
            data: recipes,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}