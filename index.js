const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const productRoute = require("./routes/product")

dotenv.config();

// database connection
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
    .then(() =>  console.log("Database Connection Succesfull"))
    .catch((err) => console.log(err))

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5500, () =>
{
    console.log("Backend server is running");
})