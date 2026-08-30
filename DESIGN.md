---
name: Celestial Chronology
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#a5e7ff'
  on-secondary: '#003543'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#ffffff'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffe16d'
  on-tertiary-container: '#776300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 100%
    letterSpacing: 0.1em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 120%
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 120%
  body-romantic:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 160%
  body-main:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: 180%
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.3em
  label-mono:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 100%
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  orbit-margin: 8vw
  star-gutter: 2rem
  chapter-padding: 20vh
  element-gap: 4rem
---

## Brand & Style

The design system is centered on a **Cinematic Romantic Sci-Fi** aesthetic. It moves away from traditional interface patterns—eschewing boxes, grids, and dashboards—in favor of an immersive, high-fidelity digital scrapbook that feels like a premium film title sequence.

The experience is defined by **emotional minimalism** and **atmospheric depth**. Every element is treated as a celestial body floating in a vast, interactive void. The interface should evoke a sense of wonder, timelessness, and intimacy, utilizing "Glassmorphism" not for structural containers, but for ethereal light refraction and ambient glows that guide the user through their personal romantic history.

## Colors
The palette is rooted in the infinite black of space (#020204). Color is used sparingly as a narrative device to represent different "Chapters" or milestones in the relationship. 

Each chapter has a dedicated **Primary Hue** (for core focus) and a **Glow Hue** (for ambient lighting and particles). Navigation and global elements primarily use Silver and White to maintain a premium, neutral bridge between the vibrant planetary themes. Use high-range gradients (0% to 100% opacity) to create nebula-like dust effects in the background that shift color as the user scrolls through different chapters.

## Typography
Typography is the primary structural element of this design system. 

- **Display & Headlines:** Use *Playfair Display* with generous letter spacing to evoke the feeling of a film's opening credits.
- **Body & Metadata:** Use *Inter* in light weights (300) for a technical, minimalist contrast. 
- **Narrative Text:** Use *Playfair Display Italic* for personal quotes or memory descriptions to create an intimate, handwritten feel.

Animation Note: Headlines should utilize a "Cinematic Reveal"—letters fading in sequentially with a subtle blur-to-focus transition.

## Layout & Spacing
This system uses a **Fluid Orbital Layout** rather than a traditional grid. Content should feel like it is floating in zero-gravity. 

- **Vertical Journey:** The primary navigation is a vertical scroll. Each chapter is separated by `20vh` of empty space to allow the background nebula and stars to breathe.
- **Asymmetric Balance:** Photos and text blocks should be staggered (e.g., Image at 20% left, Text at 60% right) to create a dynamic, non-linear flow.
- **Safe Zones:** Maintain an `orbit-margin` of 8vw on either side to ensure content doesn't touch the screen edges, preserving the "lost in space" feeling.

## Elevation & Depth
Depth is achieved through **Z-Axis Layering and Focal Blur** rather than shadows.

- **Background Layer:** Deep black with subtle noise (dust) and slow-moving, twinkling SVG particles.
- **Mid-Ground Layer:** Ambient glows (nebula) that react to the mouse cursor or scroll position.
- **Foreground Layer:** The "Physical" memories. Photos and text have a soft `outer-glow` rather than a drop-shadow.
- **Atmospheric Glow:** Use CSS `backdrop-filter: blur()` sparingly on navigation elements to simulate light passing through celestial gas. High-tier elements (Active Chapter) should have a soft, pulsing bloom effect.

## Shapes
The shape language is dominated by **Circles and Soft Rectangles**.

- **Planetary Navigation:** Vertical dots must be perfect circles with a subtle 1px stroke.
- **Memory Frames:** Photos use `rounded-lg` (1rem) but are defined more by their outer glow than their border. 
- **Interactive Elements:** Buttons are either pill-shaped (for primary actions) or "Ghost" style with no background, defined only by light-weight borders and typography.

## Components

### Floating Photo Frames
Photos should never have a hard border. Instead, apply a very soft `0.5rem` corner radius and a faint outer bloom matching the Chapter color. When hovered, the frame should subtly expand (scale 1.02) as if floating closer to the viewer.

### Begin Journey Button
The primary CTA. It should be pill-shaped with a transparent center and a 1px white stroke. Behind the button, a constant, low-frequency "Pulsing Orbital Glow" should emanate, inviting the user to click. On click, trigger a flash-to-white transition.

### Vertical Solar System Navigation
A fixed-position sidebar on the right. Each chapter is a small dot. The "Active" chapter dot should transform into a miniature planetary icon with a ring (if Saturn) or a specific glow color.

### Cinematic Text Reveals
Text blocks should appear using an intersection observer. Use a 1.5s transition with `ease-out`, moving the text upward by 20px while simultaneously increasing opacity and decreasing a `blur(10px)` filter.

### Ambient Atmospheric Glows
Large, low-opacity (5-10%) radial gradients positioned behind the main content. These should slowly drift or rotate to create a sense of living space.