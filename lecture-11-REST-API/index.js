const express = require("express");
const connectDB = require("./config/db.js");
const userRouter = require("./routers/userRouter");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT;
connectDB()

app.use("/", userRouter)

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
