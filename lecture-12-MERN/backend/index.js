const express = require("express")
const cookie = require("cookie-parser")
require('dotenv').config();
const cors = require("cors");
const app = express()
const PORT = process.env.PORT


const connectDb = require("./config/db.js");
const studentRouter = require("./routes/studentRoute.js");
const authRouter = require("./routes/authRoute.js");
const webAuthRouter = require("./routes/webAuthRouter.js");
const profileRoute = require("./routes/profileRoute.js");
const courseRouter = require("./routes/courseRoute.js");
const protectRoute = require("./middleware/auth.js");

connectDb()
app.set("view engine", "ejs");
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookie())
app.use("/course",protectRoute,courseRouter)
app.use("/api",studentRouter)
app.use("/auth",webAuthRouter)
app.use("/", profileRoute)
app.use("/api/auth",authRouter)

app.listen(PORT,(err) => {
    if (err) {
        console.log("error is in server");
    }
    else{
        console.log(`server is running on http://localhost:${PORT}`);
    }
})