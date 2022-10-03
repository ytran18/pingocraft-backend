const mongoose = require("mongoose");

// const ProductSchema = new Schema(
//   {
//     // id: { type: String, required: true, unique: true },
//     // title: { type: String, required: true, },
//     // price: { type: Number, required: true },
//     // minOrder: { type: Number, required:true },
//     // image: { type: String, required:true }
    
//     id: String,

//   },
//   { timestamps: true }
// );

const ProductSchema = new mongoose.Schema({
    id: String,
},{ timestamps: true })

module.exports = mongoose.model("Product", ProductSchema);