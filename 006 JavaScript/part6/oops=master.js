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
//truck1.start();
//truck2.start();

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

//animal1.info();
//animal2.info();


//encapsulation

class BankAccount{
    #balance=0; //private field

    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }
    getBalance(){
        return `Current balance is: ${this.#balance}`;
    }
}

let myAccount=new BankAccount();
myAccount.deposit(500);
//console.log(myAccount.getBalance());
//console.log(myAccount.#balance); //error: private field


//anbstraction


class cofeeMachine{
    start(){
        this.boilWater();
        this.brewCofee();
        console.log("Cofee is ready!");
    }
    brewCofee(){
        console.log("Brewing cofee...");
    }
    boilWater(){ //private method
        console.log("Boiling water...");
    }
}

let myCofeeMachine=new cofeeMachine();
//myCofeeMachine.start();


//polymorphism

class Bird{
    fly(){
        return "Flying high!";
    }
}

class Eagle extends Bird{
    fly(){
        return "Eagle soaring high!";
    }
}

let myBird=new Bird();
let myEagle=new Eagle();
//console.log(myBird.fly());
//console.log(myEagle.fly());


//static methods 

class calculator{
    static add(a,b){
        return a+b;
    }
}

let sum=calculator.add(5,10);
//console.log("Sum is: " + sum);


//getters and setters

class Employee{
    constructor(name, salary){
        this.name=name;
        this._salary=salary; //private variable by convention
    }
    get salary(){
        return this._salary;
    }
    set salary(newSalary){
        if(newSalary > 0){
            this._salary=newSalary;
        } else {
            console.log("Invalid salary amount");
        }
    }
}
let emp=new Employee("Gaurav",5000);
//console.log(emp.salary); //getter
emp.salary=6000; //setter
//console.log(emp.salary);