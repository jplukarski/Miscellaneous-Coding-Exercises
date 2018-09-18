// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Starwars = require("../model/starwars.js");

module.exports = function (app) {


  app.get("/api/:characters?", function (req, res) {



  });

  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {
    console.log(req.body);

    var character = req.body;

    Starwars.create({
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    }).then(function (results) {
      console.log(results)

    }).catch(function (err) {
      res.json(err)
    })
  });
};
