const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    ingredients: [
        {
            ingredient: {
                type: String,
                trim: true,
                required: true,
            },
            icon: {
                type: String,
                trim: true,
                required: false,
            },
            quantity: {
                type: String,
                trim: true,
                required: true,
            },
        }
    ],
    steps: [
        {
            type: String,
            trim: true,
            required: true,
        }
    ],
    calories: {
        type: Number,
        required: true,
    },
    cookTime: {
        type: Number,
        required: true,
    },
    serveTo: {
        type: Number,
        required: true,
    },
    imagePrompt: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
        required: false,
    },
    userId: {
        type: String,
        required: true,
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        }
    ]
}, { timestamps: true });

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;