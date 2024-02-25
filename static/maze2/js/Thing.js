function Thing(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.color = [0, 0, 0]
    this.strokecolor = [255, 255, 255]
    this.position = 0

    this.drawThing = function () {
        fill(this.color[0], this.color[1], this.color[2])
        stroke(this.strokecolor[0], this.strokecolor[1], this.strokecolor[2]);
        ellipse(this.x, this.y, this.size);
    }

    // this.touch = function (target) {
    //     if (this.position === target) {
    //         console.log("touch");
    //         return true
    //     }
    // }

    this.kill = function (target, id) {
        target.splice(id, 1)
    }

    this.detectGridPosition = function () {
        const playerhalfsize = this.size * 0.5
        const currentGridX = Math.round((this.x + playerhalfsize) / w)
        const currentGridY = Math.round((this.y + playerhalfsize) / w)
        const resultGridIndex = ((currentGridY - 1) * cols) + currentGridX - 1
        this.position = resultGridIndex
        return resultGridIndex;
    }

}