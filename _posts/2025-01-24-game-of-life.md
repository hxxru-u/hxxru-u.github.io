---
title: "Game of Life"
categories:
  - blog
tags:
  - Dynamical Systems
  - Automata Theory
  - Game of Life
excerpt: "On cellular automata."
---

{% include game-advanced.html %}

Conway's Game of Life is a perfect example of how simple rules can create complex behavior. It's a cellular automaton where each cell follows just four rules:

1. Any live cell with fewer than two live neighbors dies (underpopulation)
2. Any live cell with two or three live neighbors lives on to the next generation
3. Any live cell with more than three live neighbors dies (overpopulation)
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction)

## Common Patterns

Let's look at some classic patterns that emerge from these simple rules:

### The Glider
<div class="game-container small-game">
  <canvas id="glider-canvas"></canvas>
  <button class="game-button" id="glider-btn"><i class="fas fa-pause"></i></button>
</div>

This simple pattern moves diagonally across the grid, demonstrating how local rules can create movement.

### The Blinker
<div class="game-container small-game">
  <canvas id="blinker-canvas"></canvas>
  <button class="game-button" id="blinker-btn"><i class="fas fa-pause"></i></button>
</div>

The simplest oscillator, alternating between two states.

### The Beacon
<div class="game-container small-game">
  <canvas id="beacon-canvas"></canvas>
  <button class="game-button" id="beacon-btn"><i class="fas fa-pause"></i></button>
</div>

A more complex oscillator that demonstrates both stable and changing cells.

<style>
.small-game {
  height: 200px;
  width: 200px;
  position: relative;
  margin: 20px 0;
  border: 1px solid rgba(211, 156, 164, 0.2);
  border-radius: 4px;
  background: #ffffff; /* Add background color for visibility */
}

.small-game canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  border: 1px solid #ccc; /* Add border for debugging */
}

.small-game .game-button {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1000;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Debug function to test canvas rendering
  function testCanvasRendering(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    
    // Test draw a rectangle
    ctx.fillStyle = '#d39ca4';
    ctx.fillRect(0, 0, 50, 50);
    console.log(`Canvas ${canvasId} initialized:`, {
      width: canvas.width,
      height: canvas.height,
      context: !!ctx
    });
  }

  // Modified GameOfLife class initialization
  class GameOfLifeDemo extends GameOfLife {
    constructor(config) {
      super(config);
      console.log(`GameOfLife ${config.canvasId} initialized:`, {
        rows: this.rows,
        cols: this.cols,
        gridState: this.grid
      });
    }

    drawGrid() {
      console.log(`Drawing grid for ${this.config.canvasId}`);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          if (this.grid[i][j]) {
            const centerX = j * this.config.cellSize + this.config.cellSize/2;
            const centerY = i * this.config.cellSize + this.config.cellSize/2;
            
            // Debug: draw a simple square instead of heart for testing
            this.ctx.fillStyle = this.newCells.has(`${i},${j}`) ? 
              this.config.colors.newCell : 
              this.config.colors.cell;
            
            this.ctx.fillRect(
              centerX - this.config.cellSize/4,
              centerY - this.config.cellSize/4,
              this.config.cellSize/2,
              this.config.cellSize/2
            );
          }
        }
      }
    }
  }

  // Test canvas rendering first
  ['glider-canvas', 'blinker-canvas', 'beacon-canvas'].forEach(testCanvasRendering);

  // Create game instances with debug logging
  const glider = new GameOfLifeDemo({
    canvasId: 'glider-canvas',
    playPauseBtnId: 'glider-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 200, height: 200 },
    colors: {
      cell: '#d39ca4',
      newCell: '#f54242'
    },
    initialPattern: [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1]
    ]
  });

  // Center the initial pattern
  const centerPattern = (pattern, rows, cols) => {
    const startRow = Math.floor((rows - pattern.length) / 2);
    const startCol = Math.floor((cols - pattern[0].length) / 2);
    const grid = Array(rows).fill().map(() => Array(cols).fill(false));
    
    for (let i = 0; i < pattern.length; i++) {
      for (let j = 0; j < pattern[0].length; j++) {
        if (pattern[i][j]) {
          grid[startRow + i][startCol + j] = true;
        }
      }
    }
    return grid;
  };

  // Override the createGrid method to center patterns
  GameOfLife.prototype.createGrid = function() {
    const pattern = this.config.initialPattern;
    const grid = centerPattern(pattern, this.rows, this.cols);
    return grid;
  };

  // Blinker configuration
  const blinker = new GameOfLifeDemo({
    canvasId: 'blinker-canvas',
    playPauseBtnId: 'blinker-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 200, height: 200 },
    colors: {
      cell: '#d39ca4',
      newCell: '#f54242'
    },
    initialPattern: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ]
  });

  // Beacon configuration
  const beacon = new GameOfLifeDemo({
    canvasId: 'beacon-canvas',
    playPauseBtnId: 'beacon-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 200, height: 200 },
    colors: {
      cell: '#d39ca4',
      newCell: '#f54242'
    },
    initialPattern: [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 1, 1]
    ]
  });
});
</script>

These patterns demonstrate how the Game of Life can create various behaviors from simple rules. The glider shows movement, while the blinker and beacon show different types of oscillation.

What fascinates me about cellular automata like the Game of Life is how they sit at the intersection of mathematics, computer science, and art. They're deterministic systems that can generate endless variations of patterns, some predictable and some chaotic. They remind us that complexity doesn't always require complex rules - sometimes the simplest rules can create the most interesting behaviors.

The Game of Life is also a reminder that local interactions can have global effects. Each cell only knows about its immediate neighbors, yet together they can create patterns that move, grow, and evolve across the entire grid. It's a beautiful illustration of emergence - how collective behavior can arise from individual actions.
