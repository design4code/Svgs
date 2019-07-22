import {Ball} from "./elements/ball.js";
import {Bricks} from "./elements/bricks.js";

class Collision {


    constructor() {
        let ball = new Ball(150, 60, 10, "red");
        let brick1 = new Bricks(0, 260, 80, 20,"blue");
        let brick2 = new Bricks(400, 200, 80, 20,"blue");
    }

    calcColl() {
        if (brick1.x < brick2.x + brick2.width &&
            brick1.x + brick1.width > brick2.x &&
            brick1.y < brick2.y + brick2.height &&
            brick1.y + brick1.height > brick2.y) {
            // collision detected!
        }
    }


}