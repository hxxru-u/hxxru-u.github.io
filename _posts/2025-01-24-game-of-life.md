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

Conway's Game of Life is a perfect example of how simple rules can create complex behavior. It's a cellular automaton where each cell follows just four rules:

1. Any live cell with fewer than two live neighbors dies (underpopulation)
2. Any live cell with two or three live neighbors lives on to the next generation
3. Any live cell with more than three live neighbors dies (overpopulation)
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction)

These rules create fascinating patterns and behaviors. Some configurations stabilize, some oscillate, and some move across the grid like spaceships. The game is a metaphor for the emergence of complex systems from simple rules - a theme that appears throughout nature, from crystal formation to biological patterns.

I've implemented the Game of Life as the background of this website, with a few artistic choices:
- Cells are represented as 8-bit hearts
- New cells appear in bright red before fading to a muted rose pink
- The grid wraps around at the edges, creating a toroidal universe
- You can pause/play the simulation or click to toggle cells

What fascinates me about cellular automata like the Game of Life is how they sit at the intersection of mathematics, computer science, and art. They're deterministic systems that can generate endless variations of patterns, some predictable and some chaotic. They remind us that complexity doesn't always require complex rules - sometimes the simplest rules can create the most interesting behaviors.

The Game of Life is also a reminder that local interactions can have global effects. Each cell only knows about its immediate neighbors, yet together they can create patterns that move, grow, and evolve across the entire grid. It's a beautiful illustration of emergence - how collective behavior can arise from individual actions.
