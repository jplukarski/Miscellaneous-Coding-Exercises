var a = process.argv[2];
var b = process.argv[3];



function pCheck(x, y) {
    if (x === y) {
        console.log("Same");
    }
    else { console.log("Not Same"); }
};

pCheck(a, b);