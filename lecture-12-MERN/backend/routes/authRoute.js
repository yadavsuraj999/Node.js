const express = require("express")
const { getMessage, getNewUser, getExistingUser } = require("../controller/authController")
const Auth = require("../models/authModle")
const router = express.Router()

router.get("/", getMessage)
router.post("/signup", getNewUser)
router.post("/signin", getExistingUser)

module.exports = router