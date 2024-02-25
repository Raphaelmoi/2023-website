let speedFrameRate = 60
let cursorBird, cursorAstro, cursorSpaceship1, cursorSpaceship2
let selectedPerso = 0
let fireIndex = 0;
let forceX = 1;
let forceY = 1;

function preload() {
    cursorBird = loadImage('ufosmall.png');
    cursorAstro = loadImage('assto2.png');
    cursorSpaceship1 = loadImage('airship.png');
    cursorSpaceship2 = loadImage('spaceship01.png');
}

function setup() {
    // frameRate(speedFrameRate)
    createCanvas(window.innerWidth, window.innerHeight);
    setAstro()
}

function draw() {
    background(15);

    fire.forEach((el, j) => {
        el.allEllipse.push([mouseX + el.x, mouseY + el.y, pmouseX, pmouseY, el.getEllipseColor()])
        if (el.allEllipse.length > el.lengthTraine) {
            const dif = el.allEllipse.length - el.lengthTraine
            el.allEllipse.splice(0, dif)
        }
        for (let i = el.allEllipse.length - 1; i > 0; i--) {
            el.allEllipse[i][0] *= forceX
            el.allEllipse[i][1] *= forceY
            drawEllipse(el.allEllipse[i], i, el);
        }
    });

    drawPlayer()
}
function drawEllipse(myellipse, index, el) {
    let speed = abs(myellipse[0] - myellipse[2]) + abs(myellipse[1] - myellipse[3]);
    if (speed > el.maxSize) speed = el.maxSize;
    //OPACITY
    myellipse[4][3] = myellipse[4][3] - el.coef;
    if (myellipse[4][3] < - 1) {
        myellipse[4][3] = 1
    }

    const rgba = 'rgba(' + myellipse[4][0] + "," + myellipse[4][1] + "," + myellipse[4][2] + "," + Math.abs(myellipse[4][3]) + ')'

    const futurX = myellipse[0] + (index * el.coefX) - el.coefX * 20
    const futurY = myellipse[1] + (index * el.coefY) - el.coefY * 20
    // console.log(futurX);
    fill(rgba)
    noStroke()
    ellipse(futurX, futurY, speed * Math.abs(myellipse[4][3]), speed * Math.abs(myellipse[4][3]));
}

function colorInput(val) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);
    if (result) {
        fire[fireIndex].RGB[0] = parseInt(result[1], 16);
        fire[fireIndex].RGB[1] = parseInt(result[2], 16);
        fire[fireIndex].RGB[2] = parseInt(result[3], 16)
    }
}
//adapte le contenu du input color avec les nouvelles donees des input[range]
function updateColorPickerValue() {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    document.getElementById('favcolor').value = rgbToHex(fire[fireIndex].RGB[0], fire[fireIndex].RGB[1], fire[fireIndex].RGB[2]);
}

function updateRangesBar() {
    document.getElementById('colorR').value = fire[fireIndex].RGB[0]
    document.getElementById('colorG').value = fire[fireIndex].RGB[1]
    document.getElementById('colorB').value = fire[fireIndex].RGB[2]
    document.getElementById('maxsize').value = fire[fireIndex].maxSize
    document.getElementById('trainee').value = fire[fireIndex].lengthTraine
    document.getElementById('framePerS').value = fire[fireIndex].coef * 100
    document.getElementById('colorrandom').value = fire[fireIndex].colorRandomDif
    // document.getElementById('forceX').value = forceX * 100
    // document.getElementById('forceY').value = forceY * 1000
    document.getElementById('opacityStart').value = fire[fireIndex].opacityStart * 100
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

function nav(direction) {
    let newval = fireIndex + direction;
    newval = newval < 0 ? fire.length - 1 : newval
    newval = newval > fire.length - 1 ? 0 : newval
    fireIndex = newval
    document.getElementById('currentindex').textContent = fireIndex + 1
    updateColorPickerValue()
    updateRangesBar()
}
function addnewFire() {
    fire.push(new Fire())
    fire[fire.length - 1].x = fire[fire.length - 2].x + 10
    updateFront()
}
function updateFront() {
    fireIndex = fire.length - 1
    document.getElementById('currentindex').textContent = fireIndex + 1
    updateColorPickerValue()
    updateRangesBar()
    console.log(fire);
}