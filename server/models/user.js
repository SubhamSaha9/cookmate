const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    credits: {
        type: Number,
        default: 5,
    }
},
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;