
// Player Setup
var p1Y = 150;
var p2Y = 150;
var bX = 240;
var bY = 180;
var velX = 1
var velY = 0
var spd = 1;

//Canvas Setup
var box = jQuery('.box');	// reference to the HTML .box element
var board = jQuery('.board');	// reference to the HTML .board element
var boardWidth = board.width();	// the maximum X-Coordinate of the screen
var boardHeight = board.innerHeight(); // the maximum Y-Coordinate of the screen
console.log(boardWidth + ", " + boardHeight)

var c = document.getElementById("CanvasTest");
var ctx = c.getContext("2d");
const context = c.getContext('2d');

var map = {}; // maps all buttons being currently pressed


//Common Func Setup
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener('keydown', myKeyPress);

function myKeyPress(e) {
    var keynum;

    if (window.event) { // IE                  
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                 
        keynum = e.which;
    }

};


function stamp() {
    rect(20, p1Y, 20, 80);
    rect(430, p2Y, 20, 80);
    elipses(bX, bY, 1);
};


function getpress() {
    onkeydown = onkeyup = function (e) {
        e = e || event; // to deal with IE
        map[e.keyCode] = e.type == 'keydown';
    }
    if (map[38] && map[87]) { //both players press up
        p1Y = p1Y - 1
        p2Y = p2Y - 1
    } else if (map[40] && map[83]) { // both players press down
        p1Y = p1Y + 1
        p2Y = p2Y + 1
    } else if (map[38] && map[83]) { // p1 down, p2 up
        p1Y = p1Y + 1
        p2Y = p2Y - 1
    } else if (map[40] && map[87]) { // p1 up, p2 down
        p1Y = p1Y - 1
        p2Y = p2Y + 1
    } else if (map[87]) { //p1up
        p1Y = p1Y - 1
    } else if (map[83]) { //p1down
        p1Y = p1Y + 1
    } else if (map[38]) { //p2up
        p2Y = p2Y - 1
    } else if (map[40]) { //p2down
        p2Y = p2Y + 1
    };


    if (p1Y > 280) {
        p1Y = 280
    };
    if (p2Y > 280) {
        p2Y = 280
    };

    if (p1Y < 0) {
        p1Y = 0
    };
    if (p2Y < 0) {
        p2Y = 0
    };

};

function rect(rX, rY, sX, sY) {
    ctx.beginPath();
    ctx.rect(rX, rY, sX, sY);
    ctx.stroke();

};

function elipses(eX, eY, size) {
    ctx.beginPath();
    ctx.ellipse(eX, eY, 12 * size, 12 * size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
};

function clear() {
    ctx.clearRect(0, 0, c.width, c.height);
}

//Process Setup
var lastUpdate = Date.now(); //deltatime handler
var now = Date.now();
var dt = now - lastUpdate;
setInterval(process, dt)

//ETC.

//p1y, p1y+80, (p1x)20, (p2x)430


function ball() {
    velX = velX * spd
    velY = velY * spd
    bX = bX + velX
    bY = bY + velY
    if (bX === 20 || bX === 430) { //check collision
        for (let i = 0; i < 80; i++) {
            if (bY === p1Y + i) {
                velX = 1
                velY = getRandomInt(1, 0)
            };
            if (bY === p2Y + i) {
                velX = -1
                velY = getRandomInt(1, 0)
            };


        };
    };
    //console.log(bX, bY)
};



function process() {
    clear();
    getpress();
    ball();
    stamp();
};


