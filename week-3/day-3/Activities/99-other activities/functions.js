//create a function that subtracts two numbers
function difference(x, y) {
    return x - y;
}
console.log(difference(5, 2))


//create a function that concatenates three names with a space in betweeen
function wholeName(x, y, z) {
    return x + " " + y + " " + z
}

var first = "Joseph"
var second = "Walter"
var third = "Plukarski"

console.log(wholeName(first, second, third))

// create a function that reverses a string
function reverse(x) {
    var splitWord = x.split("");
    var reverseWord = splitWord.reverse();
    var output = reverseWord.join("");
    return x.split("").reverse().join("")
    // To do it all in one line...
    //return x.split("").reverse().join("")
}

console.log(reverse("Hello"))


