var CANVA_SIZE=500;
var STROKE_WEIGHT=25;
var STROKE_WEIGHT_UNSELECTED=5;
var OUTPUT_RADIUS = CANVA_SIZE / 2 - STROKE_WEIGHT * 2;
var ARROW_LENGTH = 35;
var ARROW_WIDTH = 25;
var mouseClicked = false;

document.getElementById("canva_div").setAttribute("style","border:1px; border-style: solid; width: " + CANVA_SIZE + "px; height: " + CANVA_SIZE + "px;")

function arrow_head(x1, y1, x2, y2) {
    push()
    let dy = y1 - y2;
    let dx = x1 - x2;
    let length = sqrt(dx * dx + dy * dy);

    let ddy = dy / length;
    let ddx = dx / length;

    let triangle_x1 = x2 - ddx * ARROW_LENGTH;
    let triangle_y1 = y2 - ddy * ARROW_LENGTH;

    let triangle_x2 = x2 + ddy * ARROW_WIDTH ;
    let triangle_y2 = y2 - ddx * ARROW_WIDTH ;

    let triangle_x3 = x2 - ddy * ARROW_WIDTH ;
    let triangle_y3 = y2 + ddx * ARROW_WIDTH ;

    fill(0)
    strokeWeight(1);
    // line(triangle_x2, triangle_y2, triangle_x3, triangle_y3);

    triangle(triangle_x1, triangle_y1, triangle_x2, triangle_y2, triangle_x3, triangle_y3);
    pop()
}

async function copy_to_clip() {
    fetch(canva.canvas.toDataURL())
    .then(response => response.blob())
    .then(blob => navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ]));

}

function download() {
    saveCanvas(canva)
}
