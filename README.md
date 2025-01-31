# General ToDos

ok this is the fork

i will test experimental features here

- [ ] Dropcat inegration for real. seems nontrivial
- [ ] color tuning
- [x] game of life post
- [ ] game of life interactive mode
- [x] change post links font in index
- [ ] make code block not blinding white oh gosh
- [ ] cute art
- [ ] links to socials?
- [ ] steal stuff from gwern
- [ ] specifically, the abstract, and the importance / finished parameters at the start of each post...
- [ ] optimize typography in general
- [ ] optimize website development workflow
- [ ] multilingual journal-y posts
- [ ] more poetry, music, and gallery additions



## Content ToDos

### Posts to Write

- [ ] favorites: people, resources, albums(topsters), posts, etc
- [ ] Influences
- [ ] Meta-post: talking to claude
- [ ] Intuitions for what LLMs are
- [ ] CV?
- [ ] Music and Predictive Processing
- [ ] Fun Theory stuff
- [ ] Embedded Agency
- [ ] Complex Novelty
- [ ] On Translation
 
### Tags to Make

- [ ] Aesthetics
- [ ] Music Review
- [ ] Predictive Processing
- [ ] Neuroscience
- [ ] Talking to Claude



# Dropcap Implementation

## File Structure
```
assets/
└── fonts/
    └── dropcaps/
        ├── svg-dropcaps/     # Contains ~10 SVG dropcap letters
        │   ├── A.svg
        │   └── B.svg
        └── ttf-dropcaps/     # Contains full alphabet TTF
            └── complete-dropcaps.ttf
```

## Implementation Steps

1. **CSS Setup**
   - Create `_sass/_dropcaps.scss`
   - File defines two font families:
     - `DropcapSVG` for available SVG letters (higher quality)
     - `DropcapTTF` as fallback for other letters
   - CSS automatically selects SVG when available, falls back to TTF
   - Designed for dark mode by default

2. **Jekyll Layout Integration**
   Add to `_layouts/post.html`:
   ```liquid
   {% if page.dropcap %}
     {{ content | replace_first: '<p>', '<p><span class="dropcap">' | append: content[0] | append: '</span>' | remove_first: content[0] }}
   {% else %}
     {{ content }}
   {% endif %}
   ```

3. **Usage in Posts**
   Add to post front matter:
   ```yaml
   ---
   layout: post
   title: Your Post Title
   dropcap: true
   ---
   ```

## Features
- SVG prioritized over TTF when available
- Browser-specific positioning adjustments
- Dark mode by default
- Automatic first letter detection
- No manual positioning needed per post

## Technical Notes
- SVG files provide best quality for available letters
- TTF provides complete alphabet coverage
- Browser-specific CSS ensures consistent positioning
```