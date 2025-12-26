const express = require("express");
const app = express();
require("dotenv").config()
const connectDB = require("./config/db.js");
const userRouter = require("./routers/userRouter");
const PORT = process.env.PORT;
connectDB()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", userRouter)


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
