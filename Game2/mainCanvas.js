let canvas;
canvas=document.createElement("canvas");
canvas.id="canvas";
const canvasMaxSize={w:720,h:540};
let a=window.innerWidth*3/4;
let b=a*9/16;
canvas.width=canvasMaxSize.w;
//canvas.width=a;
canvas.height=canvasMaxSize.h;
//canvas.height=b;
const jack=document.getElementById("mainCanvas");
canvas.style.border="4px solid";
canvas.style.position="relative";
canvas.style.left=(window.innerWidth-a)/2+"px";
canvas.style.top=(window.innerHeight-b)/2+"px";
let canvasCtx=canvas.getContext("2d");
let count=0;


up=false;
down=false;
left=false;
right=false;


document.getElementById("mainCanvas").appendChild(canvas);
canvas.fillStyle="#000"


/******************


main関数


******************/
function main(){
    mainCanvasDrow();

window.requestAnimationFrame(main);
}
main();
/******************


function


******************/

function mainCanvasDrow(){

    canvas.addEventListener("click", click,false);
    document.onkeydown=keyDown;
    document.onkeyup=keyUp;
    checkKey();
    window.onresize=resize;

}
//-------------------------------


function checkKey(){
    canvasCtx.clearRect(0,0,1000,1000);
    if(left===true){
        canvasCtx.fillText("←",80,100);
    }
    if(right===true){
        canvasCtx.fillText("→",120,100);
    }
    if(up===true){
        canvasCtx.fillText("↑",100,80);
    }
    if(down===true){
        canvasCtx.fillText("↓",100,120);
    }
}
function keyDown(e){
    e=e||window.event;
    console.log("keyDown:"+e.code);
    canvasCtx.clearRect(0,0,canvas.width,canvas.height);
    canvasCtx.fillText(e.code,10,10);
    console.log(e.keyCode);
    switch(e.keyCode){
        case 37:
            left=true;
            break;
        case 38:
            up=true;
            break;
        case 39:
            right=true;
            break;
        case 40:
            down=true;
            break;
    }
}
function keyUp(e){
    e=e||window.event;
    console.log("keyUp:"+e.code);
    canvasCtx.clearRect(0,0,canvas.width,canvas.height);
    canvasCtx.fillText(e.code,10,10);
    switch(e.keyCode){
        case 37:
            left=false;
            break;
        case 38:
            up=false;
            break;
        case 39:
            right=false;
            break;
        case 40:
            down=false;
            break;
    }
}

function resize(){
    canvasResize();
}
function canvasResize(){
    let a=window.innerWidth*3/4;
    let b=a*9/16;
        canvas.width=a;
        canvas.height=b;
        canvas.style.left=(window.innerWidth)/9+"px";
        canvas.style.border="4px solid"
        canvas.style.left=(window.innerWidth-a)/2+"px";
        canvas.style.top=(window.innerHeight-b)/2+"px";
        if((window.innerHeight-b)/2<0){
            canvas.style.top=0;
        }
    
}