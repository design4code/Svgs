import {Ball} from "./elements/ball.js";
import {Bricks} from "./elements/bricks.js";
import {RectBase} from "./elements/RectBase.js";

let base = new RectBase(0, 0, 480, 360,"#f1f1f1");
let ball = new Ball(150, 60, 10, "red");
let brick1 = new Bricks(0, 260, 80, 20,"blue");
let brick2 = new Bricks(400, 200, 80, 20,"blue");

base.createRectangle();
brick1.createRectangle();
brick2.createRectangle();
ball.createBall();

