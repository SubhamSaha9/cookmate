require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")

const { connect } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const userRoute = require("./routes/auth");
const categoryRoute = require("./routes/category");
const recipeRoute = require("./routes/recipe");
const job = require("./utils/cron");

job.start();
app.use(express.json());
app.use(cookieParser())
app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    })
);
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

connect();
cloudinaryConnect();

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/recipe", recipeRoute);
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ...",
    });
})

app.listen(port, () => {
    console.log(`app is listening to ${port}`);
})