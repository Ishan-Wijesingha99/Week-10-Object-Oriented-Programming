class Character {
  // constructor
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  // printStats() method that console logs name, strength and hit points
  printStats() {
    console.log(`${this.name} has ${this.strength} for strength and ${this.hitPoints} for hit points`)
  }

  // isAlive() method that returns a boolean based on whether or not a character's "hitpoints" are <= 0
  isAlive() {
     return this.hitPoints <= 0 ? false : true;
  }

  // attack() method that accepts an opponent object and decreases the opponent's "hitPoints" by this character's strength
  attack(opponentObject) {
    opponentObject.hitPoints = opponentObject.hitPoints - this.strength;
  }
}



// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const jimmy = new Character('Jimmy', 20, 105);



// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
jimmy.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !jimmy.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(jimmy);
    jimmy.printStats();
  } else {
    jimmy.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);
