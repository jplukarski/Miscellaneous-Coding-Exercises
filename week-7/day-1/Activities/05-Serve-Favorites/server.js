var http = require("http");
var port = 8080;
var server = http.createServer(handleRequest);
var fs = require("fs");

server.listen(port, function () {
    console.log("Server listening on: http://localhost:" + port)
});

function handleRequest(req, res) {
    const route = req.url;

    if (route === "/") {
        displayPage("/home.html", res);
    } else if (route === "/favFoods") {
        displayPage("/favFoods.html", res)
    } else if (route === "/favMovies") {
        displayPage("/favMovies.html", res)
    } else if (route === "/favCSSFrame") {
        displayPage("favCSSFrame.html", res)
    } else {
        displayPage("/404.html", res);
    }

};


const displayPage = function (page, res) {
    fs.readFile(__dirname + "/" + page, function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);

    })
}