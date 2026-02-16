# Material 3 Styles

Material 3 Styles defines the visual language through color, typography, shape, elevation, icons, and motion.

## Table of Contents

1. [Color](#color)
2. [Typography](#typography)
3. [Elevation](#elevation)
4. [Shape](#shape)
5. [Icons](#icons)
6. [Motion](#motion)

---

## Color

### Color System Overview

Material 3's color system creates accessible and personalizable color schemes.

URL: https://m3.material.io/styles/color/system/overview

### Color Roles

Roles that bind UI elements to specific colors:

#### Primary Colors
- **primary**: App's main color (main buttons, active states)
- **onPrimary**: Text/icons on primary color
- **primaryContainer**: Container for primary elements
- **onPrimaryContainer**: Text on container

#### Secondary & Tertiary
- **secondary**: Accent color
- **tertiary**: Emphasis and balance adjustment

#### Surface Colors
- **surface**: Background for cards, sheets, menus
- **surfaceVariant**: Slightly different background
- **surfaceTint**: For elevation expression

#### Semantic Colors
- **error**: Error state
- **warning**: Warning (available in some implementations)
- **success**: Success state (available in some implementations)

URL: https://m3.material.io/styles/color/roles

### Color Schemes

#### Dynamic Color
Extract colors from user wallpaper or selections:
- **User-generated**: From user selections
- **Content-based**: Extracted from images/content

URL: https://m3.material.io/styles/color/dynamic-color/overview

#### Static Color
Fixed color schemes:
- **Baseline**: Default Material baseline
- **Custom brand**: Custom brand colors

URL: https://m3.material.io/styles/color/static/baseline

### Key Colors and Tones

- **Source color**: Starting point for scheme generation
- **Tonal palette**: 13-step tones generated from each key color (0, 10, 20, ..., 100)
- Light theme: Typically uses tone 40 for primary
- Dark theme: Typically uses tone 80 for primary

URL: https://m3.material.io/styles/color/the-color-system/key-colors-tones

### Tools

**Material Theme Builder**: Tool for generating, customizing, and exporting color schemes

URL: https://m3.material.io/blog/material-theme-builder-2-color-match

---

## Typography

### Type Scale

Material 3 defines 15 type styles from 5 roles × 3 sizes:

#### Roles
1. **Display**: Large, short text (hero, headlines)
2. **Headline**: Medium-scale headings
3. **Title**: Small headings (app bars, list items)
4. **Body**: Body text
5. **Label**: Buttons, tabs, small text

#### Sizes
- **Large**: Maximum size
- **Medium**: Standard size
- **Small**: Minimum size

#### Example Styles
```
displayLarge: 57sp, -0.25 letter spacing
headlineMedium: 28sp, 0 letter spacing
bodyLarge: 16sp, 0.5 letter spacing
labelSmall: 11sp, 0.5 letter spacing
```

URL: https://m3.material.io/styles/typography/overview

### Fonts

- Default: **Roboto** (Android), **San Francisco** (iOS), **Roboto** (Web)
- Custom font support
- Variable font utilization

URL: https://m3.material.io/styles/typography/fonts

### Applying Typography

- Semantic usage (headline for headings, body for body text)
- Consistent hierarchy
- Proper line height and margin settings

URL: https://m3.material.io/styles/typography/applying-type

---

## Elevation

### Overview

Elevation represents the distance between surfaces along the Z-axis.

URL: https://m3.material.io/styles/elevation/overview

### Elevation Levels

Material 3 defines 6 elevation levels:

| Level | DP | Use Case |
|-------|-----|----------|
| 0 | 0dp | Standard surface |
| 1 | 1dp | Cards, slightly raised elements |
| 2 | 3dp | Search bars |
| 3 | 6dp | FAB (resting state) |
| 4 | 8dp | Navigation drawer |
| 5 | 12dp | Modal bottom sheets, dialogs |

### Elevation Representation

Material 3 expresses elevation in two ways:

1. **Shadow**: Elevation through shadows (primarily light theme)
2. **Surface tint**: Overlaying color tint on surface (primarily dark theme)

URL: https://m3.material.io/styles/elevation/applying-elevation

---

## Shape

### Overview

Shape is used to guide attention, express state, and convey brand expression.

URL: https://m3.material.io/styles/shape/overview-principles

### Corner Radius Scale

Material 3 defines 5 shape tokens:

| Token | Default Value | Use Case |
|-------|---------------|----------|
| None | 0dp | Full-screen, strict layouts |
| Extra Small | 4dp | Checkboxes, small elements |
| Small | 8dp | Chips, small buttons |
| Medium | 12dp | Cards, standard buttons |
| Large | 16dp | FAB, large cards |
| Extra Large | 28dp | Dialogs, bottom sheets |
| Full | 9999dp | Fully circular |

### Shape Morph

A key M3 Expressive feature: Animations where shapes smoothly transform.

- Visual flow during transitions
- Enhanced brand expression
- Drawing user attention

URL: https://m3.material.io/styles/shape/shape-morph

---

## Icons

### Material Symbols

Material Symbols is a variable icon font:

#### Styles
- **Outlined**: Line-only style (default)
- **Filled**: Filled style
- **Rounded**: Rounded style
- **Sharp**: Sharp style

#### Variable Features
- **Weight**: Line thickness (100-700)
- **Grade**: Visual weight (-25 to 200)
- **Optical size**: Display size optimization (20, 24, 40, 48dp)
- **Fill**: Fill state (0-1)

#### Sizes
- 20dp: Dense layouts
- 24dp: Standard size
- 40dp: Enlarged touch target
- 48dp: Large touch target

URL: https://m3.material.io/styles/icons/overview

### Custom Icons

Guidelines for designing custom icons:
- 24×24dp grid
- 2dp stroke width
- 2dp corner radius
- Consistent metaphors

URL: https://m3.material.io/styles/icons/designing-icons

---

## Motion

A core element of M3 Expressive: Motion makes UIs expressive and usable.

URL: https://m3.material.io/styles/motion/overview

### Motion Principles

1. **Informative**: Conveys information to users
2. **Focused**: Guides attention appropriately
3. **Expressive**: Enhances emotional engagement

URL: https://m3.material.io/styles/motion/overview/how-it-works

### Easing and Duration

#### Easing Types

Material 3 defines 4 easing curves:

1. **Emphasized**: Dramatic, expressive movement
   - Decelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0)
   - Accelerate: cubic-bezier(0.3, 0.0, 0.8, 0.15)
   - Standard: cubic-bezier(0.2, 0.0, 0, 1.0)

2. **Standard**: Balanced, standard movement
   - cubic-bezier(0.2, 0.0, 0, 1.0)

3. **Emphasized Decelerate**: Element entering the screen
   - cubic-bezier(0.05, 0.7, 0.1, 1.0)

4. **Emphasized Accelerate**: Element leaving the screen
   - cubic-bezier(0.3, 0.0, 0.8, 0.15)

#### Duration Guidelines

| Element Change | Duration |
|----------------|----------|
| Small (icon state) | 50-100ms |
| Medium (component state) | 250-300ms |
| Large (layout change) | 400-500ms |
| Complex transition | 500-700ms |

Avoid animations longer than 1000ms.

URL: https://m3.material.io/styles/motion/easing-and-duration

### Transitions

Transition patterns during navigation:

#### Transition Types

1. **Container transform**: Container morphs into the next screen
2. **Shared axis**: Movement along a common axis (X, Y, Z)
3. **Fade through**: Fade out → Fade in
4. **Fade**: Simple fade

#### When to Use Each

- **Container transform**: List item → Detail screen
- **Shared axis X**: Tab switching, horizontal navigation
- **Shared axis Y**: Stepper, vertical navigation
- **Shared axis Z**: Forward/back navigation
- **Fade through**: Content updates (low relatedness)
- **Fade**: Overlays, supplementary changes

URL: https://m3.material.io/styles/motion/transitions/transition-patterns

### M3 Expressive Motion

A new expressive motion system:

- Bolder animations
- Customizable motion themes
- Enhanced brand expression

URL: https://m3.material.io/blog/m3-expressive-motion-theming

---

## References

- Material Design 3 Styles: https://m3.material.io/styles/
- Material Theme Builder: https://material-foundation.github.io/material-theme-builder/
- Material Symbols: https://fonts.google.com/icons
