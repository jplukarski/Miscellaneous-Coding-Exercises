//-Takes in two arguments
//-Looks at the first argument and decides whether its a tv show or an actor
//-If it's a show, it looks at the second argument and returns the Genre, rating, Networks and summary of that argument
//If the first argument is an actor/actress then it looks at the second argument and returns the Name, Birthday, Gender, Country
var TV = require("./tv.js");

var tv = new TV();
var cmd = process.argv[2];
var userInput = process.argv.slice(3).join(" ");
if (cmd === "show") {
    tv.findShow(userInput);

} else if (cmd === "actor") {
    tv.findActor(userInput);

}