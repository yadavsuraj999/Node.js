const bcrypt = require("bcrypt");
const Auth = require("../models/authModle");
const jwt = require("jsonwebtoken")
const webSignUp = async (req, res) => {
    try {
        const { email, password, name } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        console.log(hashedPassword);

        await Auth.create({
            name,
            email,
            password: hashedPassword
        })
        res.redirect("/login")
    } catch (error) {
        console.log(error);
    }
}

const getWebeLogin = (req, res) => {
    res.render("login")
}

const webLogin = async (req, res) => {
    try {
        const { email, password, name } = req.body

        const user = await Auth.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "email is invalid ...",
                success: false
            })
        }


        isvalid = await bcrypt.compare(password, user.password)
        console.log(isvalid);

        if (!isvalid) {
            return res.status(400).json({
                message: "Password is invalid ...",
                success: false
            })
        }

        const token = jwt.sign({
            email, name
        }, process.env.SECRET, { expiresIn: "1h" })


        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.redirect("/profile")
    } catch (error) {
        console.log(error);
    }



}

module.exports = {
    webSignUp, getWebeLogin, webLogin
}