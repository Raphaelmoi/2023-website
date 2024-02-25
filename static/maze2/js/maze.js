function generateMaze() {
    let current = grid[grid.length - 1];
    while (mazeIsDrawing) {
        current.visited = true;
        var next = current.checkNeighbors();
        if (next) {
            stack.push(current);
            removeWalls(current, next);
            current = next;
        } else if (stack.length > 0) {
            current = stack.pop();
        }
        else {
            mazeIsDrawing = !mazeIsDrawing;
        }
    }
}

function maze_buildGrid() {
    //set up the grid
    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell)
        }
    }
}

function printMaze() {
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}
function restartMaze() {
    grid = [];
    stack = [];
    // playerStack = []
    mazeIsDrawing = true;
    setup();
}

function removeWalls(a, b) {
    var x = a.i - b.i;
    var y = a.j - b.j;
    //left = 1 right -1
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    //TOP = 1 bottom -1
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}
