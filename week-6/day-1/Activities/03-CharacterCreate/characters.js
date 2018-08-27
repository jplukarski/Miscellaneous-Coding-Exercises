function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function () {
        console.log(this)
    };
    this.isAlive = function () {
        if (this.hp === 0) {
            console.log("Dead");
        } else {
            console.log("Alive");
        }
    };
    this.attack = function (attacked) {
        attacked.hp = attacked.hp - this.strength
        console.log(attacked.hp);
    };
    this.levelUp = function () {
        this.age = this.age + 1;
        this.strength = this.strength + 5;
        this.hp = this.hp + 25
        console.log(this);
    }
}

var pikachu = new Character("Pikachu", "electric rat", "M", 3, 5, 100);
var bulbasaur = new Character("Bulbasaur", "plant rabbit", "F", 2, 3, 75);

pikachu.attack(bulbasaur);
pikachu.levelUp();