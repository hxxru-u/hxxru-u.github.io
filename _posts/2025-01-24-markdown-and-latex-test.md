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
