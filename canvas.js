var canv= document.getElementById("area");
var ctx= canv.getContext("2d"); 
ctx.beginPath();
function drawRect(e){
    ctx.fillRect(e.offsetX,e.offsetY,20,20);
}

//canv.addEventListener("click",drawRect)

function clicked(){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
}

canv.addEventListener("click",drawCircle);

function drawCircle(e){
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.offsetX,e.offsetY,20,0,2*Math.PI);
    ctx.fill();
}
