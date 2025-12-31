const  mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
    },
    courseDesc:{
        type:String,
        required:true,
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Auth",
        // required:true,
    },
})

const Course = mongoose.model("Course",courseSchema)

module.exports = Course