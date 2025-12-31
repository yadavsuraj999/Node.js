const jwt = require("jsonwebtoken");
const protectRoute = (req,res,next) => {
    
    
    try {
        const data = jwt.verify(req.cookies.token, process.env.SECRET);
    console.log(data);
    req.user = data
    console.log(req.user);
    next()
    } catch (error) {
        res.redirect("auth/login")
    }

}

module.exports = protectRoute