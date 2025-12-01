function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Gaurav"); // "Hello, Gaurav!"'

function add(a, b) {
    return a + b;
}

add =add(5, 3); // 8
console.log(add);

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

function orderTea(teatype){
    function comformOrder(){
        console.log(`Order for ${teatype} tea confirmed.`);
    }
    comformOrder();
}

orderTea("Green"); // "Order for Green tea confirmed."

const multiply = function(x, y) {
    return x * y;
}

console.log(multiply(4, 5)); // 20


//factorial

// !4 ->  4*3*2*1
function factorial(num){
    if(num == 0 || num == 1 ){
        return 1;
    }
    return num*factorial(num-1)
}

console.log(factorial(7));

//arrow function

const greet=()=>{
    return `hello everyone`
}

console.log(greet())

const calculate = (price  , quant) => {
    return price * quant;
}
console.log(calculate(22,3));

// const calculate2 = (price  , quant) => price * quant;

function makeTea(typeOfTea){}

function processTeaOrder(teaFunction){
    return teaFunction("earl gray")
}

console.log(processTeaOrder(makeTea))

//

function createTeaMaker(){
    return function(teaType){
        return `making ${teaType}`
    };
}

let teaMaker=createTeaMaker()
console.log(teaMaker("greenTea"))