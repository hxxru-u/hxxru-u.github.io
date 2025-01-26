---
title: "Game of Life"
categories:
  - blog
tags:
  - Dynamical Systems
  - Automata Theory
  - Game of Life
excerpt: "On cellular automata."
background_game: false
---

{% include game-advanced.html %}

The Game of Life is a fascinating example of a discrete dynamical system. While most familiar dynamical systems operate in continuous space and time (like planetary motion or fluid dynamics), the Game of Life shows how rich behavior can emerge from discrete rules on a simple grid.

## The Game as a Dynamical System

At its core, a dynamical system is a set of states that evolve according to fixed rules. In the Game of Life:
- The **state space** is the set of all possible grid configurations (2^n for an n-cell grid)
- The **evolution rule** is the set of four simple rules for cell birth and death
- The **trajectories** are the sequences of grid states over time

What makes the Game of Life particularly interesting is its mix of stability and chaos:
- Some initial conditions lead to stable configurations
- Others lead to periodic oscillations
- And some lead to chaotic, unpredictable patterns

## Stability and Periodicity

The patterns we observe in the Game of Life can be understood as different types of stable points in the dynamical system:

- **Still lifes** are fixed points - configurations that map to themselves under the evolution rules
- **Oscillators** are periodic orbits - sequences of states that repeat after a fixed number of steps
- **Spaceships** are a special type of oscillator that combines periodic behavior with spatial translation

This is analogous to how a pendulum might:
- Come to rest (fixed point)
- Swing back and forth forever in ideal conditions (periodic orbit)
- Or exhibit more complex behavior when driven by external forces

Conway's Game of Life is a perfect example of how simple rules can create complex behavior. It's a cellular automaton where each cell follows just four rules:

1. Any live cell with fewer than two live neighbors dies (underpopulation)
2. Any live cell with two or three live neighbors lives on to the next generation
3. Any live cell with more than three live neighbors dies (overpopulation)
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction)

## Pattern Types

In the Game of Life, patterns can be classified into several categories based on their behavior:

### Still Lifes
These are patterns that don't change from one generation to the next. They are stable configurations.

#### The Block
<div class="game-container small-game">
  <canvas id="block-canvas"></canvas>
  <button class="game-button" id="block-btn"><i class="fas fa-pause"></i></button>
</div>

The simplest still life - a 2x2 square that remains unchanged.

#### The Beehive
<div class="game-container small-game">
  <canvas id="beehive-canvas"></canvas>
  <button class="game-button" id="beehive-btn"><i class="fas fa-pause"></i></button>
</div>

A hexagonal arrangement that demonstrates how cells can form stable structures.

### Oscillators
These patterns return to their initial state after a fixed number of generations. The number of steps before repetition is called the "period".

#### The Blinker
<div class="game-container small-game">
  <canvas id="blinker-canvas"></canvas>
  <button class="game-button" id="blinker-btn"><i class="fas fa-pause"></i></button>
</div>

The simplest oscillator with period 2, alternating between horizontal and vertical lines.

#### The Beacon
<div class="game-container small-game">
  <canvas id="beacon-canvas"></canvas>
  <button class="game-button" id="beacon-btn"><i class="fas fa-pause"></i></button>
</div>

A period 2 oscillator where two blocks appear to flash.

#### The Pulsar
<div class="game-container large-game">
  <canvas id="pulsar-canvas"></canvas>
  <button class="game-button" id="pulsar-btn"><i class="fas fa-pause"></i></button>
</div>

One of the largest and most symmetric period 3 oscillators.

### Spaceships
These are patterns that translate themselves across the grid, returning to their initial state but in a different location.

#### The Glider
<div class="game-container small-game">
  <canvas id="glider-canvas"></canvas>
  <button class="game-button" id="glider-btn"><i class="fas fa-pause"></i></button>
</div>

The smallest and most common spaceship, moving diagonally across the grid.

#### The Lightweight Spaceship (LWSS)
<div class="game-container small-game">
  <canvas id="lwss-canvas"></canvas>
  <button class="game-button" id="lwss-btn"><i class="fas fa-pause"></i></button>
</div>

A spaceship that moves horizontally, demonstrating more complex movement patterns.

<style>
.small-game {
  height: 200px;
  width: 400px;
  position: relative;
  margin: 20px 0;
  border: 1px solid rgba(211, 156, 164, 0.2);
  border-radius: 4px;
}

.large-game {
  height: 600px;
  width: 600px;
  position: relative;
  margin: 20px 0;
  border: 1px solid rgba(211, 156, 164, 0.2);
  border-radius: 4px;
}

.small-game canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
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

  GameOfLife.prototype.createGrid = function() {
    const pattern = this.config.initialPattern;
    const grid = centerPattern(pattern, this.rows, this.cols);
    return grid;
  };

  // Block configuration
  const block = new GameOfLife({
    canvasId: 'block-canvas',
    playPauseBtnId: 'block-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 400, height: 200 },
    colors: {
      cell: '#d39ca4',
      newCell: '#f54242'
    },
    initialPattern: [
      [1, 1],
      [1, 1]
    ]
  });

  // Beehive configuration
  const beehive = new GameOfLife({
    canvasId: 'beehive-canvas',
    playPauseBtnId: 'beehive-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 400, height: 200 },
    colors: {
      cell: '#d39ca4',
      newCell: '#f54242'
    },
    initialPattern: [
      [0, 1, 1, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 0]
    ]
  });

  // Blinker configuration
  const blinker = new GameOfLife({
    canvasId: 'blinker-canvas',
    playPauseBtnId: 'blinker-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 400, height: 200 },
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
  const beacon = new GameOfLife({
    canvasId: 'beacon-canvas',
    playPauseBtnId: 'beacon-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 400, height: 200 },
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

  // Glider configuration
  const glider = new GameOfLife({
    canvasId: 'glider-canvas',
    playPauseBtnId: 'glider-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 400, height: 200 },
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

  // Pulsar configuration
  const pulsar = new GameOfLife({
    canvasId: 'pulsar-canvas',
    playPauseBtnId: 'pulsar-btn',
    cellSize: 30,
    updateInterval: 300,
    dimensions: { width: 600, height: 600 },
    colors: {
      cell: '#d39ca4',
      newCell: '#f54242'
    },
    initialPattern: [
      [0,0,1,1,1,0,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,0,0,0,0,1,0,1,0,0,0,0,1],
      [1,0,0,0,0,1,0,1,0,0,0,0,1],
      [1,0,0,0,0,1,0,1,0,0,0,0,1],
      [0,0,1,1,1,0,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,1,1,1,0,0,0,1,1,1,0,0],
      [1,0,0,0,0,1,0,1,0,0,0,0,1],
      [1,0,0,0,0,1,0,1,0,0,0,0,1],
      [1,0,0,0,0,1,0,1,0,0,0,0,1],
      [0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,1,1,1,0,0,0,1,1,1,0,0]
    ]
  });

  // LWSS configuration
  const lwss = new GameOfLife({
    canvasId: 'lwss-canvas',
    playPauseBtnId: 'lwss-btn',
    cellSize: 20,
    updateInterval: 300,
    dimensions: { width: 400, height: 200 },
    colors: {
      cell: '#d39ca4',
      newCell: '#f54242'
    },
    initialPattern: [
      [0, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0]
    ]
  });
});
</script>

These patterns demonstrate the three fundamental types of behavior in the Game of Life:
- **Still Lifes** are static patterns that don't change
- **Oscillators** are patterns that repeat in a fixed cycle
- **Spaceships** are patterns that move across the grid while maintaining their shape

What fascinates me about cellular automata like the Game of Life is how they sit at the intersection of mathematics, computer science, and art. They're deterministic systems that can generate endless variations of patterns, some predictable and some chaotic. They remind us that complexity doesn't always require complex rules - sometimes the simplest rules can create the most interesting behaviors.

The Game of Life is also a reminder that local interactions can have global effects. Each cell only knows about its immediate neighbors, yet together they can create patterns that move, grow, and evolve across the entire grid. It's a beautiful illustration of emergence - how collective behavior can arise from individual actions.
