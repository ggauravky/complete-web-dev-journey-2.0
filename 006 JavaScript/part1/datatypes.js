// here are the all data types in javascript
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let address = null; // null
let phone; // undefined
let hobbies = ["reading", "traveling", "swimming"]; // array
let person = { firstName: "John", lastName: "Doe" }; // object
let uniqueId = Symbol("id"); // symbol  // new in ES6
function greet() {
  console.log("Hello!");
} // function   
let bigNumber = 9007199254740991n; // bigint  // new in ES11

console.log(typeof name);   
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof phone);
console.log(typeof hobbies);
console.log(typeof person);
console.log(typeof uniqueId);
console.log(typeof greet);
console.log(typeof bigNumber);

// Note: In JavaScript, arrays and functions are considered objects.
// The 'null' type is considered an object due to a historical bug in JavaScript.
console.log(typeof null); // "object"