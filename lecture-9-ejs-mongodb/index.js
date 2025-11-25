const express = require("express");
const app = express();
const PORT = 6600;
const mongoose = require("mongoose")
const MONGO_URI = "mongodb://localhost:27017/"

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("Database connected successfully...");
    })
    await mongoose.connect(MONGO_URI)
}
connectDB()



app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
