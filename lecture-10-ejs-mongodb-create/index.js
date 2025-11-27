import express from "express";
import connectDB from "./config/db.js";
import Student from "./models/studentModel.js";

const app = express();
const PORT = 6600;
app.set("view engine", "ejs")

connectDB()

app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
    const newStudent = await Student.find({})
    return res.render("index", { newStudent })
})

app.post("/add-student", async (req, res) => {
    try {
        const data = req.body;
        const newStudent = new Student(data)
        await newStudent.save();
        return res.redirect("/")
    } catch (error) {
        console.log(error);
    }
})

app.get("/delete-student", async (req, res) => {
    try {
        const delId = req.query.deleteId
        await Student.findByIdAndDelete(delId);
        return res.redirect("/")
    } catch (error) {
        console.log(error.message);
    }
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
