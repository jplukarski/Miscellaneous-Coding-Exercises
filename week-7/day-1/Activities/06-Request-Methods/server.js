// Dependencies
var http = require("http");
var mysql = require("mysql");
var PORT = 8080;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "company_db"
});

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Saving the request data as a variable
  var requestData = "";

  // When the server receives data...
  req.on("data", function (data) {
    console.log(data);
    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function () {
    requestData = JSON.parse(requestData);
    if (req.method === "POST") {
      connection.query("INSERT INTO EMPLOYEES SET ?", {
        name: requestData.name
      }, function (err, data) {
        console.log(data);
      });
    } else if (req.method === "DELETE") {
      connection.query("DELETE FROM EMPLOYEES WHERE ?" {
        "id": requestData.id
      }, function () { });
    }
    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", requestData);
    res.end();
  });

}

connection.connect(function (err) {
  if (err) {
    console.log("Failed to connect to database");
    throw err;
  }
  console.log("Database connection Successful 🔌");

  // Start our server
  server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});


//feelin' good feelin' great, how are you? cool