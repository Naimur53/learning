var view =document.getElementsByClassName("author");
console.log(view);
for(var i =0;i<view.length;i++){
 var element = view[i];
 element.style.color ="red"; 
 element.innerHTML="sadi"+(i+1);
} 
document.querySelector("article .author-s").style.color =("blue");
document.querySelectorAll("article");//it will give array
document.body.style.backgroundColor="yellow"; 
//set array 
view[0].setAttribute("title","title is here js");
//insert a html element by js
var inside = document.getElementById("haha"); 
var newPragraph = document.createElement("p");//it wil create p tag
 newPragraph.innerHTML =" this is add by js";
 inside.appendChild(newPragraph);
 //insert ul il
 var ul = document.getElementById("giftList");
 var newLi = document.createElement("li");
 newLi.innerHTML="added by js";
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
 function button(){
     console.log(new Date());
 } 
//handel form js file
// there way 
 function changeBg(){
  document.body.style.backgroundColor = "red"; 
 }
 function bgchanger(){
  document.body.style.backgroundColor = "blue"; 
 }
 //one
 const jsFormIds = document.getElementById('jsFormId'); 
    jsFormIds.onclick =  changeBg;
    //if i give ()after function on onclick it will call the function bofore press button
//eventlistener
 const jsFormIds2 = document.getElementById('changeBg'); 
 jsFormIds2.addEventListener("click",bgchanger);
 //addevenlistener pro
 document.getElementById("color").addEventListener("click",function(){
     document.body.style.color = "red";
 });