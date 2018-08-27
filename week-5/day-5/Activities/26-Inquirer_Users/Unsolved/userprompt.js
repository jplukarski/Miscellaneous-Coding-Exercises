// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is your username?",
        name: "userName",
    },
    {
        type: "password",
        message: "What is your password?",
        name: "password",
    },
    {
        type: "checkbox",
        message: "What genres of music do you like?",
        choices: ["Rock", "Hip-hop", "Country", "EDM"],
        name: "favGenres"
    },
    {
        type: "list",
        message: "Where will you be on the weekend?",
        choices: ["Downtown", "Uptown", "In the Suburbs"],
        name: "location",
    },


])
    .then(function (inquireResponse) {
        console.log(inquireResponse);
    });