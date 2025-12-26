const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Auth = require("../models/authModle")
const getMessage = (req, res) => {
    res.send("Welcome to REST api...")
}

const getNewUser = async (req, res) => {
    try {
        const { email, password, name } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        console.log(hashedPassword);

        await Auth.create({
            name,
            email,
            password: hashedPassword
        })
    } catch (error) {
        console.log(error);
    }
}

const getExistingUser = async (req, res) => {
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
        },  process.env.SECRET , { expiresIn: "1h" })

        console.log(token);
        res.status(200).json(
            {
                message : "jay hind jay bhart",
                token
            }
        )
    } catch (error) {
        console.log(error);
    }



}

module.exports = { getMessage, getNewUser, getExistingUser }