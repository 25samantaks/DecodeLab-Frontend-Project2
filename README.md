# The Art of Fluidity 🌊
A responsive web design project built with **HTML, CSS and JavaScript**.

## Project idea
 Like water, a good interface adapts to its surroundings.

This project demonstrates:
- Mobile-first CSS
- Content-driven breakpoints
- CSS Grid for macro layout
- Flexbox for micro layout
- Fluid units: `%`, `rem`, `vw`
- `clamp()` for fluid typography
- Native Popover API for mobile navigation
- Semantic HTML
- Accessible focus states and skip navigation
- Touch-friendly controls
- Responsive FAQ and resource section
- Reduced-motion support

## Folder structure
art-of-fluidity/
├── index.html
├── style.css
└── script.js

## Run locally
No installation is required.

1. Download or clone this repository.
2. Open `index.html` in a browser.

For the best development experience, use VS Code with the Live Server extension.

## Responsive strategy
The project uses three stages:

- **Base:** mobile-first layout
- **48rem:** tablet/small desktop enhancement
- **70rem:** larger desktop enhancement

The breakpoints are not tied to specific devices. They are chosen when the content benefits from additional space.

## Main concepts demonstrated

### Grid — the architect

CSS Grid handles two-dimensional structure:

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

### Flexbox — the flow

Flexbox handles one-dimensional alignment:

```css
.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

### Fluid typography

```css
h1 {
  font-size: clamp(3.2rem, 13vw, 7rem);
}
```

### Native navigation

The mobile menu uses:

```html
<button popovertarget="site-menu">Menu</button>
<nav id="site-menu" popover>...</nav>
```

## Q&A

**Why mobile-first?**  
It creates a simple foundation and progressively enhances the design.

**Why Grid and Flexbox together?**  
Grid is excellent for macro page structure, while Flexbox is excellent for one-dimensional component alignment.

**Why `clamp()`?**  
It lets a value grow fluidly between a minimum and maximum.

**Why accessibility?**  
Accessibility is part of quality web development, not an optional visual feature.

## Suggested commit message

`Create responsive Art of Fluidity landing page`

Made for a frontend development project.
