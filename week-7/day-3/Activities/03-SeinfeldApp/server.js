var express = require("express");
var mysql = require("mysql");
var app = express();
var PORT = process.env.PORT || 8080

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "seinfeld_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/cast", function (req, res) {
    connection.query("select * from actors order by id",
        function (err, result) {
            var html = "<h1>Actors</h1>";
            html += "<ul>";

            for (var i = 0; i < result.length; i++) {
                html += "<li><p> ID: " + result[i].id + "</p>";
                html += "<p>Actor Name: " + result[i].name + " <p></li>";
            }
            html += "</ul>";
            res.send(html);
        })
});

app.get("/coolness-chart", function (req, res) {
    connection.query("select * from actors order by coolness_points",
        function (err, result) {
            var html = "<h1>Actors</h1>";
            html += "<ul>";

            for (var i = 0; i < result.length; i++) {
                html += "<li><p> ID: " + result[i].id + "</p>";
                html += "<p>Actor Name: " + result[i].name + " <p></li>";
            }
            html += "</ul>";
            res.send(html);
        })
});

app.get("/attitude-chart/:att", function (req, res) {

    connection.query("select * from actors where attitude = ?",
        [req.params.att],
        function (err, result) {
            var html = "<h1>Actors</h1>";
            html += "<ul>";

            for (var i = 0; i < result.length; i++) {
                html += "<li><p> ID: " + result[i].id + "</p>";
                html += "<p>Actor Name: " + result[i].name + " <p></li>";
            }
            html += "</ul>";
            res.send(html);
        })
});

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});