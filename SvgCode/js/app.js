class Scene {

    constructor() {
        this.svgNS = "http://www.w3.org/2000/svg";
    }

    setAttributesNS(el, attrs) {
        for (var key in attrs) {
            el.setAttributeNS(null, key, attrs[key]);
        }
    }

    // Creates Rectangles
    createRectangle(x, y, width, height, color) {
        const myRect = document.createElementNS(this.svgNS, "rect");
        this.setAttributesNS(myRect, {
            "id": "rectannle",
            "x": x,
            "y": y,
            "width": width,
            "height": height,
            "fill": color
        });

        document.querySelector("svg").appendChild(myRect);
    }

    // Creates Circles
    createCircle(cx, cy, r, color) {
        const myCircle = document.createElementNS(this.svgNS, "circle");
        this.setAttributesNS(myCircle, {
            "id": "Circle",
            "cx": cx,
            "cy": cy,
            "r": r,
            "fill": color
        });

        document.querySelector("svg").appendChild(myCircle);
    }

    // Creates Lines
    createLine(x1, y1, x2, y2, color, strokeW) {
        const myLine = document.createElementNS(this.svgNS, "line");
        this.setAttributesNS(myLine, {
            "id": "line",
            "x1": x1,
            "y1": y1,
            "x2": x2,
            "y2": y2,
            "stroke": color,
            "stroke-width": strokeW
        });

        document.querySelector("svg").appendChild(myLine);
    }

    // Create Polyline
    createPolyline(points, color, strokeC, strokeW) {
        const myPolyline = document.createElementNS(this.svgNS, "polyline");
        this.setAttributesNS(myPolyline, {
            "id": "polyline",
            "points": points,
            "fill": color,
            "stroke": strokeC,
            "stroke-width": strokeW
        });

        document.querySelector("svg").appendChild(myPolyline);
    }

    // Create Polygon
    createPolygon(points, color) {
        const myPolygon = document.createElementNS(this.svgNS, "polygon");
        this.setAttributesNS(myPolygon, {
            "id": "polygon",
            "points": points,
            "fill": color
        });

        document.querySelector("svg").appendChild(myPolygon);
    }
}

const scene = new Scene();

function createTestScene(scene) {
        scene.createRectangle(0, 0, 70, 110,"coral");
        scene.createCircle(150, 60, 55, "hotpink");
        scene.createLine(0, 150, 70, 150, "black", 3);
        scene.createPolyline("100 150 200 150 100 200 200 200", "transparent","cornflowerblue",3);
        scene.createPolygon("50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180", "cornflowerblue");
};

createTestScene(scene);

// export async function createTestScene(scene) {
//     return new Promise(async (resolve) => {
//         scene.add(await createRectangle(1, 1, 4, 2, "coral"));
//         scene.add(await createCircle(8, 2, 2, "hotpink"));
//         scene.add(await createLine(1, 1, 5, 3, "white"));
//         scene.add(await createPolygon([1, 1, 5, 1, 5, 3, 1, 3], "cornflowerblue", [0, 3]));
//         resolve();
//     });
// }

