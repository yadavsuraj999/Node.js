const express = require("express");
const app = express()
const fs = require("fs")
const PORT = 8000;


app.get("/", (req, res) => {
    res.send("hare krishna")
})

app.get("/about", (req, res) => {
    const user = req.query.name
    fs.appendFile("info.text", `User: ${user}\n`, () => {
        res.send(`user name ${req.query.name}`)
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})