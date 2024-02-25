// elements html
let elBarLife;
let elBody;
let elCanvas;
let mazeCanvas;
let rows, cols;
let targetW = 10;
var w;
// var w = Math.round(window.innerHeight / 18 * 100) / 100;
var grid = [];
var stack = [];
// var playerStack = [];
let mazeIsDrawing = true;
let playBtn = true;

let currentR = 186;
let currentG = 0;
let currentB = 23;

let gridCurrentIndex = 0;
let player;
let ennemies = []
let nbrOfennemies = 20;
let bombs = [];

let wallWeight = 23
let scaleCanvas = 2 //1.5

let finalPoint;
let time_gameDuration = 0;

let playerImg;
let ghostImg
let teleportImg

function preload() {
    elBarLife = document.getElementById('lifebar')
    elBody = document.getElementsByTagName('body')[0]
    playerImg = loadImage('img/player.png');
    ghostImg = loadImage('img/ghost.png');
    teleportImg = loadImage('img/teleport.png');
}

function setup() {
    // frameRate(18);
    hideEndgamePanel()
    time_resetTimer()

    w = (Math.round(window.innerHeight / targetW * 100) / 100) * scaleCanvas;
    createPlayer()
    player.playerBox = spriteImage(playerImg, 64, 64, player.spriteImgCols, player.spriteImgTotal);


    mazeCanvas = createCanvas(windowWidth * scaleCanvas, windowHeight * scaleCanvas);
    mazeCanvas.background(0);

    elCanvas = document.getElementsByTagName('canvas')[0]
    if (elCanvas.classList.contains('unScaleCanvas')) {
        elCanvas.classList.remove('unScaleCanvas')
    }
    document.getElementsByClassName("shadow")[0].style.opacity = 1;

    cols = floor(width / w);
    rows = floor(height / w);
    randomColor();
    maze_buildGrid()
    generateMaze()
    printMaze()

    for (let i = 0; i < nbrOfennemies; i++) {
        createEnnemies()
    }
    finalPoint = new Thing(w * cols - 1 - w * 0.5, w * rows - 1 - w * 0.5)
    finalPoint.position = grid.length - 1

    loop()
}

function draw() {
    if (playBtn && player.life > 0) {
        clear()
        printMaze()
        gridCurrentIndex = player.detectGridPosition()
        grid[gridCurrentIndex].isPlayerPosition = true

        player.drawPerso()

        bombs.forEach((bomb) => {
            bomb.drawMine()
        });
        ennemies.forEach((ene, index) => {
            ene.move()
            ene.drawPerso()
            ene.detectGridPosition();
            if (player.touch(ene)) {
                ene.kill(ennemies, index)
                player.life -= 10
                elBarLife.style.width = player.life + '%'
            }
            for (let i = 0; i < bombs.length; i++) {
                if (ene.touch(bombs[i])) {
                    console.log("BOOM");
                    ene.kill(ennemies, index)
                    bombs[i].kill(bombs, i)
                }
            }
        });

        finalPoint.drawThing()
        if (player.touch(finalPoint)) {
            endGame()
        }
        keyPressed()
        updateFront()
    } else endGame()
}
function endGame() {
    document.getElementsByClassName('shadow')[0].style.opacity = 0
    elCanvas.classList.toggle('unScaleCanvas')
    noLoop()
    document.getElementById('timeEl').textContent = time_gameDuration
    showEngGamePanel()
}

function createPlayer() {
    player = new Personnages(w * 0.5, w * 0.5)
    player.size = w * 0.5
    player.speed = w * 0.15
    player.color = [currentR, currentG, currentB]
    player.strokecolor = [currentR - 20, currentG, currentB]
}

function createEnnemies() {
    let nextX = random(0, cols - 1)
    let nextY = random(0, rows - 1)
    let ennemie = new Personnages(w * nextX + w * 0.5, w * nextY + w * 0.5)
    ennemie.size = w * 0.5
    ennemie.speed = w * 0.03
    ennemie.spriteImgCols = 3
    ennemie.spriteImgTotal = 12
    ennemie.imgLineDirection = [0, 2, 3, 1]
    ennemie.playerBox = spriteImage(ghostImg, 48, 64, ennemie.spriteImgCols, ennemie.spriteImgTotal);

    ennemies.push(ennemie)
    ennemie.detectGridPosition()
}

function resetGame() {
    grid = [];
    stack = []
    // playerStack = []
    ennemies = []
    bombs = []
    mazeIsDrawing = true
    gridCurrentIndex = null
    setup()
}
