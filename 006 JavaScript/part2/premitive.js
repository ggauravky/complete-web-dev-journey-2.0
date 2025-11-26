let balance=120; // number
let anotherBalance=new Number(80); // number

console.log(balance)
console.log(anotherBalance)

console.log(typeof balance) // Output: number
console.log(typeof anotherBalance) // Output: object
console.log(anotherBalance.valueOf()) // Output: 80

//null and undefined
let user=null; // null
let admin; // undefined

console.log(user) // Output: null
console.log(admin) // Output: undefined

console.log(typeof user) // Output: object
console.log(typeof admin) // Output: undefined

//string
let message="Hello, World!"; // string
let anotherMessage=new String("Hello, JavaScript!"); // string

console.log(message) // Output: Hello, World!
console.log(anotherMessage) // Output: [String: 'Hello, JavaScript!']

console.log(typeof message) // Output: string
console.log(typeof anotherMessage) // Output: object
console.log(anotherMessage.valueOf()) // Output: Hello, JavaScript!

let demoOne=`value is : {2*2}`; // template literal without expression evaluation


//symbol
let sym1=Symbol("id"); // symbol
let sym2=Symbol("id"); // symbol

console.log(sym1) // Output: Symbol(id)
console.log(sym2) // Output: Symbol(id) 

console.log(sym1===sym2) // Output: false

console.log(typeof sym1) // Output: symbol