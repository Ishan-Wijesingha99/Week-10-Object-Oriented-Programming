// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
const Developer = function(firstName, tech) {
    this.firstName = firstName;
    this.tech = tech;
}

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
Developer.prototype.introduction = function() {
    console.log(`Introducing, ${this.firstName}, they love ${this.tech}!`);
}

// TODO: Create a new object using the 'Developer' constructor
const ishanObject = new Developer('Ishan', 'JavaScript');

// TODO: Call the 'introduction()' method on the new object
ishanObject.introduction();

