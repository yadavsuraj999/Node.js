const User = require("../models/studentModel")

const getUser = async (req, res) => {
    try {
        const user = await User.find({})
        console.log(user);
        res.json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = getUser