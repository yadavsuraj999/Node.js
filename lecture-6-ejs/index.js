const colors = require("colors");
const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
     res.render("home");
});

app.get("/about", (req, res)=>{
     res.render("about")
})

app.get("/skills", (req, res)  =>  {
    res.render("skills") 
}) 

app.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log(`Server started successfully on port: http://localhost:${PORT}`.yellow);
});
