// Import the parent class
const {VehicleClass} = require('./vehicle.js')



// Create a car class that extends the vehicle class
class CarClass extends VehicleClass {
  // need to pass in all the paramters into constructor that you want to access from the parent class
  // this is how you let javascript know that you want id, numberOfWheels and sound from the parent class to be accessible by this child class
  constructor(id, numberOfWheels, sound, colour, passengers) {
    
    // then, you give those parameters values using super()
    super(999, 4, 'vroom')

    // adding more variables only accesible by this child class
    this.colour = colour;
    this.passengers = passengers;
  }

  // adding more methods to child class
  useHorn() {
    console.log(`The car sound goes ${this.sound}`)
  }

  // adding more methods to child class
  checkPassengers() {
    if(this.passengers < 4) {
      console.log(`There are ${4 - this.passengers} seats left in the car`)
    } else {
      console.log(`This car only seats 4 people. You have too many passengers!`)
    }
  }

}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new CarClass(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
