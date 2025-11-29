//1st ques:


let count =[];
let i=0;
while (i<5) {
    console.log(i);
    i++;
}



//2nd question



let count2 =[];
let i2=5;
while (i2>0) {
    count2.push(i2);
    i2--
}

console.log(count2);



//3rd question



let teacoll=[]
let tea

do {
    tea = prompt("enter your favouriate tea: ")

    if(tea !== "stop"){
        teacoll.push(tea)
    }
} while (tea !== "stop");



let total=0
let k=1

do {
    total +=k;
    k++
} while (k<=3);



let multipliedNumber=[]
let num=2
let element=[2,4,6]

for (let i = 0; i < element.length; i++) {
    // console.log(element[i]);
    let edit=element[i]*num
    // console.log(edit);
    multipliedNumber.push(edit)   
}

console.log(element);
console.log(multipliedNumber);

