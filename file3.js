let newScreen=true;
function initial_screen(){
document.getElementById("screen").style.color="white";
document.getElementById("screen").innerHTML="mario";
newScreen=false;
}
function button(n){
if (newScreen==true){initial_screen();}
let screen=document.getElementById("screen")
screen.style.color="black";
if(screen.innerHTML=="mario"){screen.innerHTML="";}
screen.innerHTML=screen.innerHTML+n;
let expression_to_eval="";
if(screen.innerHTML[screen.innerHTML.length-1]=="="){
for(var i=0;i<screen.innerHTML.length-1;i+=1){
expression_to_eval+=screen.innerHTML[i];
}
let result=eval(expression_to_eval);
screen.innerHTML=result;
newScreen=true;
}
}