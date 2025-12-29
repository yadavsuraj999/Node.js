const express = require("express");
const { webSignUp, getWebeLogin, webLogin } = require("../controller/webAuthController");
const router = express.Router()

router.get("/signup" , (req,res) => {
    res.render("signup")
})

router.post("/signup", webSignUp)
router.get("/login" ,getWebeLogin)
router.post("/login",webLogin)


module.exports = router