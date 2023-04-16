var mouseEvent="empty";
var lx,ly;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="balck";
width=1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    cmx=e.clientX - canvas.offsetLeft;
    cmy=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cmx,cmy);
        ctx.stroke();
    }
    lx=cmx;
    ly=cmy;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}