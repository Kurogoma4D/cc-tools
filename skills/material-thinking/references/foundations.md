# Material 3 Foundations

Material 3 Foundations defines the design principles and patterns that form the base of all Material interfaces.

## Table of Contents

1. [Accessibility](#accessibility)
2. [Layout](#layout)
3. [Interaction](#interaction)
4. [Content Design](#content-design)
5. [Design Tokens](#design-tokens)
6. [Adaptive Design](#adaptive-design)

---

## Accessibility

### Core Principles
- Design for users with diverse abilities
- Integrate with assistive technologies such as screen readers
- WCAG-compliant contrast ratios

### Key Areas

#### Structure and Elements
- Intuitive layout hierarchy
- Accessible UI element design
- Focus management and navigation

URL: https://m3.material.io/foundations/designing/structure

#### Color Contrast
- WCAG-compliant color contrast
- Visibility of text and UI controls
- 4.5:1 (normal text), 3:1 (large text, UI components)

URL: https://m3.material.io/foundations/designing/color-contrast

#### Text Accessibility
- Support for text resizing (up to 200%)
- Accessible text truncation
- Clear and adaptable writing

URL: https://m3.material.io/foundations/writing/text-resizing

---

## Layout

### Understanding Layout

#### Core Components
- **Regions**: Primary screen areas (header, body, navigation)
- **Columns**: Base units of the grid system
- **Gutters**: Spacing between columns
- **Spacing**: Consistent spacing system based on 4dp

URL: https://m3.material.io/foundations/layout/understanding-layout/overview

### Window Size Classes

Responsive design based on screen size:

| Size Class | Width | Typical Device | Key Patterns |
|-----------|-------|---------------|--------------|
| Compact | <600dp | Phone | Single pane, bottom nav |
| Medium | 600-840dp | Tablet (portrait) | Dual pane optional, nav rail |
| Expanded | >840dp | Tablet (landscape), Desktop | Dual/multi pane, nav drawer |
| Large/XL | >1240dp | Large screens, TV | Multi-pane, extensive nav |

URL: https://m3.material.io/foundations/layout/applying-layout/window-size-classes

### Canonical Layouts

Commonly used layout patterns:

1. **List-detail**: Master-detail navigation
2. **Feed**: Content feed
3. **Supporting pane**: Supplementary content panel

URL: https://m3.material.io/foundations/layout/canonical-layouts/overview

---

## Interaction

### States

#### Visual States
- **Enabled**: Default state
- **Hover**: Pointer hovering (desktop)
- **Focused**: Keyboard focus
- **Pressed**: Actively being pressed
- **Dragged**: Being dragged
- **Disabled**: Inactive state

#### State Layers
Semi-transparent overlays that visually indicate state:
- Hover: 8% opacity
- Focus: 12% opacity
- Press: 12% opacity

URL: https://m3.material.io/foundations/interaction/states/state-layers

### Gestures

Touch gestures for mobile interfaces:
- Tap: Basic selection
- Long press: Context menu
- Drag: Move, reorder
- Swipe: Navigation, delete
- Pinch: Zoom

URL: https://m3.material.io/foundations/interaction/gestures

### Selection

Selection interaction patterns:
- **Single selection**: Radio buttons, list items
- **Multi selection**: Checkboxes, selectable lists

URL: https://m3.material.io/foundations/interaction/selection

---

## Content Design

### UX Writing Principles

1. **Clear**: Easy to understand
2. **Concise**: Brief and to the point
3. **Useful**: Addresses user needs
4. **Consistent**: Uniform terminology and tone

### Notifications

Effective notification content:
- Actionable information
- Clear next steps
- Understanding of user context

URL: https://m3.material.io/foundations/content-design/notifications

### Alt Text

Accessible image descriptions:
- Decorative images: Empty alt attribute
- Functional images: Describe the action
- Informational images: Describe content concisely

URL: https://m3.material.io/foundations/content-design/alt-text

### Global Writing

Writing for international audiences:
- Word choice considering localization
- Culturally neutral expressions
- Grammar structures easy to translate

URL: https://m3.material.io/foundations/content-design/global-writing/overview

---

## Design Tokens

### What are Design Tokens?

Design tokens are the smallest units of design decisions used across design, tools, and code:

- **Color tokens**: primary, secondary, surface, error, etc.
- **Typography tokens**: displayLarge, bodyMedium, etc.
- **Shape tokens**: cornerRadius, roundedCorner, etc.
- **Motion tokens**: duration, easing curves

### Benefits

- Consistency between design and code
- Easy theme customization
- Unification across platforms

URL: https://m3.material.io/foundations/design-tokens/overview

---

## Adaptive Design

### Principles

- **Responsive**: Adjusts to window size
- **Adaptive**: Optimizes for device characteristics
- **Contextual**: Considers usage context

### Key Strategies

1. Layout adjustments based on window size classes
2. Support for input methods (touch, mouse, keyboard)
3. Leveraging device capabilities (camera, geolocation, etc.)
4. Handling offline and online scenarios

URL: https://m3.material.io/foundations/adaptive-design

---

## References

- Material Design 3 Foundations: https://m3.material.io/foundations/
- Glossary: https://m3.material.io/foundations/glossary
