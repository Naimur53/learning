var view =document.getElementsByClassName("author");
console.log(view);
for(var i =0;i<view.length;i++){
 var element = view[i];
 element.style.color ="red"; 
 element.innerHTML="sadi"+(i+1);
}
 