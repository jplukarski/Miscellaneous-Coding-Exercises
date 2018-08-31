var inquirer = require("inquirer");

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "greatbay_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
})

function start() {
    inquirer.prompt([
        {
            type: "list",
            choices: ["Post", "Bid"],
            message: "Would you like to [Post] and item or [Bid] on an auction",
            name: "action"
        }

    ]).then(function (answer) {
        if (answer.action === "Bid") {

            inquirer.prompt([
                {
                    type: "list",
                    message: "What item would you like to bid on?",
                    choices: ["item1", "item2"],
                    name: "unsold-inventory"
                },
                {
                    type: "input",
                    message: "How much would you like to bid?",
                    name: "bid"
                }
            ]).then(function (answer) {
                if (answer.bid >= 50) {
                    console.log("You won!");
                } else {
                    console.log("You lost!");
                }
            })
        } else if (answer.action === "Post") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What are you posting for auction?",
                    name: "post-item"
                },
                {
                    type: "input",
                    message: "How much do you want to sell this item for?",
                    name: "price"
                },
                {
                    type: "list",
                    message: "Which category are you selling under",
                    choices: ["Items", "Tasks", "Jobs", "Projects"],
                    name: "category"
                }
            ]).then(function (answer) {
                function createInventory(item) {
                    connection.query(
                        "insert into inventory set ?",
                        {
                            item: answer.post - item,
                            price: parseInt(answer.price),
                            category: answer.category
                        },
                        function (err, res) {
                            if (err) throw err;
                            console.log(res);
                        }
                    )
                };
                createInventory(answer)
            })
        }
    });

};