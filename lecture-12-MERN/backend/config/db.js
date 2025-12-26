const mongoose = require("mongoose");

const connectDb = async() => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("data base is connected!! ");
        })
       await mongoose.connect(process.env.MONGO_URI)

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb