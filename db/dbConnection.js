// DB Connection

const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

// function connectDB1(){
    
// }