export class Ball {

    constructor(cx, cy, r, color) {
        this.svgNS = "http://www.w3.org/2000/svg";
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.color = color;
        this.myBall = document.createElementNS(this.svgNS, "circle");
        //Set velocity
        this.xspeed = 1;
        this.yspeed = 1;
    }

    setAttributesNS(el, attrs) {
        for (let key of Object.keys(attrs)) {
            el.setAttributeNS(null, key, attrs[key]);
        }
    }

// Creates Ball
    createBall() {

        setInterval(() =>{
            this.setAttributesNS(this.myBall, {
                "id": "ball",
                "cx": this.cx,
                "cy": this.cy,
                "r": this.r,
                "fill": this.color
            });

            // set the balls velocity
            this.cx += this.xspeed;
            this.cy += this.yspeed;

            // Change direction when colliding with the boundary
            if (this.cx > 480 - this.r || this.cx < 0 + this.r) {
                this.xspeed = this.xspeed * -1;
            }

            if (this.cy > 360 - this.r || this.cy < 0 + this.r) {
                this.yspeed = this.yspeed * -1;
            }

        }, 10);

        document.querySelector("svg").appendChild(this.myBall);
    }

    moveBall() {

    }
}

