// process.argv will print out any command line arguments.
console.log(process.argv);

function add(a, b, c) {
    return Number(a) + Number(b) + Number(c);
};

console.log(add(process.argv[2], process.argv[3], process.argv[4]))