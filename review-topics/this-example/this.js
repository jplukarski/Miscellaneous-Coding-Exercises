console.log(this === window);

function foo() {
    console.log(this)
}

foo();

var poodle = {
    bark: function () {
        console.log("Bark");
    },
    walk: function () {
        console.log("I'm Walking")
    },
    all: function () {
        this.bark();
        this.walk();
    },

    bounce: foo
}

poodle.bark();
poodle.bounce();