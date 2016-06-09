var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.font = "15px open sans";

function writeToCanvas(text) {
    ctx.fillText(text, 10, 2);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
