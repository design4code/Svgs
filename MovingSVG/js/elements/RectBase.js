export class RectBase {

    constructor(x, y, width, height, color) {
        this.svgNS = "http://www.w3.org/2000/svg";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    setAttributesNS(el, attrs) {
        for (let key of Object.keys(attrs)) {
            el.setAttributeNS(null, key, attrs[key]);
        }
    }

    createRectangle() {
        const myRect = document.createElementNS(this.svgNS, "rect");
        this.setAttributesNS(myRect, {
            "class": "base",
            "id": "rectangle",
            "x": this.x,
            "y": this.y,
            "width": this.width,
            "height": this.height,
            "fill": this.color
        });

        document.querySelector("svg").appendChild(myRect);


    }
}
