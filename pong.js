const can = document.getElementById("plate");
const context = can.getContext("2d");
//context.fillRect(0,0,500,600,"black");
const xcenter = 200;
const ycenter = 300;
let y = 0;
let fms = 50;
let width = 500;
let height = 600;

const ball = {
    x : 250,
    y : 300,
    r : 15,
    color : "orange",
    vx : 5,
    vy : 5
}
const user = {
    x: 10,
    y: 10
}
const compu = {
    x : 470,
    y : 490
}

function draw() {
    moveBall();
    render();
}

var isRight = false;
var isLeft = true;
setInterval(draw , 1000/20);

function render() {
    drawRectangle(0,0,500,600,"black");
    drawRectangle(user.x,user.y,10,100,"orange");
    drawRectangle(compu.x,compu.y,10,100, "orange");
    drawCircle(ball.x,ball.y, ball.r,"orange");
}

function moveBall() {
   // console.log("Ball " , ball.x , ball.y);

     if(isRight !== true ) {
        ball.x = ball.x + ball.vx;
        ball.y = ball.y + ball.vy;
     } else {
        ball.x = ball.x - ball.vx;
        ball.y = ball.y - ball.vy;
     }

    if(ball.x < 0 || ball.x < ball.r) {
        ball.x += ball.vx;
    }
    if(ball.y  < 0 || ball.y < ball.r) {
        ball.y += ball.vy;
    }

    if((ball.x + ball.r) > width) {
        ball.x = ball.x - ball.r;
    }
    if((ball.y + ball.r) > height){
        ball.y = ball.height - ball.r;
    }
    /*
    if(ball.x <= ball.r || ball.x <= 0){
        ball.x = ball.x + ball.r;
    }
    if(ball.y <= ball.r || ball.y <= 0){
        ball.y = ball.y + ball.r;
    }*/
    /*if((ball.x - ball.r) <= user.x) {
        ball.x = ball.x + 2 * ball.vx;
    }
    if((ball.y - ball.r) <= user.y) {
        ball.y = ball.y + 2 * ball.vy;
    }*/
   
    if (collisonpathcompu(ball, compu) == true) {
        ball.vx = ball.vx + 1;
        ball.vy = ball.vy + 1;
        ball.x = ball.x - ball.vx;
        ball.y = ball.y - ball.vy; 
        isRight = true;
    }
    else 
    {
        if (collisonpathuser(ball, user) == true) {
            console.log("Object New " , user.x , user.y);
            ball.vx = ball.vx + 1;
            ball.vy = ball.vy + 1;
            ball.x = ball.x + ball.vx;
            ball.y = ball.y + ball.vy;
            isRight = false;
        }
   }
   
}

function collisonpathcompu(ball , obj) {
    var value = ball.x + ball.r;
    console.log("Value" ,parseInt(value), obj.x);
    if((ball.x + ball.r) > obj.x) {
        return true;
    }
    return false;
}

function collisonpathuser(ball , obj) {
    if((ball.x - ball.r) <= (obj.x + 10)) {
        return true;
    }
    return false;
}

function drawCircle(x1,y1,r, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x1,y1,r, Math.PI*2,false);
    context.closePath();
    context.fill();
}

function drawRectangle(x, y, width , height , color) {
    context.fillStyle = color;
    context.fillRect(x,y,width,height);
}



