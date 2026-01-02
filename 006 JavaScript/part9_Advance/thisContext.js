const person={
    name:"Gaurav",
    greet(){
        console.log(`hi , I am ${this.name}`);
    },
};

person.greet()

const greetFunction=person.greet
greetFunction()