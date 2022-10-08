const express = require("express");
const products = require("./data/Products.js");
const Products = require("./models/ProductModels.js");
const asyncHandler = require("express-async-handler")

const ImportData  = express.Router();

ImportData.post("/products", asyncHandler(
    async(req, res) =>
    {
        await Products.deleteMany({});
        const importProducts = await Products.insertMany(products);
        res.send({ importProducts });
    }
));

module.exports = ImportData;