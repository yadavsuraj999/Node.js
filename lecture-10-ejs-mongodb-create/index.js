import express from "express";
import connectDB from "./config/db.js";
import Student from "./models/studentModel.js";

const app = express();
const PORT = 6600;
app.set("view engine", "ejs")

connectDB()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.render("index")
})

app.post("/add-student", async (req, res) => {
    console.log(req.body);
    const data = req.body;
    const newStudent = new Student(data)
    await newStudent.save();
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
