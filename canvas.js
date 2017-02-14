var canv= document.getElementById("area");
var ctx= canv.getContext("2d"); 
function drawRect(e){
    ctx.fillRect(e.clientX-65,e.clientY-10,20,20);
}
canv.addEventListener("click",drawRect)

function clicked(){
	ctx.clearRect(0,0,500,500);
}
