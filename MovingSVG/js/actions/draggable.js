export function Drag () {

    let active = false;
    const svg = document.querySelector("svg");
    const items = document.querySelectorAll(".draggable");
    let currentX = items.getAttributeNS(null,"x");
    let currentY = items.getAttributeNS(null, "y");

    for (let item of items) {
        item.addEventListener('mousedown', startDrag);
        item.addEventListener('mousemove', drag);
        item.addEventListener('mouseup', endDrag);
        item.addEventListener('mouseleave', endDrag);
    }


    function startDrag(e) {
        active = e.target
    }

    function drag(e) {

            let coord = getMousePosition(e);
            e.preventDefault();

            active.setAttributeNS(null, "x", coord.x);
            active.setAttributeNS(null, "y", coord.y);
    }

    function endDrag(e) {
        document.onmouseup = null;
        document.onmousemove = null;
        active = false;
    }

    function getMousePosition(e) {
        let CTM = svg.getScreenCTM();
        return {
            x: (e.clientX - CTM.e) / CTM.a,
            y: (e.clientY - CTM.f) / CTM.d
        };
    }
}