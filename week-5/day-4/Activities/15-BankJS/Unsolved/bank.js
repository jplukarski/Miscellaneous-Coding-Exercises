var fs = require("fs");

fs.readFile("./bank.txt", "utf8", function (error, data) {
    if (error) {
        return console.log(error);
    }
    var bankArray = data.split(", ");
    for (i = 0; i < bankArray.length; i++) {
        bankArray[i] = +bankArray[i];

    };
    // console.log(bankArray);
    function getTotal(total, num) {
        return total + num
    };



    var action = process.argv[2];
    var newNumber = Number(process.argv[3]);

    if (action === "total") {
        console.log("$" + bankArray.reduce(getTotal));
    } else if (action === "deposit") {
        fs.appendFile("./bank.txt", ", " + newNumber, function (error, ) {
            if (error) {
                return console.log(error);
            }

        })
    } else if (action === "withdraw") {
        fs.appendFile("./bank.txt", ", " + -Math.abs(newNumber), function (error, ) {
            if (error) {
                return console.log(error);
            }

        })
    }
});