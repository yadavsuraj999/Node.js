const express = require("express");
const app = express();
require("ejs")
const PORT = 6600;

app.set("view engine", "ejs")

let person = [
    {
        id: 1,
        name: "suraj",
        age: 35,
        course: "FSD"
    },
    {
        id: 2,
        name: "dev",
        age: 55,
        course: "UI/UX"
    },
    {
        id: 3,
        name: "kaushal",
        age: 65,
        course: "accountant"
    }
]

app.get("/", (req, res) => {
    return res.render("home", {
        student: person
    })
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
