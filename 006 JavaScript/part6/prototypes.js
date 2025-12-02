//prototypes -> prototypes are a way to share properties and methods between objects in JavaScript.

// Every JavaScript object has a prototype. A prototype is also an object.  

// When trying to access a property of an object, the JavaScript engine will first look for the property on the object itself. If the property is not found, it will look for the property on the object's prototype. This process continues up the prototype chain until the property is found or the end of the chain is reached (i.e., null).



let computer = {cpu:12};
let lenevo = {
    ram:16,
    __proto__:computer
};
let tomhardware = {};

// console.log(`lenevo`,lenevo.__proto__);

let generalHardware = {
    mouse:true,
    keyboard:true,
    monitor:true
};
let dell = {
    ram:8,
    __proto__:generalHardware
};

Object.setPrototypeOf(tomhardware,dell);

console.log(`tomhardware`, tomhardware);
console.log(`dell`, dell);
console.log(`lenevo`, lenevo);
console.log(`lenevo`, lenevo.ram);
console.log(`lenevo`, Object.getPrototypeOf(dell));
console.log(`generalHardware`, Object.getPrototypeOf(generalHardware));