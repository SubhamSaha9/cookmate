const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    recipe: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recipe",
        }
    ]
});

const Favourite = mongoose.model("Favourite", favouriteSchema);
module.exports = Favourite;