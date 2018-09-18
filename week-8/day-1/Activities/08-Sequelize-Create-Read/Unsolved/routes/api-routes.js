// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    db.Todo.findAll({}).then(function (results) {
      res.json(results);
    })
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function (req, res) {
    console.log("New Task: ");
    console.log(req.body);

    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (results) {
      res.end();
    })

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {
    console.log(req.body.id);
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.end();
    })
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function (req, res) {

    db.Todo.update(
      { complete: req.body.complete },
      { where: { id: req.body.id } }
    ).then(function (results) {
      res.end();
    })
  });
};
