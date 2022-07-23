// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
    var canvas = document.querySelector("canvas");

    drawGround(canvas);
    drawSnowText(canvas);
    drawSnowman(canvas);
    drawSnowflakes(canvas);   
});

function drawGround(canvas) {
    var context = canvas.getContext("2d");

    // background
    context.fillStyle = "lightgray";
    context.fillRect(0, 0, 300, 300);

    // ground
    context.fillStyle = "brown";
    context.fillRect(0, canvas.height - 50, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {   
    for (var c = 0; c < 100; c++) {
        var x = Math.floor(Math.random() * canvas.width);
        var y = Math.floor(Math.random() * canvas.height);
        drawSingleFlake(canvas, x, y);
    }
}

// Complete the functions below

// draws the text "SNOW" on the canvas
function drawSnowText(canvas) {

    // get the context
    var context = canvas.getContext("2d");

    // set font styles
    context.font = "80px Verdana";
    context.textAlign = "center";
    context.textBaseline = "top";
    context.fillStyle = "blue";
    context.fillText("SNOW",canvas.width/2,10);
}

// draws the snowman on the canvas
function drawSnowman(canvas) {

    // get the context
    var context = canvas.getContext("2d");

    // setup snowman styles
    context.fillStyle = "white";

    context.beginPath();
    context.arc(150, 200, 50, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(150, 120, 40, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(150, 60, 25, 0, 2 * Math.PI);
    context.fill();

}

// draws a single snowflake on the canvas
function drawSingleFlake(canvas, x, y) {

    // get the context
    var context = canvas.getContext("2d");

    // setup snowflake properties and style
    context.moveTo(x,y);
    context.lineTo(x+flakeSize/2,y+flakeSize/2);
    context.lineTo(x,y+flakeSize);
    context.lineTo(x-flakeSize/2,y+flakeSize/2);
    context.fillStyle = "white";
    context.fill();
}