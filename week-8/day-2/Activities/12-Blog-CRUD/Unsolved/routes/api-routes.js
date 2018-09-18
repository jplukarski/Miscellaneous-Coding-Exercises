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

  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    db.Post.findAll({}).then(function (results) {
      res.json(results);
    })
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function (req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    }).then(function (results) {
      res.json(results);
    })
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    db.Post.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    })

  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(function (results) {
      res.json(results);
    })
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.end();
    })
  });

  // PUT route for updating posts
  app.put("/api/posts", function (req, res) {
    db.Post.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (results) {
      res.end();
    })
  });
};
