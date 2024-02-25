function Mine(x, y, position) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.color = [0, 120, 30]
    this.strokecolor = [150, 150, 30]
    this.position = position
    this.imgsprite_index = 0
    this.spriteImgCols = 1
    this.spriteImgTotal = 5
    this.imgSprite = []


    this.drawMine = function () {
        // fill(this.color[0], this.color[1], this.color[2])
        // stroke(this.strokecolor[0], this.strokecolor[1], this.strokecolor[2]);
        // ellipse(this.x, this.y, this.size);
        push()
        image(this.imgSprite[this.imgsprite_index], this.x, this.y, this.size, this.size / 2);
        pop()
        if (frameCount % 5 === 0) {
            this.imgsprite_index++
        }

        if (this.imgsprite_index > this.imgSprite.length - 1) {
            this.imgsprite_index = 0
        }
    }

    this.kill = function (target, id) {
        target.splice(id, 1)
    }
    this.improvePlayerPositionH = function (i) {
        this.x = (i * w) + w / 2
    }
    this.improvePlayerPositionV = function (j) {
        this.y = (j * w) + w / 2
    }
}