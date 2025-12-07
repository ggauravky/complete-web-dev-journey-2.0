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

//example 6:

document.getElementById("ClickMeButton").addEventListener("mouseover",()=>{
    alert("You hovered over the button!")
})

//example 7:

document.getElementById("teaList").addEventListener("click",(event)=>{
    // console.log(event);
    if(event.target && event.target.nodeName==="LI"){
        event.target.classList.toggle("highlight")
    }
})


//example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

//example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
