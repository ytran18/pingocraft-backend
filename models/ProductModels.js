const mongoose = require("mongoose");

const productsSchma = mongoose.Schema(
    {
        _id: 
        {
            type: Number,
            require: true,
            unique: true,
        },
        title: 
        {
            type: String,
            require: true,
        },
        image: 
        {
            type: String,
            require:true
        },
        price:
        {
            type: Array,
            require:true
        },
        minOrder: 
        {
            type: String,
            require:true,
        },
        imageList:
        {
            type: Array,
            require: true
        }
    },
    {
        timestamps: true,
    }
);

const Products = mongoose.model("Products", productsSchma);

module.exports = Products;