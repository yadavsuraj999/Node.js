const express = require("express");
const getUser = require("../controllers/usercontroller");
const User = require("../models/studentModel")
const router = express.Router();

router.get("/", getUser)
router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body
        const newUser = await User.create(data)
        return res.status(201).json({
            message: "user added successfully... ",
            status: true,
            user: newUser
        })
    } catch (error) {
        res.json({
            message: error,
            status: false
        })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const data = req.body;
        console.log(req.params.id);
        const updateId = req.params.id;
        await User.findByIdAndUpdate(updateId, data, { new: true });
        return res.status(200).json({
            message: "user update successfully..",
            status: true,
            user: User
        })
    } catch (error) {
        res.json({
            message: error,
            status: false,
        })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deleteId = req.params.id
        const data = await User.findByIdAndDelete(deleteId);
        return res.status(200).json({
            message: "user deleted successfully...",
            data: data,
            status: true
        })
    } catch (error) {
        res.json({
            message: error,
            status: false,
        })
    }

})

module.exports = router