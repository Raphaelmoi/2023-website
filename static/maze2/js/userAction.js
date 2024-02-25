function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        player.goUp()
    } else if (keyIsDown(DOWN_ARROW)) {
        player.goDown()
    } else if (keyIsDown(LEFT_ARROW)) {
        player.goLeft()
    } else if (keyIsDown(RIGHT_ARROW)) {
        player.goRight()
    } else {
        player.imgsprite_index = player.imgsprite_line * player.spriteImgCols
    }
}
function keyReleased() {
    if (keyCode === 32) {
        const index = bombs.findIndex((element) => element.position === player.position)
        if (index === -1) {
            bombs.push(new Mine(player.x, player.y, player.position))

            bombs[bombs.length - 1].imgSprite = spriteImage(teleportImg, 256, 128, bombs[bombs.length - 1].spriteImgCols, bombs[bombs.length - 1].spriteImgTotal);

            // let currentGr = grid[player.position] 
            // bombs[bombs.length - 1].improvePlayerPositionH(currentGr.i)
            // bombs[bombs.length - 1].improvePlayerPositionV(currentGr.j)
        } else {
            bombs.splice(index, 1)
        }
    }
}