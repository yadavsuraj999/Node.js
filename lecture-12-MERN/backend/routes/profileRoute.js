const express = require("express")
const protectRoute = require("../middleware/auth")
const Auth = require("../models/authModle")
const router = express.Router()

router.get("/", (req,res) => {
    res.render("index")
})

router.get("/profile", protectRoute, async(req,res) => {
    
    const user =await Auth.findOne({email: req.user.email}).select("-password")
    console.log(user);
    
    res.render("profile" , 
        {
            user
        }
    )
})

module.exports = router