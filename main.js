var view = document.getElementsByClassName("author");
console.log(view);
for (var i = 0; i < view.length; i++) {
    var element = view[i];
    element.style.color = "red";
    element.innerHTML = "sadi" + (i + 1);
}
document.querySelector("article .author-s").style.color = ("blue");
document.querySelectorAll("article");//it will give array
document.body.style.backgroundColor = "yellow";
//set array 
view[0].setAttribute("title", "title is here js");
//insert a html element by js
var inside = document.getElementById("haha");
var newPragraph = document.createElement("p");//it wil create p tag
newPragraph.innerHTML = " this is add by js";
inside.appendChild(newPragraph);
//insert ul il
var ul = document.getElementById("giftList");
var newLi = document.createElement("li");
newLi.innerHTML = "added by js";
ul.appendChild(newLi);
//find chiled  or parent  div 
var chiled = document.getElementById("giftList").childNodes;
console.log(chiled);
var parent = document.getElementById("giftList").parentNode;
console.log(parent);
parent.style.color = 'white';
// remove elemant 
var remove = document.getElementById("giftList");
remove.remove();
// handel button 
function button() {
    console.log(new Date());
}
//handel form js file
// there way 
function changeBg() {
    document.body.style.backgroundColor = "red";
}
function bgchanger() {
    document.body.style.backgroundColor = "blue";
}
//one
const jsFormIds = document.getElementById('jsFormId');
jsFormIds.onclick = changeBg;
//if i give ()after function on onclick it will call the function bofore press button
//eventlistener
const jsFormIds2 = document.getElementById('changeBg');
jsFormIds2.addEventListener("click", bgchanger);
//addevenlistener pro
document.getElementById("color").addEventListener("click", function () {
    document.body.style.color = "red";
});


// lets make a event bubble
//  document.getElementById("containers").addEventListener("click",function(){
//     console.log("its click container");
// })
// //ul 
// document.getElementById("first").addEventListener("click",function(){
//     console.log("its click on first ");  
// })
// // li 
// document.getElementById("lorem").addEventListener("click",function(){
//     console.log("its click lorem"); 
//     event.stopPropagation();//it will stop bubble event
//     //event.stopImmediatePropagation(); it will stop all bubble event
// })


// remove item on click
// var items = document.getElementsByClassName("item");
// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     element.addEventListener("click",function(){
//         console.log(this,event.target.innerText,event.target.parentNode); //it wil show the item and value 
//         //console.log("ele",element.parentNode);
//         event.target.parentNode.removeChild(event.target);
//     })
// }


//add new element by click
document.getElementById("addNew").addEventListener("click", function () {
    var addNewItem = document.createElement("li");
    addNewItem.innerText = "adaddfdf";
    document.getElementById("first").appendChild(addNewItem);
})
// best way to remove add element and default element
document.getElementById("first").addEventListener("click", function () {
    console.log(this, event.target);// "this" will grap the main parent and event.target will grape whick element i have click
    event.target.parentNode.removeChild(event.target);
})

// next event js  
const inputCon = document.getElementById('delete');
const deleteBtn = document.getElementById("delete-btn");
inputCon.addEventListener("focus", function () {
    document.body.style.backgroundColor = "red";

})

inputCon.addEventListener("input", function (event) {
    console.log(event.target.value);
    console.log(event.target.value.length);
    if (event.target.value == "delete") {
        deleteBtn.removeAttribute("disabled");
    }
    else {
        deleteBtn.setAttribute("disabled", true);
    }
})


inputCon.addEventListener("blur", function () {
    document.body.style.backgroundColor = "#fff";
})

//event bubble
document.getElementById("ul-container").addEventListener("click", function (event) {
    event.target.style.backgroundColor = "red";
    console.log(event.target.innerText);
})
// document.getElementById("first-Element").addEventListener("click", function (soyabs) {
//     console.log(document.getElementById("first-Element").innerText);
//     soyabs.stopPropagation();
// })
// document.getElementById("first-Element").addEventListener("click", function (e) {
//     console.log("fast  click");
//     e.stopPropagation()
// })
// document.getElementById("first-Element").addEventListener("click", function (e) {
//     console.log("fast  click");
//     e.stopPropagation()
// })
// document.getElementById("first-Element").addEventListener("click", function (e) {
//     console.log("fast  click");
//     e.stopPropagation()
// })

// event deleget 
// const adding = document.getElementById("adding");
// const heyContainer = document.getElementById("hey-container");
// heyContainer.addEventListener("click", function (e) {
//     e.target.remove();

// })
// function hi() {
//     const newDiv = document.createElement("div");
//     newDiv.innerText = "hmm";
//     heyContainer.appendChild(newDiv);
// }

// amader section
// const imgContainer = document.getElementById("img-container");
// imgContainer.addEventListener("dblclick", function (e) {
//     e.target.style.display = "none";
//     document.getElementById("secondImg").style.display = "block"
// })
// function justClick(first) {
//     if (first == "first") {
//         document.getElementById("firstImg").style.display = "none";
//         document.getElementById("secondImg").style.display = "block";
//     }
//     else if (first == "secondImg") {
//         document.getElementById("firstImg").style.display = "block";
//         document.getElementById("secondImg").style.display = "none";
//     }

// }
// //soyab code
// document.getElementById("firstImg").addEventListener("click",function()), function () {
//     console.log()
// });
// console.log();

// // amar code 
// const sadis = document.getElementsByClassName("secondImg");
// console.log(document.getElementsByClassName("secondImg"));
// sadis[0].style.display = 'none';
// sadis[1].style.display = 'none';
// for (let sadi = 0; sadi < sadis.length; sadi++) {
//     const element = sadis[sadi];
//     element.style.display = "none";
// } 