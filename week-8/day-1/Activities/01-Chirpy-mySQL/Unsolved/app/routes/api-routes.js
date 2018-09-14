// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/", function (req, res) {
    connection.query("select * from chirps;",
      function (err, data) {
        if (err) throw err;
        console.log(data);

      })
  })

  // Add a chirp


};
