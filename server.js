const express = require('express');
const mongoose = require("mongoose")
const dotenv = require("dotenv")


const products = require('./data/Products');
const mongoConnection = require('./config/MongoDB');

dotenv.config();

mongoConnection();
const app = express();

// load product from server

app.get("/api/products", (req,res) => 
{
    res.json(products)
})

// single product from server

app.get("/api/products/:id", (req, res) =>
{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})

app.listen(process.env.PORT || 1100 , console.log("server running ..."))