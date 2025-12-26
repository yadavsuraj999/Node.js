const express =  require("express")
const { getStudent, postStudent, getStudentById, updateStudent, deleteStudent } = require("../controller/StudentController.js")

const router = express.Router()

router
.get("/",getStudent)
.get("/:id",getStudentById)
.post("/",postStudent)
.patch("/:id",updateStudent)
.delete("/:id",deleteStudent)

module.exports = router