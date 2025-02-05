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

- [ ] favorites: people, resources, albums, posts, etc
- [ ] Influences
- [ ] Meta-post: talking to claude
- [ ] Intuitions for what LLMs are
- [ ] CV?
- [ ] Music and Predictive Processing
- [ ] Fun Theory stuff
- [ ] Embedded Agency
- [ ] Complex Novelty
- [ ] On Translation
- [ ] Eudaimonia
- [ ] Complex Novelty
- [ ] My Knowledge Garden (I should move to Quartz)
 
### Tags to Make

- [ ] Aesthetics
- [ ] Music Review
- [ ] Predictive Processing
- [ ] Neuroscience
- [ ] Talking to Claude



# Dropcap Implementation

The site uses decorative dropcap letters at the beginning of posts. The implementation combines SVG fonts for specific letters with TTF fallbacks for the complete alphabet.

### File Structure

```
.
├── _includes/
│   └── dropcap.html          # HTML template for rendering dropcaps
├── _sass/
│   ├── _fonts.scss           # Font-face definitions for dropcaps
│   └── dropcaps.scss         # Dropcap styling and positioning
├── assets/
│   ├── css/
│   │   └── main.scss         # Main stylesheet that imports all SCSS files
│   └── fonts/
│       └── dropcaps/
│           ├── svg-dropcaps/  # SVG fonts for specific letters (a,b,c,f,g,i,q,t,v)
│           └── ttf-dropcaps/  # TTF fonts for all letters (A-Z)
```

### Components

1. **Font Files**
   - SVG fonts: High-quality vector fonts available for specific letters (a,b,c,f,g,i,q,t,v)
   - TTF fonts: Complete alphabet (A-Z) using Goudy Initialen font as fallback

2. **SCSS Files**
   - `_fonts.scss`: Defines font-face rules for both SVG and TTF fonts
   - `dropcaps.scss`: Contains styling for the dropcap class
     - Uses theme variables ($text-color, $background-color) for consistent theming
     - Includes browser-specific adjustments for Firefox and WebKit

3. **HTML Template**
   - `dropcap.html`: Include file that wraps the first letter in a dropcap span
   - Supports both background_game layout and standard posts

### Usage

To add a dropcap to a post:

1. Add `dropcap: true` to the post's front matter:
   ```yaml
   ---
   title: "Your Post Title"
   dropcap: true
   ---
   ```

2. The first letter of the post's content will automatically be styled as a dropcap.

### Font Loading Strategy

The implementation uses a progressive enhancement approach:

1. For supported letters (a,b,c,f,g,i,q,t,v):
   - Tries to load the SVG font first
   - Falls back to TTF if SVG fails or isn't supported

2. For other letters:
   - Uses the TTF version directly

### Theme Integration

- Dropcaps automatically adapt to the site's theme
- Colors are inherited from theme variables:
  - Text color uses `$text-color`
  - Background matches site with `$background-color`

### Browser Compatibility

- Modern browsers: Full SVG and TTF support
- Older browsers: Graceful fallback to TTF fonts
- Includes specific adjustments for:
  - Firefox (uses @-moz-document)
  - WebKit browsers (uses @media query)