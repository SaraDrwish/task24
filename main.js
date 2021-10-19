var listnames = [] ;
document.getElementById("deletebutn").onclick=function(){
var list =document.getElementById("list").value;
listnames.push(list);
var list =document.getElementById("list").value=" ";

console.log(listnames);

}