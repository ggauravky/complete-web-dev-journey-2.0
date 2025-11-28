//while loop

let count = 0;

while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

//o/p:
//Count is: 0
//Count is: 1
//Count is: 2
//Count is: 3
//Count is: 4

//for loop

for (let i = 0; i < 5; i++) {
  console.log("i is: " + i);
}

//o/p:
//i is: 0
//i is: 1
//i is: 2
//i is: 3
//i is: 4

//looping through an array
let fruits = ["apple", "banana", "cherry"];

for (let j = 0; j < fruits.length; j++) {
  console.log("Fruit: " + fruits[j]);
}

//o/p:
//Fruit: apple
//Fruit: banana
//Fruit: cherry

/* 
1. You have an array named `teaFlavors` containing `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element in the array and store it in a variable named `firstTea`.
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];

console.log(firstTea);

//o/p:
//green tea

/*
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];

console.log(favoriteCity);  

//o/p:
//Paris