function setAstro() {
    // let nextFire = new Fire()
    // nextFire.maxSize = 150;
    // nextFire.opacityStart = 0.3
    // nextFire.colorRandomDif = 0
    // nextFire.lengthTraine = 100
    // nextFire.coef = 0.25
    // nextFire.RGB = [255, 255, 255]
    fire = [new Fire(), new Fire(21, 21, -1.1, -1.1)]
    fire[1].maxSize = 8
    selectedPerso = 0
    // forceY = 1.03
    // forceX = 1.005
    updateFront()
}

function setUFO() {
    let nextFire = new Fire()
    nextFire.opacityStart = 0.07
    nextFire.colorRandomDif = 50
    nextFire.lengthTraine = 15
    nextFire.coef = 0.05
    nextFire.maxSize = 42;
    nextFire.RGB = [210, 188, 75]
    nextFire.y = 28

    let nextFire2 = new Fire()
    nextFire2.opacityStart = 0.8
    nextFire2.colorRandomDif = 50
    nextFire2.lengthTraine = 16
    nextFire2.coef = 0.05
    nextFire2.maxSize = 25;
    nextFire2.RGB = [65, 177, 225]
    nextFire2.y = 14

    let nextFire3 = new Fire()
    nextFire3.opacityStart = 0.92
    nextFire3.colorRandomDif = 50
    nextFire3.lengthTraine = 20
    nextFire3.coef = 0.05
    nextFire3.coefX = 2
    nextFire3.coefY = 2
    nextFire3.maxSize = 17;
    nextFire3.y = 3
    nextFire3.x = -3

    let nextFire4 = new Fire()
    nextFire4.opacityStart = 0.92
    nextFire4.colorRandomDif = 50
    nextFire4.lengthTraine = 20
    nextFire4.coef = 0.05
    nextFire4.coefX = -2
    nextFire4.coefY = 2
    nextFire4.maxSize = 17;
    nextFire4.y = 14
    nextFire4.y = 3
    nextFire4.x = -3

    let nextFire5 = new Fire()
    nextFire5.opacityStart = 0.65
    nextFire5.colorRandomDif = 50
    nextFire5.lengthTraine = 66
    nextFire5.coef = 0.01
    nextFire5.maxSize = 25;

    fire = [nextFire5, nextFire, nextFire2, nextFire3, nextFire4]
    selectedPerso = 1
    forceY = 1.02
    forceX = 1
    updateFront()

}
function setSpaceship1() {
    let nextFire = new Fire()
    nextFire.maxSize = 120;
    nextFire.opacityStart = 1
    nextFire.colorRandomDif = 30
    nextFire.lengthTraine = 160
    nextFire.coef = 0.005
    nextFire.RGB = [232, 15, 45]
    fire = [nextFire]
    selectedPerso = 2
    forceY = 1.001
    forceX = 0.995
    updateFront()
}
function setSpaceship2() {
    let nextFire = new Fire()
    nextFire.maxSize = 55;
    nextFire.opacityStart = 0.1
    nextFire.colorRandomDif = 80
    nextFire.lengthTraine = 50
    nextFire.coef = 0.01
    nextFire.RGB = [125, 191, 232]
    fire = [nextFire]
    selectedPerso = 3
    forceY = 0.995
    forceX = 0.998
    updateFront()
}
