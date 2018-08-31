var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function newFunction(str, cb) {
    console.log(str);
    cb();
}
// Write a function that runs a function argument if
// its other argument is truthy.
function anotherFunction(boo, cb) {
    if (boo === true) {
        cb()
    } else {
        console.log("Ya boo ain't true")
    }
};

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

function thirdFunction(f, v) {
    return function (v) {
        return f(v);
    }
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?




