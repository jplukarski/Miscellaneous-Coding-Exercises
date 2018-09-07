var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function noise() {
        if (this.raining === true) {
            console.log(dogs.noise);
        }
    },
};

var cats = {
    raining: true,
    noise: "Meow!",
    makeNoise: function noise() {
        if (this.raining === true) {
            console.log(cats.noise);
        }
    },
}

dogs.makeNoise();
cats.makeNoise()

function() myFunction(){
    console.log("Yes!")
}

//yes