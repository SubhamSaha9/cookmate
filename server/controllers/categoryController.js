const Category = require("../models/category");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const picture = req.files?.image;
        if (!name || !picture) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            })
        }

        const image = await uploadImageToCloudinary(picture, process.env.FOLDER_NAME, 1000);

        const category = await Category.create({
            name: name,
            image: image.secure_url
        });

        return res.status(200).json({
            success: true,
            message: "Category created successfully!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find({});
        if (!categories) {
            return res.status(404).json({
                success: false,
                message: "No categories found!",
            })
        }
        return res.status(200).json({
            success: true,
            data: categories,
            message: "Categories fetched successfully!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}