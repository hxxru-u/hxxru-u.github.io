---
title: "Testing Markdown and LaTeX"
date: 2025-01-24T01:00:00+09:00
categories:
  - blog
tags:
  - markdown
  - latex
  - test
mathjax: true
---

This is a test post demonstrating various Markdown and LaTeX features.

## Text Formatting

Here are some basic text formatting options:
- *Italic text* or _also italic_
- **Bold text** or __also bold__
- ***Bold and italic*** or ___also bold and italic___
- ~~Strikethrough text~~
- `Inline code`

## Lists

### Unordered List
* Item 1
* Item 2
  * Subitem 2.1
  * Subitem 2.2
* Item 3

### Ordered List
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

## Blockquotes

> This is a blockquote
> It can span multiple lines
>
> And have multiple paragraphs

## Code Blocks

```python
def hello_world():
    print("Hello, world!")
    return True

# This is a comment
for i in range(3):
    hello_world()
```

## LaTeX Equations

Here are some example equations:

Inline equation: $E = mc^2$

Display equation:

$$
\begin{align*}
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\left(\mathbf{J} + \epsilon_0\frac{\partial \mathbf{E}}{\partial t}\right)
\end{align*}
$$

A more complex example:

$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
\begin{pmatrix}
x_1 \\
x_2 \\
x_3
\end{pmatrix} =
\begin{pmatrix}
b_1 \\
b_2 \\
b_3
\end{pmatrix}
$$

## Advanced LaTeX Examples

### Complex Mathematical Expressions

1. **Integrals and Limits**
   
   Double integral with limits:
   $$\iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx\,dy = \oint_C P\,dx + Q\,dy$$

   Triple integral:
   $$\iiint_V f(x,y,z)\,dx\,dy\,dz = \lim_{n \to \infty} \sum_{i=1}^n f(x_i,y_i,z_i)\Delta V_i$$

2. **Matrices and Determinants**
   
   Matrix with brackets:
   $$\begin{bmatrix} 
   a_{11} & a_{12} & a_{13} \\
   a_{21} & a_{22} & a_{23} \\
   a_{31} & a_{32} & a_{33}
   \end{bmatrix}$$

   Determinant:
   $$\det(A) = \begin{vmatrix}
   a & b & c \\
   d & e & f \\
   g & h & i
   \end{vmatrix} = aei + bfg + cdh - ceg - bdi - afh$$

3. **Series and Sums**
   
   Infinite series:
   $$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

   Product notation:
   $$\prod_{i=1}^{n} x_i = x_1 \times x_2 \times \cdots \times x_n$$

4. **Physics and Engineering**
   
   Maxwell's equations:
   \begin{align}
   \nabla \cdot \bold{E} &= \frac{\rho}{\varepsilon_0} \\
   \nabla \cdot \bold{B} &= 0 \\
   \nabla \times \bold{E} &= -\frac{\partial \bold{B}}{\partial t} \\
   \nabla \times \bold{B} &= \mu_0\left(\bold{J} + \varepsilon_0\frac{\partial \bold{E}}{\partial t}\right)
   \end{align}

5. **Probability and Statistics**
   
   Normal distribution:
   \[f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}\]

   Binomial coefficient:
   \[\binom{n}{k} = \frac{n!}{k!(n-k)!}\]

6. **Complex Analysis**
   
   Cauchy's integral formula:
   \[f(a) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z-a}\,dz\]

   Residue theorem:
   \[\oint_C f(z)\,dz = 2\pi i \sum_{k=1}^n \operatorname{Res}(f,a_k)\]

7. **Quantum Mechanics**
   
   Schrödinger equation:
   \[i\hbar\frac{\partial}{\partial t}\Psi(\bold{r},t) = \left[-\frac{\hbar^2}{2m}\nabla^2 + V(\bold{r},t)\right]\Psi(\bold{r},t)\]

   Dirac notation:
   \[\langle\psi|\hat{H}|\phi\rangle = \int_{-\infty}^{\infty} \psi^*(x)\hat{H}\phi(x)\,dx\]

8. **Differential Geometry**
   
   Christoffel symbols:
   \[\Gamma^k_{ij} = \frac{1}{2}g^{kl}\left(\frac{\partial g_{jl}}{\partial x^i} + \frac{\partial g_{il}}{\partial x^j} - \frac{\partial g_{ij}}{\partial x^l}\right)\]

   Riemann curvature tensor:
   \[R^a_{bcd} = \partial_c\Gamma^a_{bd} - \partial_d\Gamma^a_{bc} + \Gamma^e_{bd}\Gamma^a_{ce} - \Gamma^e_{bc}\Gamma^a_{de}\]

## Links and Images

### External Links
- [GitHub](https://github.com)
- [arXiv](https://arxiv.org)
- [Wikipedia](https://wikipedia.org)

### Reference-style Links
Here's a link to [Google][1] and another to [OpenAI][2].

[1]: https://google.com
[2]: https://openai.com

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| Cell 7   | Cell 8   | Cell 9   |

## Task Lists

- [x] Write the test post
- [x] Include LaTeX examples
- [x] Add code blocks
- [ ] Add images
- [ ] Review formatting

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

---

This post demonstrates the basic Markdown and LaTeX features supported by Jekyll with the Minimal Mistakes theme. Feel free to use this as a reference for your own posts!
