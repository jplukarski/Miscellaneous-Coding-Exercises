var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
};
Player.prototype.goodGame = function () {
    var coinFlip = Math.floor((Math.random() * 2) + 1);
    if (coinFlip === 1) {
        this.offense++
    } else if (coinFlip === 2) {
        this.defense++
    }
};
Player.prototype.badGame = function () {
    var coinFlip = Math.floor((Math.random() * 2) + 1);
    if (coinFlip === 1) {
        this.offense--
    } else if (coinFlip === 2) {
        this.defense--
    }
};
Player.prototype.printStats = function () {
    // Every player has it's own name and position
    console.log("Name: " + this.name + '\n' + "Position: " + this.position)

    // Players on a team have a same offense and defense
    console.log("Offense: " + this.offense + '\n' + "Defense: " + this.defense + '\n')
};

var playerMakerCount = 0;
var allPlayers = []

var createPlayer = function () {
    if (playerMakerCount < 3) {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the player's name",
            },
            {
                type: "list",
                name: "position",
                message: "Are they a starter or a sub?",
                choices: ["starter", "sub"]
            },
            {
                type: "list",
                name: "offense",
                message: "How good is their offense?",
                choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
            {
                type: "list",
                name: "defense",
                message: "How good is their defense?",
                choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
            },
        ]).then(function (answers) {
            var newPlayer = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense))
            allPlayers.push(newPlayer);
            playerMakerCount++
            createPlayer();

        });

    } else {
        for (i = 0; i < allPlayers.length; i++) {
            allPlayers[i].printStats();
        }
    }
};

createPlayer();

var gameCount = 0;
var playGame = function () {
    if (gameCount < 5) {
        var coinA = Math.floor((Math.random() * 20) + 1);
        var coinB = Math.floor((Math.random() * 20) + 1);
        gameCount++
    }
};