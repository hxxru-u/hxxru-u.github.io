class GameOfLife {
    constructor(width, height, cellSize, initialState = null) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.cols = Math.floor(width / cellSize);
        this.rows = Math.floor(height / cellSize);
        this.grid = initialState || this.makeRandomGrid();
    }

    makeRandomGrid() {
        return new Array(this.cols).fill(null)
            .map(() => new Array(this.rows).fill(null)
                .map(() => Math.random() > 0.5));
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                const x = i * this.cellSize;
                const y = j * this.cellSize;
                if (this.grid[i][j]) {
                    ctx.fillStyle = '#4684b4';
                    ctx.fillRect(x, y, this.cellSize, this.cellSize);
                }
                ctx.strokeStyle = '#e6f3ff';
                ctx.strokeRect(x, y, this.cellSize, this.cellSize);
            }
        }
    }

    nextGen() {
        this.grid = this.grid.map((col, i) =>
            col.map((cell, j) => {
                const neighbors = this.countNeighbors(i, j);
                return neighbors === 3 || (cell && neighbors === 2);
            })
        );
    }

    countNeighbors(x, y) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                const col = (x + i + this.cols) % this.cols;
                const row = (y + j + this.rows) % this.rows;
                sum += this.grid[col][row];
            }
        }
        sum -= this.grid[x][y];
        return sum;
    }

    toggleCell(x, y) {
        const col = Math.floor(x / this.cellSize);
        const row = Math.floor(y / this.cellSize);
        if (col >= 0 && col < this.cols && row >= 0 && row < this.rows) {
            this.grid[col][row] = !this.grid[col][row];
        }
    }
}

function setupGame(canvasId, initialState) {
    const canvas = document.getElementById(canvasId);
    const cellSize = 12;
    canvas.width = 204;
    canvas.height = 204;
    
    const ctx = canvas.getContext('2d');
    const game = new GameOfLife(canvas.width, canvas.height, cellSize, initialState);

    function animate() {
        if (isPlaying) {
            game.nextGen();
        }
        game.draw(ctx);
    }

    canvas.addEventListener('click', (event) => {
        if (!isPlaying) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            game.toggleCell(x, y);
            game.draw(ctx);
        }
    });

    return {
        game: game,
        animate: animate,
        ctx: ctx
    };
}

let leftGame, rightGame;
let intervalId;
let isPlaying = true;

function togglePlay() {
    if (isPlaying) {
        clearInterval(intervalId);
        playPauseButton.textContent = 'Play';
    } else {
        intervalId = setInterval(() => {
            leftGame.animate();
            rightGame.animate();
        }, 500);
        playPauseButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Custom starting states (17x17 grid)
const leftInitialState = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

const rightInitialState = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0],
    [0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
