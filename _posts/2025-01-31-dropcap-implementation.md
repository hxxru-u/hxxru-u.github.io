---
title: "Dropcap Implementation"
layout: background_game
categories:
  - blog
tags:
  - Typography
  - Style
excerpt: "On pretty letters, and what I think it means to have 'style'"
dropcap: true
---

Typography has always been a cornerstone of good web design. This post documents how I implement dropcaps on my site, heavily inspired by [Gwern's excellent work](https://gwern.net/dropcap). Using his SVG assets, I'm rendering dropcaps on my Jekyll deployed page (Gwern uses Hakyll for his site, which is based on Haskell and *way* more involved). 

## Motivation

I don't know all that much about web typography (or web development in general). Most I've ever forayed into that corner of knowledge is to come across typography [mentioned](https://youtu.be/SO83KQuuZvg?si=jFtanhdHkLEyGDF4) by [coding nerds](http://tom7.org/bovex/) that I learn from.

What I do have, however, is an appreciation of things that are pretty. Especially when that things is cleverly engineered and optimized, whether it be a song, an outfit, a theory of everything (link to post here later), or a website. When I came across [Gwern's article about cats](https://gwern.net/cat-knocking) that *starts with a [CAT dropcap](https://gwern.net/dropcap#dropcat)*, I shed a tear of joy. I'm not at the level of trying to generate new SVG dropcap font files using a custom workflow like him, but it was obvious to me that I should at least implement dropcaps at all (even if I stole them from Gwern). In a good future, I'll have enough powerful aligned AIs that can streamline a process for auto-generating a relevant dropcap based on the content of a post. 

## Implementation

Jekyll is meant to be easy to use, integrating well with GitHub Pages that provides an abundance of packaged themes. But as with most things in web development, what starts as a "simple feature" quickly spirals into a rabbit hole of edge cases and browser quirks.

The first challenge was just getting the SVGs to render correctly. Gwern's assets are beautifully crafted with detailed grayscale shading, but preserving that shading turned out to be surprisingly tricky. SVGs can be included in HTML in multiple ways, and each method has its own quirks with how it handles styles. After much trial and error, I ended up writing a JavaScript module that:
1. Fetches the SVG file
2. Parses its internal styles
3. Carefully applies those styles to each element
4. Ensures the grayscale values don't get mangled

Then came the sizing issues. A dropcap should span exactly 5 lines of text - sounds simple enough, right? Well, turns out line height isn't as straightforward as you might think. Different browsers render text slightly differently, and what spans 5 lines in Chrome might span 4.5 or 5.5 in Firefox. Add in different screen sizes and zoom levels, and this is pretty annoying.

But wait, there's more! Not every letter has an SVG version (yet), so I needed a fallback system using TTF fonts. Now I had to ensure that both SVG and TTF versions:
- Span exactly the same height
- Align properly with the text
- Maintain consistent spacing
- Look good in both light and dark themes
- Don't break when the user resizes their window

And let's not forget about my custom theme with its background game of life. The dropcaps needed to play nice with all that without causing layout shifts or z-index wars. Every time I fixed one issue, two more would pop up. It was like playing whack-a-mole with CSS. Would not reccommend. 

After a lot of pages deployed with missing dropcaps, I finally got everything working consistently. The solution involved:

- An overly complex SCSS hierarchy
- A JavaScript module for extracting SVG shade values with regex and translating to CSS
- Fallback TTF fonts
- More em units than there should have been.

Specifically, the SVG extraction was pretty interesting from a coding standpoint. Each SVG file comes with its own internal style definitions that look something like:

```css
.A1{fill:#333333}
.A2{fill:#666666}
/* ... more shades ... */
```

These classes define the grayscale shading that makes the letters look so good. The tricky part was that you can't just dump this SVG into the HTML and expect it to work - the styles need to be carefully preserved and translated. My solution uses a regex to parse these style definitions:

```javascript
const ruleRegex = /\.([A-Z]{1,2})\{([^}]+)\}/g;
```

This captures two groups: the class name (like 'A1') and the style content (like 'fill:#333333'). Then for each element in the SVG that has one of these classes, I apply the styles directly to the element. This preserves all the detail while making sure it plays nice with the rest of the page.

It's a bit hacky, but it works. There's probably many smarter ways to do this. For now, it's fine.
