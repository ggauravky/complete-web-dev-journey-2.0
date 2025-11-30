//1st

array=["green tea", "black tea", "oolong tea","chai" , "herbal tea"];
selectedTeas=[];
for (let i=0; i<array.length; i++){
    console.log("Tea Flavor: " + array[i]);
    if (array[i] === "chai"){
        console.log("chai found!");
        break;
    }
    selectedTeas.push(array[i]);
}
console.log("Selected teas: " + selectedTeas);

//2nd

array=["london", "new york", "san francisco", "tokyo","paris",  "singapore"];
visitedCities=[];

for (let i=0; i<array.length; i++){
    console.log("City: " + array[i]);
    if (array[i] === "paris"){
        console.log("paris found!");
        continue;
    }
    visitedCities.push(array[i]);
}
console.log("Visited cities: " + visitedCities);

//3rd

array=[1,2,3,4,5]
smallnum=[]
for (const i of array) {
    if (i < 4) {
        smallnum.push(i);
    }
}
console.log("Small numbers: " + smallnum);

//4th

//for-each loop
array=["red", "blue", "green", "yellow", "purple"];
favoriteColors=[];
array.forEach(color => {
    favoriteColors.push(color);
});
console.log("Favorite colors: " + favoriteColors);


//for-of loop
array=["circle", "square", "triangle", "rectangle"];
shapes=[];
for (const shape of array) {
    shapes.push(shape);
}
console.log("Shapes: " + shapes);