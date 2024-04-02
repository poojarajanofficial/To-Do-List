var ul=document.getElementById("listcontainer")
  var input=document.getElementById("input")
 function deleteitem(event){
  event.target.parentElement.remove()
 }  

function add(){
 var listitem=document.createElement("li")
 listitem.innerHTML=input.value+ "<button onclick='deleteitem(event)'>Delete</button>"
 ul.append(listitem) 
}
