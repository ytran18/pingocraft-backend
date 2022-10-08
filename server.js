const express = require('express');
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const mongoConnection = require('./config/MongoDB');
const ImportData = require('./DataImport');
const productRoute = require('./routes/ProductsRoutes');

dotenv.config();

mongoConnection();
const app = express();

// api

app.use("/api/import", ImportData)

app.use("/api/products", productRoute)



app.listen(process.env.PORT || 1100 , console.log("server running ..."))