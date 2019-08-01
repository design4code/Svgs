import {RectBase} from "./RectBase.js";

export class Bricks extends RectBase {

    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
    }

    setAttributesNS(el, attrs) {
        for (let key of Object.keys(attrs)) {
            el.setAttributeNS(null, key, attrs[key]);
        }
    }

    createRectangle() {
        const myRect = document.createElementNS(this.svgNS, "rect");
        this.setAttributesNS(myRect, {
            "id": "rectangle",
            "class": "draggable",
            "x": this.x,
            "y": this.y,
            "width": this.width,
            "height": this.height,
            "fill": this.color
        });

        document.querySelector("svg").appendChild(myRect);
    }
}
