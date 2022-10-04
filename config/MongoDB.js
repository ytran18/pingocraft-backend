const mongoose = require("mongoose");

const databaseConnection = async () => 
{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology : true,
            useNewUrlParser: true,
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Error: ",err) ;
        process.exit(1);
    }
};

module.exports = databaseConnection;