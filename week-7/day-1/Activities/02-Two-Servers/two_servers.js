var http = require("http");

var port1 = 7000;

var port2 = 7500;

function handleRequest(request, response) {
    response.end("You are such a QT3.14" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(port1, function () {

    console.log("Server listening on: http://localhost:" + port1);
});

function handleSecondRequest(request, response) {

    response.end("You are stinky!" + request.url);
}

var secondServer = http.createServer(handleSecondRequest);

secondServer.listen(port2, function () {

    console.log("Server listening on: http://localhost:" + port2);
});