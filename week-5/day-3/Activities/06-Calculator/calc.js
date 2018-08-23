var action = process.argv[2];
var firstNum = Number(process.argv[3]);
var secondNum = Number(process.argv[4]);

function addInputs(x, y) {
    if (action === "add") {
        console.log(firstNum + secondNum);
    } else if (action === "subtract") {
        console.log(firstNum - secondNum);
    } else if (action === "multiply") {
        console.log(firstNum * secondNum);
    } else if (action === "divide") {
        console.log(firstNum / secondNum);
    } else if (action === "remainder") {
        console.log(firstNum % secondNum);
    }
}

addInputs(firstNum, secondNum);