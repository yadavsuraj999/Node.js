const express = require("express")
const Course = require("../models/courseModel")
const Auth = require("../models/authModle")
const router = express.Router()

router.get("/", async(req, res) => {
    const data = await Course.find({}).populate("student", "name")
    console.log(data);
    res.render("course", {
        data
    })
})

router.post("/", async (req, res) => {
    try {
        const data = req.body

        const user = await Auth.findOne({ email: req.user.email }).select("-password")
        console.log(user);


        await Course.create({
            courseName: data.courseName,
            courseDesc: data.courseDesc,
            student: user._id
        })
        return res.redirect("/profile")
    } catch (error) {
        console.log(error);
    }
})

module.exports = router