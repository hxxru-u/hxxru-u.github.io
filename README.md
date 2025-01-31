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

### Web Dropcap notes

How do we implement good dropcaps for web pages in the first place? Web dropcaps posed several challenges to our (Gwern's) implementation of 5 dropcap fonts in March 2019:
          
            browser positioning: cross-browser support is nominally good but browsers differ subtly in spacing details, which means that a dropcap which looks good in Google Chrome will look bad in Mozilla Firefox & vice-versa. We solve this with hard work & CSS.
            font size: dropcap fonts are often quite large, and waste bandwidth & time while being both purely decorative & highly user-visible; andWe solve this by subsetting: splitting dropcap fonts into one font file per letter, so instead of downloading a megabyte font file with all the dropcaps, the browser only downloads 4–20kb and it’s much faster.Usually only 1 dropcap is used on a page, but a typical dropcap font will slowly download as much as a megabyte in order to render 1 single letter. CSS font loads avoid downloading font files which are entirely unused, but they must download the entire font file if anything in it is used, so it doesn’t matter that only one letter gets used. To avoid this, we split each dropcap font up into a single font file per letter and use CSS to load all the font files; since only 1 font file is used at all, only 1 gets downloaded, and it will be ~4kb rather than 168kb. This has been done for all the dropcap fonts used, and the necessary CSS can be seen in fonts.css.
            no dark mode: dropcaps do not usually come with dark-mode in mind.We focus on monochrome dropcaps which will look good when inverted in dark-mode, and so don’t really need a separate dark-mode. (This would not work so well for more illustrated or ‘historiated’ initials, which is why the dropcat had to come with separate light & dark mode sets.)
          
          Dropcaps are set in the Markdown page metadata, parsed by Hakyll to substitute into the final HTML as a <body> class, which applies page-wide to ‘the first letter of the first paragraph after an .abstract’ (which allows sub-essays like appendices to get dropcaps of their own as long as they have a written abstract). dropcaps can be forcibly set on specific paragraphs as well using a <div> wrapper, which is useful for testing.


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

Would you like me to add any additional sections to this summary?