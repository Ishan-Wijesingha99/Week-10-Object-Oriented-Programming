// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;

    // guard clause, if input is not valid
    if (!input) {
      throw new Error('no grade provided');
      return
    }
    
    // Return a letter grade if a number grade was passed
    if (typeof input === 'number') {

      if(input <= 100 && input >= 90) {
        return 'A'
      } else if(input < 90 && input >= 80) {
        return 'B'
      }

    }
    
    // Return a range if a letter grade was passed
    if (typeof input === 'string') {
      
      if(input === 'A') {
        return '90-100'
      } else if(input === 'B') {
        return '80-89'
      }
      
    }

  };

}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
