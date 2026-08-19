---
name: Hydration Ritual
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3e494a'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6e797b'
  outline-variant: '#bdc9ca'
  surface-tint: '#006972'
  primary: '#006972'
  on-primary: '#ffffff'
  primary-container: '#4fb3bf'
  on-primary-container: '#004248'
  inverse-primary: '#74d5e1'
  secondary: '#5b5f5d'
  on-secondary: '#ffffff'
  secondary-container: '#dadedb'
  on-secondary-container: '#5d6260'
  tertiary: '#466369'
  on-tertiary: '#ffffff'
  tertiary-container: '#8caab1'
  on-tertiary-container: '#223f45'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#91f1fe'
  primary-fixed-dim: '#74d5e1'
  on-primary-fixed: '#001f23'
  on-primary-fixed-variant: '#004f56'
  secondary-fixed: '#dfe3e1'
  secondary-fixed-dim: '#c3c7c5'
  on-secondary-fixed: '#181d1b'
  on-secondary-fixed-variant: '#434846'
  tertiary-fixed: '#c9e8ef'
  tertiary-fixed-dim: '#adccd3'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#2f4b51'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-timer:
    fontFamily: Plus Jakarta Sans
    fontSize: 80px
    fontWeight: '300'
    lineHeight: 96px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 24px
  gutter: 16px
  section-gap: 48px
  card-padding: 24px
  stack-sm: 8px
  stack-md: 16px
---

## Brand & Style

The design system is built on the philosophy of "Zero-UI Wellness." It positions the interface as a quiet digital companion to a physical ritual—showering. The aesthetic draws from **Tactile Minimalism**, emphasizing sensory calm, airy compositions, and a "restrained" confidence that respects the user's headspace.

The goal is to evoke the feeling of a high-end apothecary (like Aesop) or a meditative soundscape (like Endel). We avoid the anxiety of productivity apps; there are no aggressive progress rings, gamified badges, or high-velocity transitions. Instead, the UI breathes through generous whitespace and soft, organic depth, mirroring the behavior of water and steam.

## Colors

The palette is anchored in "Pure Water White" (#FAFCFD) to create a pristine, clinical yet warm environment. 

- **Primary (Aqua Teal):** Used exclusively for meaningful actions and active states. It provides a sharp, refreshing contrast against the pale background.
- **Accent Glow:** Subtle variations of light aqua are used for background blurs and "hydration glows" that signify active tracking without using heavy borders.
- **Secondary (Soft Sage):** A muted, earthy neutral used for passive containers and unselected states, grounding the cooler water-based tones.
- **Typography:** We use "Deep Slate Navy" (#1E293B) instead of pure black to maintain a softer, more sophisticated editorial feel.

## Typography

The typography system prioritizes legibility in high-moisture/low-focus environments (like a steamy bathroom). **Plus Jakarta Sans** is used for numerals and English text to provide a modern, friendly, and geometric feel. For Korean text, **Pretendard** (not listed in variables but required by the brief) should be used as the primary typeface for its exceptional clarity.

- **Timer States:** Use the `display-timer` role. The light weight (300) prevents the large numbers from feeling aggressive.
- **Hierarchies:** Large headers should use tight letter spacing to appear as cohesive units of information.
- **Labels:** Small labels use uppercase with tracking to denote "metadata" or secondary status information.

## Layout & Spacing

This design system uses a **Fluid Grid** with significantly wider margins than standard apps to enhance the "Airy Calm" aesthetic. 

- **Margins:** A 24px baseline margin ensures content never feels cramped against the device edges.
- **Vertical Rhythm:** Use a 8px linear scale. Section gaps are intentionally large (48px+) to allow the eye to rest between different data sets or controls.
- **Alignment:** Content is generally center-aligned for focused "Ritual" moments (like timers) and left-aligned for informational lists and settings.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than traditional elevation.

- **Shadows:** Use extremely diffused, low-opacity shadows. For cards, apply a `0px 12px 32px rgba(30, 41, 59, 0.04)`. The shadow should be barely perceptible, serving only to lift the card away from the background.
- **Glassmorphism:** For overlays or navigation bars, use a heavy backdrop blur (20px+) with a 60% translucent `Pure Water White` fill. This mimics the look of frosted glass in a bathroom.
- **The Glow:** Active states can use an outer glow using the `Accent Glow` color (#D2F1F8) with a 40px blur to suggest "steam" or "radiance."

## Shapes

The shape language is "Softly Organic." All primary containers, including cards and buttons, utilize a 16px to 24px corner radius.

- **Cards:** Default to `rounded-xl` (24px) to create a friendly, safe appearance.
- **Interactive Elements:** Buttons and input fields use `rounded-lg` (16px).
- **Selection Indicators:** Small badges or tags may use a full pill-shape (32px+) to distinguish them from structural layout elements.

## Components

### Serene Cards
Cards are the primary container. They feature the #FAFCFD background, the subtle 4% shadow, and 24px padding. Borders are avoided; depth is created solely through the shadow and slight color shifts in the background.

### High-Contrast Buttons
Primary CTAs are solid Aqua Teal (#4FB3BF) with white text. They should have a minimum height of 56px to ensure ease of use with wet or moving hands. The corners are 16px.

### State-Aware Choice Cards
- **Unselected:** Soft Sage (#F0F4F1) background, no shadow, subtle Slate Navy text.
- **Selected:** Aqua Teal (#4FB3BF) border (2px internal) or a soft wash of Aqua Hydration Glow (#D2F1F8) with the Teal text.

### Inputs & Toggles
Inputs should be large and tactile. Toggles should feel "squishy" with a significant scale change when active, moving away from thin, mechanical switches toward more organic, thumb-friendly shapes.

### The Ritual Timer
A specialized component featuring the `display-timer` typography. It should be placed in the center of the screen with maximum whitespace around it to minimize cognitive load during the shower.