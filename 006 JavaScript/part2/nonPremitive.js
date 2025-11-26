//objects

let obj1 = {}
console.log(typeof obj1) // Output: object
console.log(obj1);

let username = {
    name: "John",
    "second name": "Doe",
    age: 30,
    isAdmin: true
}

console.log(typeof username) // Output: object
console.log(username); 

console.log(username.name); // Accessing property
console.log(username["isAdmin"]); // Accessing property
console.log(username["age"]); // Accessing property
console.log(username["second name"]); // Accessing property with space in key

let today = new Date();
console.log(today);
console.log(typeof today) // Output: object

//arrays
let arr1 = [];
console.log(typeof arr1) // Output: object
console.log(arr1);

let fruits = ["Apple", "Banana", "Orange"];
console.log(typeof fruits) // Output: object
console.log(fruits);

console.log(fruits[0]); // Accessing element
console.log(fruits[1]);

console.log(fruits.length); // Length of array

console.log(1+"1"); // Output: 11 (string concatenation due to type coercion)

let isTrue = true;
console.log(1+isTrue); // Output: 2 (true is coerced to 1)

let isvalue="323awd"
console.log(Number(isvalue)); // Output: NaN (not a valid number)
console.log(typeof NaN); // Output: number

console.log(Number(null)); // Output: 0
console.log(Number(undefined)); // Output: NaN