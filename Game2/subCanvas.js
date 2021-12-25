let subCanvas=document.getElementById("subCanvas");
let subCanvasCtx=subCanvas.getContext("2d");

let windowMaxWidth=window.innerWidth;
let windowMaxHeight=window.innerHeight;
if(windowMaxWidth*3>=windowMaxHeight*4){
    subCanvas.height=windowMaxHeight;
    subCanvas.width=subCanvas.height*4/3;
}else{
    subCanvas.width=windowMaxWidth;
    subCanvas.height=subCanvas.width*3/4
}

//subCanvas.fillStyle="#F00";
subCanvasCtx.fillStyle="#FFFFFF"
subCanvasCtx.fillRect(0,50,99,49);

/******************
 * 
 * 
 * 関数一覧
 * 
 * 
*******************/

let left=false;
let right=false;
let up=false;
let down=false;
function keyDown(e){
    e=e||window.event;
    console.log(e.keyCode);
    switch(e.keyCode){
        case 37:
            console.log("←");
            left=true;
            break;

        case 38:
            console.log("↑");
            up=true;
            break;

        case 39:
            console.log("→");
            right=true;
            break;

        case 40:
            console.log("↓");
            down=true;
            break;

    }
}


function keyUp(e){
    e=e||window.event;
    switch(e.keyCode){
        case 37:
            console.log("←");
            left=false;
            break;

        case 38:
            console.log("↑");
            up=false;
            break;

        case 39:
            console.log("→");
            right=false;
            break;

        case 40:
            console.log("↓");
            down=false;
            break;
            
    }
}


function clickWindow(){
    subCanvasCtx.fillStyle="#774433";
}


//ポイントの位置
let px=50;
let py=50;
let pSize=10;
function drowPoint(){
    subCanvasCtx.fillStyle="#252525"
    subCanvasCtx.fillRect(px-pSize/2,py-pSize/2,pSize,pSize);
}
function checkKey(){
    if(down===true){
        py=py+5;
    }
    if(up===true){
        py=py-5;
    }
    if(left===true){
        px=px-4;
    }
    if(right===true){
        px=px+6;
    }
    if(px<0){
        px=0;
    }else if(px>subCanvas.width){
        px=subCanvas.width;
    }
    if(py<0){
        py=0;
    }else if(py>subCanvas.height){
        py=subCanvas.height;
    }
}

let enemy=new Array;
let i=0;
function createEnemy(){
    enemy[i++]=[subCanvas.width-5,Math.floor(Math.random()*subCanvas.height),0,0]
}


function drowEnemy(){
    subCanvasCtx.fillStyle="#EE0000"
    for(i=0;enemy[i]!=null;i++){
    subCanvasCtx.fillRect(enemy[i][0],enemy[i][1],10,10);
    }
}
/******************
 * 
 * 
 * main関数
 * 
 * 
*******************/
let count=0;
function main(){
    subCanvasCtx.clearRect(0,0,subCanvas.width,subCanvas.height);
    subCanvas.addEventListener("click",clickWindow,false);
//    subCanvasCtx.fillRect(0,0,50,50);
    document.onkeydown=keyDown;
    document.onkeyup=keyUp;
    checkKey();
    drowPoint();
    if(count%30==0){
    console.log(count/30);
    createEnemy();
    }
    count++;
    drowEnemy();
    window.requestAnimationFrame(main);
}



main();