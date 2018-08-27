function tamagotchi() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.Feed = function () {
        if (this.hungry === true) {
            console.log("That was yummy!");
        } else {
            console.log("No thanks, I'm full!")
        };
    };
    this.Sleep = function () {
        if (this.sleepy === true) {
            console.log("Zzzzz");
            this.sleepy = false;
            this.bored = true;
            Increaseage();
        } else {
            console.log("No way! I'm not tired");
        }
    };
    this.Play = function () {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
        } else {
            console.log("Not right now, later");
        }
    };
    this.Increaseage = function () {
        this.age += 1;
        console.log("Happy Birthday to me!")
    };
};

var dog = new tamagotchi();
dog.outside = false;
dog.bark = function () { console.log("Woof woof!") };
dog.goOutside = function () {
    if (this.outside === false) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("But we are already outside...")
    };
};
dog.goInside = function () {
    if (outside === true) {
        console.log("Do we have to?");
        outside === false;
    } else {
        console.log("I'm already inside...");
    }
}

var cat = new tamagotchi();
cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow, meow!")
};
cat.destroyFurniture = function () {
    houseCondition -= 10;
    console.log("TAKE THAT FURNITURE!");
    bored = false;
    sleepy = true;
}
