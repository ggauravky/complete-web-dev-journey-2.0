function greet(name){
    return "Hello, " + name + "!";
}
//console.log(greet("Gaurav")); // Output: Hello, Gaurav!

function Person(name, age){
    this.name = name;  // Assign the name parameter to the name property -> let Name = name;
    this.age = age;    // Assign the age parameter to the age property
}

function car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new car("Toyota", "Corolla", 2020);
//console.log(myCar.make); // Output: Toyota
//console.log(myCar.model); // Output: Corolla
//console.log(myCar.year); // Output: 2020

//console.log(myCar); // Output: car { make: 'Toyota', model: 'Corolla', year: 2020 }

function Tea(type){
    this.type = type;
    this.describe = function(){
        return "This is a cup of " + this.type + " tea.";
    }
}

let myTea = new Tea("Green");
//console.log(myTea.describe()); // Output: This is a cup of Green tea.

function animal(species, sound){
    this.species = species;
    this.sound = sound;
}

animal.prototype.makeSound = function(){
    return this.sound + "!";
}

let dog = new animal("Dog", "Woof");
console.log(dog.makeSound()); // Output: Woof!
let cat = new animal("Cat", "Meow");
console.log(cat.makeSound()); // Output: Meow!


function drink(beverage){
    if(!new.target){
        throw new Error("drink function must be called with 'new'");
    }
}