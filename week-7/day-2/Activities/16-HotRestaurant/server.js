const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require("path");
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App is listening on Port: " + PORT);
});

app.get("/api/tables", function (req, res) {
    res.json(rez);
});

app.post("/api/reserve", function (req, res) {
    const table = req.body;
    rez.push(table);
    res.json();
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

var rez = [

];

// var wl = [

// ];





// app.get("/tables", function (req, res) {
//     return res.json(wl);
// });