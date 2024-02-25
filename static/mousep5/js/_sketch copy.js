let allEllipse = [];
let lengthTraine = 20;
let speedFrameRate = 60
let maxSize = 25;
let coef = 0.05;
let colorRandomDif = 50
let red = 255;
let green = 255
let blue = 255;
let forceX = 1;
let forceY = 1;
let opacityStart = 0.1
let cursorBird, cursorAstro, cursorSpaceship1, cursorSpaceship2
let selectedPerso = 0
let nbrOfPath = 2;
let fire = [
    {
        x: 0,
        y: 0,
        coefY: 0,
        coefX: 0
    },
    {
        x: 120,
        y: -40,
        coefX: -8,
        coefY: 1.5
    }
]
function preload() {

    cursorBird = loadImage('ufosmall.png');
    cursorAstro = loadImage('assto2.png');
    cursorSpaceship1 = loadImage('airship.png');
    cursorSpaceship2 = loadImage('spaceship01.png');

}

function setup() {
    // frameRate(speedFrameRate)
    createCanvas(window.innerWidth, window.innerHeight);
}
function drawPlayer() {
    switch (selectedPerso) {
        case 0:
            image(cursorAstro, mouseX - 25, mouseY - 25);
            break;
        case 1:
            image(cursorBird, mouseX - 25, mouseY - 25);
            break;
        case 2:
            image(cursorSpaceship1, mouseX - 25, mouseY - 25);
            break;
        case 3:
            image(cursorSpaceship2, mouseX - 25, mouseY - 25);
            break;
        default:
            break;
    }
}
function draw() {
    background(15);
    allEllipse.push([mouseX, mouseY, pmouseX, pmouseY, getEllipseColor()])

    if (allEllipse.length > lengthTraine) {
        const dif = allEllipse.length - lengthTraine
        allEllipse.splice(0, dif)
    }

    for (let i = allEllipse.length - 1; i > 0; i--) {
        allEllipse[i][0] *= forceX
        allEllipse[i][1] *= forceY
        variableEllipse(allEllipse[i][0], allEllipse[i][1], allEllipse[i][2], allEllipse[i][3], allEllipse[i][4], i);

    }
    drawPlayer()
}
function getEllipseColor() {
    let newred = getColorVal(red)
    let newblue = getColorVal(blue)
    let newgreen = getColorVal(green)
    return col = [newred, newgreen, newblue, opacityStart]
}
function getColorVal(color) {
    let randomval = Math.round(random(-colorRandomDif, colorRandomDif))
    if (!color) { color = 255 }
    let newcol = parseInt(color) + randomval;
    newcol = newcol > 255 ? 255 : newcol < 0 ? 0 : newcol
    return newcol
}
function variableEllipse(x, y, px, py, color, index) {
    let speed = abs(x - px) + abs(y - py);

    if (speed > maxSize) speed = maxSize;
    //OPACITY
    color[3] = color[3] - coef;
    if (color[3] < - 1) {
        color[3] = 1
    }

    for (let j = 0; j < fire.length; j++) {
        const rgba = 'rgba(' + color[0] + "," + color[1] + "," + color[2] + "," + Math.abs(color[3]) + ')'

        // let diffX = index * (j * fire.coef - fire.x)
        // let diffY = index * (j * fire.coef - fire.y)
        let diffX = j * fire[j].x
        let diffY = j * fire[j].y

        const futurX = (x + diffX) + (index * fire[j].coefX)
        const futurY = (y + diffY) + (index * fire[j].coefY)
        fill(rgba)
        noStroke()
        ellipse(futurX, futurY, speed * Math.abs(color[3]), speed * Math.abs(color[3]));
    }
}

function blackWhite() {
    fill(random(255))
}
function randomColor() {
    fill(random(255), random(255), random(255))
}
function colorInput(val) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);
    if (result) {
        red = parseInt(result[1], 16);
        green = parseInt(result[2], 16);
        blue = parseInt(result[3], 16)
    }
}
function updateColorPickerValue() {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    // const hex = rgbToHex(red, green, blue);
    document.getElementById('favcolor').value = rgbToHex(red, green, blue);
}

function updateRangesBar() {
    document.getElementById('colorR').value = red
    document.getElementById('colorG').value = green
    document.getElementById('colorB').value = blue
    document.getElementById('maxsize').value = maxSize
    document.getElementById('trainee').value = lengthTraine
    document.getElementById('framePerS').value = coef
    document.getElementById('colorrandom').value = colorRandomDif
    document.getElementById('forceX').value = forceX
    document.getElementById('forceY').value = forceY
    document.getElementById('opacityStart').value = opacityStart
}
function setAstro() {
    selectedPerso = 0
    maxSize = 150;
    forceY = 1.03
    forceX = 1.005
    opacityStart = 0.3
    red = 255;
    blue = 255
    green = 255
    colorRandomDif = 0
    lengthTraine = 100
    coef = 0.25
    updateColorPickerValue()
    updateRangesBar()
}

function setUFO() {
    selectedPerso = 1
    maxSize = 25;
    forceY = 1.02
    forceX = 1
    opacityStart = 1
    red = 125;
    blue = 191
    green = 232
    colorRandomDif = 50
    lengthTraine = 20
    coef = 0.05
    updateColorPickerValue()
    updateRangesBar()
}
function setSpaceship1() {
    selectedPerso = 2
    maxSize = 120;
    forceY = 1.001
    forceX = 0.995
    opacityStart = 1
    red = 232;
    blue = 15
    green = 45
    colorRandomDif = 30
    lengthTraine = 160
    coef = 0.005
    updateColorPickerValue()
    updateRangesBar()
}
function setSpaceship2() {
    selectedPerso = 3

    maxSize = 55;
    forceY = 0.995
    forceX = 0.998
    opacityStart = 0.1
    red = 125;
    blue = 191
    green = 232
    colorRandomDif = 80
    lengthTraine = 50
    coef = 0.01
    updateColorPickerValue()
    updateRangesBar()
}