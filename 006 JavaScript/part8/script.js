// alert("Hello, world!");

// const { doc } = require("firebase/firestore/lite");

//example 1:

let hold=document.getElementById("changeTextButton");
// console.log(hold);

document.getElementById("changeTextButton").addEventListener('click', ()=>{
    let para=document.getElementById("myParagraph");
    para.textContent="para is changed"
})

//example 2:

document.getElementById("highlightFirstCity").addEventListener("click",()=>{
    let cities_list=document.getElementById("citiesList")
    // console.log(cities_list);
    cities_list.firstElementChild.classList.add("highlight")
})

//example 3:

document.getElementById("changeOrder").addEventListener("click",()=>{
    let order=document.getElementById("coffeeType")
    order.textContent="Espresso"
    order.style.backgroundColor="yellow"
    order.style.padding="5px"
})

//example 4:

document.getElementById("addNewItem").addEventListener("click",()=>{
    let newitem=document.createElement("li")
    newitem.textContent="Eggs"
    document.getElementById("shoppingList").appendChild(newitem)
})

//example 5:
document.getElementById("removeLastTask").addEventListener("click",()=>{
    let tasklist=document.getElementById("taskList")
    tasklist.lastElementChild.remove()
})