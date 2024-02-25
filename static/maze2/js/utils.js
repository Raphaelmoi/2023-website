function time_resetTimer() {
    time_gameDuration = 0;
    setInterval(time_incrementDuration, 1000)
}
function time_incrementDuration() {
    time_gameDuration++
}


function updateFront() {
    elBody.style.setProperty('--canvas-x', ((windowWidth * 0.5) - player.x) + 'px')
    elBody.style.setProperty('--canvas-y', ((windowHeight * 0.5) - player.y) + 'px')
}

function spriteImage(imgToSprite, widthImg, heightImg, column, nbrFrame) {
    let x = 0;
    let y = 0;
    let box = []
    for (let i = 1; i <= nbrFrame; i++) {
        let img = imgToSprite.get(x, y, widthImg, heightImg);
        box.push(img);
        x += widthImg;
        if (i % column == 0) {
            y += heightImg;
            x = 0;
        }
    }
    return box
}

function randomColor() {
    currentR = Math.floor(random(0, 255));
    currentB = Math.floor(random(0, 255));
    currentG = Math.floor(random(0, 255));
}

// function playPause() {
//     playBtn = !playBtn
//     if (playBtn) {
//         btnPlaypause.html('&#10074;&#10074;')
//     } else {
//         btnPlaypause.html('&#x23f5;')
//     }
// }