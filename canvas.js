var canv= document.getElementById("area");
var ctx= canv.getContext("2d"); 
function drawRect(e){
    canv.fillRect(e.getX(),e.getY(),20,20);
}
canv.addEventListener("click",drawRect)

var button=document.get
