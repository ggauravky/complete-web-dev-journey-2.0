let car={
    name:"BMW",
    model:"2020",
    start: function(){
        console.log(this.name + " " + this.model + " is starting.");
    }
}

//console.log(car.start());

function Bike(name, model){
    this.name=name;
    this.model=model;
}

let bike1=new Bike("Bucati","2019");
let bike2=new Bike("Harley","2021");

//console.log(bike1.name);
//console.log(bike2);

function Truck(name, model){
    this.name=name;
    this.model=model;
}

Truck.prototype.start=function(){
    console.log(this.name + " " + this.model + " is starting.");
}

Array.prototype=new Truck();

let truck1=new Truck("Ford","2018");
let truck2=new Truck("Chevrolet","2022");
truck1.start();
truck2.start();

class Animal{
    constructor(name, species){
        this.name=name;
        this.species=species;
    }
    info(){
        console.log(this.name + " is a " + this.species);
    }
}

let animal1=new Animal("Leo","Lion");
let animal2=new Animal("Molly","Cat");

animal1.info();
animal2.info();