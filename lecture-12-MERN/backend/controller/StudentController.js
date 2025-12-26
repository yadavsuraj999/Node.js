const Student = require("../models/studentModel.js");

const getStudent = async (req, res) => {
    try {
        const students = await Student.find({});

        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postStudent = async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body

        const newData = new Student(data)
        await newData.save()
        res.end()
    } catch (error) {
        console.log(error);
    }
}

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        console.log(id);

        let student = await Student.findByIdAndUpdate(id, data)
        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        });
        res.end()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params

        const deletedStudent = await Student.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            data: deletedStudent
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}



module.exports = {
    getStudent, postStudent, getStudentById, updateStudent, deleteStudent
}