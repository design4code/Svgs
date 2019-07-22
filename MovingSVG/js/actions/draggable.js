export function Drag () {

    let active = false;
    const item = document.querySelector(".draggable");
    let currentX = item.getAttributeNS(null,"x");
    let currentY = item.getAttributeNS(null, "y");
    let xOffset = 0;
    let yOffset = 0;
    let initialX; // Mouse position x
    let initialY; // Mouse position y

    item.addEventListener('mousedown', startDrag);
    item.addEventListener('mousemove', drag);
    item.addEventListener('mouseup', endDrag);
    item.addEventListener('mouseleave', endDrag);

    function startDrag(e) {
        initialX = e.clientX;
        initialY = e.clientY;
        active = true;
    }

    function drag(e) {
        if(active) {

            e.preventDefault();
            let coord = getMousePosition(e);
            // currentX = xOffset - e.clientX;
            // currentY = yOffset - e.clientY;

            item.setAttributeNS(null, "x", coord.x);
            item.setAttributeNS(null, "y", coord.x);
        }
    }

    function endDrag(e) {
        document.onmouseup = null;
        document.onmousemove = null;
        active = false;
    }

    function getMousePosition(e) {
        let CTM = item.getScreenCTM();
        return {
            x: (e.clientX - CTM.e) / CTM.a,
            y: (e.clientY - CTM.f) / CTM.d
        };
    }
}