var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Starwars = sequelize.define("character", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
});

Starwars.sync();
module.exports = Starwars;