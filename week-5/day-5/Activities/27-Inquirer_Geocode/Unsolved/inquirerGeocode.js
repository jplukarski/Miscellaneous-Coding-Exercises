var geocoder = require("geocoder");


var inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "What city are you from?",
    name: "city",
  },

  {
    type: "input",
    message: "What state are you from?",
    name: "state",
  }
]).then(function (location) {
  var fullLocation = location.city + ", " + location.state



  // // Then use the Google Geocoder to geocode the address
  geocoder.geocode(fullLocation, function (err, data) {

    console.log(JSON.stringify(data, null, 2));
  });

})