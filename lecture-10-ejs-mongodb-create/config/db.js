import mongoose from "mongoose";
const MONGO_URI = "mongodb://localhost:27017/studentDB";

const connectDB = () => {
    mongoose.connection.on("connected", () => {
        console.log("mongoDB connected successfully...");
    })

    mongoose.connect(MONGO_URI)
}

export default connectDB;