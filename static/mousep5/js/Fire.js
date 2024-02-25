class Fire {
    constructor(x = 0, y = 0, coefY = 0, coefX = 0, opacityStart = 0.1, coef = 0.05,
        maxSize = 25, lengthTraine = 20, colorRandomDif = 50) {
        this.x = x;
        this.y = y;
        this.coefY = coefY;
        this.coefX = coefX;
        this.opacityStart = opacityStart;
        this.coef = coef;
        this.maxSize = maxSize;
        this.lengthTraine = lengthTraine;
        this.colorRandomDif = colorRandomDif;
        this.allEllipse = [];
        this.RGB = [255, 255, 255];
    }

    getEllipseColor() {
        let newcolor = []

        for (let i = 0; i < this.RGB.length; i++) {
            if (!this.RGB[i]) { this.RGB[i] = 255 }
            let randomval = Math.round(random(-this.colorRandomDif, this.colorRandomDif))
            let col = parseInt(this.RGB[i]) + randomval;
            col = col > 255 ? 255 : col < 0 ? 0 : col
            newcolor.push(col)
        }
        // let alpha = this.opacityStart - this.coef;
        // if (alpha < - 1) {
        //     alpha = 1
        // }
        // this.opacityStart = alpha
        return [newcolor[0], newcolor[1], newcolor[2], this.opacityStart]
    }
    // getRGBAstring(){
    //     return  'rgba(' + myellipse[4][0] + "," + myellipse[4][1] + "," + myellipse[4][2] + "," + Math.abs(myellipse[4][3]) + ')'
    // }
}