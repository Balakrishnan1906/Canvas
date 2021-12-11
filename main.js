canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

Mouse_Event = "";

canvas.addEventListener( "mousedown" , my_mousedown );

function my_mousedown(e){
    Mouse_Event = "mousedown";
}

canvas.addEventListener( "mouseleave" , my_leave );

function my_leave(e){
    Mouse_Event = "mouseleave";
}

canvas.addEventListener( "mouseup" , my_mouseup );

function my_mouseup(e){
    Mouse_Event = "mouseup";
}

canvas.addEventListener( "mousemove" , my_mousemove );

function my_mousemove(e){
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;

if (Mouse_Event == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 8;
    ctx.moveTo(last_x , last_y);
    ctx.lineTo(x , y);
    ctx.stroke();
}
last_x = x
last_y = y
}