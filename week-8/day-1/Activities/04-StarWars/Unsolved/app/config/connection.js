// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package

var Sequelize = require("sequelize");

// Setting up our connection information

var sequelize = new Sequelize("starwars", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exporting our connection
module.exports = sequelize;