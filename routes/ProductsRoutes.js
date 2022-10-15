const express = require("express");
const asyncHandler = require("express-async-handler");
const Products = require("../models/ProductModels");

const productRoute = express.Router();

// GET ALL PRODUCTS

productRoute.get("/",
    asyncHandler(
        async(req, res) =>
        {
            const products = await Products.find({});
            res.json(products);
        }
    )
)

// GET SINGLE PRODUCT

productRoute.get("/:id",
    asyncHandler(
        async(req,res) =>
        {
            const product = await Products.findById(req.params.id);
            if(product)
            {
                res.json(product);
            }
            else 
            {
                res.status(404);
                throw new Error("Product not found")
            }
        }
    )
)

module.exports = productRoute;
