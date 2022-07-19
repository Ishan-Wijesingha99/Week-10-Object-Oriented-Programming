// constructor function
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// while you technically can give a method to each instance of a constructor simply by writing that method inside the constructor, this is inefficient, you'll be repeatedly redefining the same function over and over again
// instead, just add that function to the instance's prototype. That way, they get access to it through prototypal inheritance
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// adding another function to prototype of each instance that comes from Character constructor
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// adding another function to prototype of each instance that comes from Character constructor
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// adding another function to prototype of each instance that comes from Character constructor
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

// creating two instances from the Character constructor
const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

// these instances get access to these methods through prototypal inheritance
warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// will see a string in the console that contains all four stats of warrior
warrior.printStats();

// will see a string in the console that says warrior is alive
warrior.isAlive();

// will increase age, strength and hitpoints of rogue object
rogue.levelUp();

// will see a string in the console that contains all four stats of rogue
rogue.printStats();
