function Personnages(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.speed = 5;
    this.color = [0, 120, 30]
    this.strokecolor = [150, 150, 30]
    this.direction = 4;
    this.position = 0
    this.life = 100
    this.imgsprite_index = 0
    this.imgsprite_line = 1
    this.spriteImgCols = 4
    this.spriteImgTotal = 16
    this.playerBox = []
    this.imgLineDirection = [3, 0, 1, 2] //up down left righ
    // this.id = 0
    // this.position = this.detectGridPosition();

    this.drawPerso = function () {
        // fill(this.color[0], this.color[1], this.color[2])
        // stroke(this.strokecolor[0], this.strokecolor[1], this.strokecolor[2]);
        // ellipse(this.x, this.y, this.size);
        imageMode(CENTER);

        image(this.playerBox[this.imgsprite_index], this.x, this.y, this.size, this.size);

        if (frameCount % 5 === 0) {
            this.imgsprite_index++
        }

        if (this.imgsprite_index > (this.imgsprite_line * this.spriteImgCols) + this.spriteImgCols - 1) {
            this.imgsprite_index = this.imgsprite_line * this.spriteImgCols
        }
    }

    this.move = function () {
        this.position = this.detectGridPosition()
        switch (this.direction) {
            case 0:
                this.goUp()
                break;
            case 1:
                this.goDown()
                break;
            case 2:
                this.goLeft()
                break;
            case 3:
                this.goRight()
                break;
            default:
                this.direction = Math.floor(random(0, 4))
                break;
        }
    }

    this.touch = function (target) {
        // console.log(target);
        // console.log(this.position);
        // if (this.position === target.position) {
        //     console.log("touch");
        //     return true
        // }
        if (Math.abs(this.x - target.x) < this.size && Math.abs(this.y - target.y) < this.size) {
            return true
        }

    }
    this.kill = function (target, id) {
        target.splice(id, 1)
        // target[this.id]
    }
    this.detectGridPosition = function () {
        const playerhalfsize = this.size * 0.5
        const currentGridX = Math.round((this.x + playerhalfsize) / w)
        const currentGridY = Math.round((this.y + playerhalfsize) / w)
        const resultGridIndex = ((currentGridY - 1) * cols) + currentGridX - 1
        this.position = resultGridIndex
        return resultGridIndex;
    }
    this.goUp = function () {
        let currentGr = grid[this.position]
        this.updateimgPlayerDirection(this.imgLineDirection[0])

        if (currentGr && currentGr.walls) {
            if (currentGr.walls[0] == false) {
                this.y -= this.speed;
                this.improvePlayerPositionH(currentGr.i)
            }
            else { // il y a un mur
                var valToreach = (currentGr.j * w) + w / 2
                if (this.y - this.speed > valToreach) {
                    this.y -= this.speed;
                } else {
                    this.improvePlayerPositionV(currentGr.j)
                    this.direction = 4
                }
            }
        }
    }

    this.goDown = function () {
        let currentGr = grid[this.position]
        this.updateimgPlayerDirection(this.imgLineDirection[1])

        if (currentGr && currentGr.walls) {
            if (currentGr.walls[2] == false) {
                this.y += this.speed;
                this.improvePlayerPositionH(currentGr.i)
            }
            else {
                var valToreach = (currentGr.j * w) + w / 2
                if (this.y + this.speed < valToreach) {
                    this.y += this.speed;
                } else {
                    this.improvePlayerPositionV(currentGr.j)
                    this.direction = 4
                }
            }
        }
    }
    this.goLeft = function () {
        let currentGr = grid[this.position]
        this.updateimgPlayerDirection(this.imgLineDirection[2])

        if (currentGr && currentGr.walls) {
            if (currentGr.walls[3] == false) {
                this.x -= this.speed;
                this.improvePlayerPositionV(currentGr.j)
            }
            else if (currentGr.walls[3] == true) {
                var valToreach = (currentGr.i * w) + w / 2
                if (this.x - this.speed > valToreach) {
                    this.x -= this.speed;
                } else {
                    this.improvePlayerPositionH(currentGr.i)
                    this.direction = 4
                }
            }
        }
    }
    this.goRight = function () {
        let currentGr = grid[this.position]
        this.updateimgPlayerDirection(this.imgLineDirection[3])

        if (currentGr && currentGr.walls) {
            if (currentGr.walls[1] == false) {
                this.x += this.speed;
                this.improvePlayerPositionV(currentGr.j)
            }
            else {
                var valToreach = (currentGr.i * w) + w / 2
                if (this.x + this.speed < valToreach) {
                    this.x += this.speed;
                } else {
                    this.improvePlayerPositionH(currentGr.i)
                    this.direction = 4
                }
            }
        }
    }
    this.updateimgPlayerDirection = function (direction) {
        if (this.imgsprite_line != direction) {
            this.imgsprite_line = direction
            this.imgsprite_index = this.imgsprite_line * this.spriteImgCols
        }
    }
    this.improvePlayerPositionH = function (i) {
        this.x = (i * w) + w / 2
    }
    this.improvePlayerPositionV = function (j) {
        this.y = (j * w) + w / 2
    }
}