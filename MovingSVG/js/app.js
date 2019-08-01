import {Ball} from "./elements/ball.js";
import {Bricks} from "./elements/bricks.js";
import {RectBase} from "./elements/RectBase.js";
import {Drag} from './actions/draggable.js';


let base = new RectBase(0, 0, 480, 360,"#f1f1f1");
let ball = new Ball(150, 60, 10, "red");
let brick1 = new Bricks(0, 250, 80, 20,"blue");
let brick2 = new Bricks(400, 200, 80, 20,"blue");
// let drag = new Drag();

function Colliding(ball,brick1, brick2) {
    setInterval(() => {
        //Brick 1 moving in x direction
        if(ball.cx + ball.r + ball.xspeed> brick1.x &&
            ball.cx + ball.xspeed < brick1.x + brick1.width &&
            ball.cy + ball.r > brick1.y &&
            ball.cy < brick1.y + brick1.height){
                ball.xspeed = ball.xspeed * -1;
                let element = document.querySelector("circle")
                element.classList.add("bounceColour");
                window.setTimeout(function() { element.classList.remove("bounceColour") }, 300);
        }
        //moving in y direction
        if(ball.cx + ball.r > brick1.x &&
            ball.cx < brick1.x +brick1.width &&
            ball.cy + ball.r + ball.yspeed > brick1.y &&
            ball.cy + ball.yspeed < brick1.y + brick1.height){
                ball.yspeed = ball.yspeed * -1;

                let element = document.querySelector("circle")
                element.classList.add("bounceColour");
                window.setTimeout(function() { element.classList.remove("bounceColour") }, 300);
        }

        // Brick 2
        if(ball.cx + ball.r + ball.xspeed> brick2.x &&
            ball.cx + ball.xspeed < brick2.x + brick2.width &&
            ball.cy + ball.r > brick2.y &&
            ball.cy < brick2.y + brick2.height){
                ball.xspeed = ball.xspeed * -1;
                let element = document.querySelector("circle")
                element.classList.add("bounceColour");
                window.setTimeout(function() { element.classList.remove("bounceColour") }, 300);
        }
        if(ball.cx + ball.r > brick2.x &&
            ball.cx < brick2.x +brick2.width &&
            ball.cy + ball.r + ball.yspeed > brick2.y &&
            ball.cy + ball.yspeed < brick2.y + brick2.height){
                ball.yspeed = ball.yspeed * -1;
                let element = document.querySelector("circle")
                element.classList.add("bounceColour");
                window.setTimeout(function() { element.classList.remove("bounceColour") }, 400);
        }

    }, 10);
}
Colliding(ball, brick1, brick2);

async function runAll() {
    await base.createRectangle();
    await brick1.createRectangle();
    await brick2.createRectangle();
    await ball.createBall();
    await Drag();
}

runAll();
