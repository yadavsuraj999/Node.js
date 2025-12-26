const express = require("express")
require('dotenv').config();
const cors = require("cors");
const app = express()
const PORT = process.env.PORT


const connectDb = require("./config/db.js");
const studentRouter = require("./routes/studentRoute.js");
const authRouter = require("./routes/authRoute.js");

connectDb()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",studentRouter)
app.use("/api/auth",authRouter)

app.listen(PORT,(err) => {
    if (err) {
        console.log("error is in server");
    }
    else{
        console.log(`server is running on http://localhost:${PORT}`);
    }
})