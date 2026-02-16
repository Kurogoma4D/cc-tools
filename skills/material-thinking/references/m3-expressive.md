# Material 3 Expressive

M3 Expressive is an evolution of Material 3 introduced by Google in 2024-2025, enabling more engaging and emotionally resonant interfaces.

## Table of Contents

1. [Overview](#overview)
2. [Usability Principles](#usability-principles)
3. [Design Tactics](#design-tactics)
4. [Expressive Motion](#expressive-motion)
5. [Shape and Form](#shape-and-form)
6. [Implementation Guidelines](#implementation-guidelines)

---

## Overview

### What is M3 Expressive?

M3 Expressive extends standard Material 3 to achieve:

- **Engaging**: Captures and sustains user attention
- **Emotionally resonant**: Creates emotional connections
- **User-friendly**: Does not sacrifice usability
- **Brand expression**: Expresses brand personality

### Key Differences from Standard M3

| Aspect | Standard M3 | M3 Expressive |
|--------|-------------|---------------|
| Motion | Restrained, functional | Bold, expressive |
| Shapes | Consistent corner radius | Dynamic shape morphing |
| Emphasis | Clear, simple | Dramatic, impactful |
| Timing | Fast (200-300ms) | Slightly longer (400-700ms) |

URL: https://m3.material.io/blog/building-with-m3-expressive

---

## Usability Principles

### Creating Engaging Products

M3 Expressive is grounded in these usability principles:

#### 1. Guide Users
Guide users appropriately:
- **Motion paths**: Show flow through animation
- **Visual hierarchy**: Draw attention through movement
- **Staged reveal**: Disclose information progressively

#### 2. Emphasize Actions
Highlight important actions:
- **Scale changes**: Indicate importance through size changes
- **Color dynamics**: Express state through color changes
- **Focused attention**: Concentrate attention on one element

#### 3. Provide Feedback
Clear feedback for user actions:
- **Immediate response**: Instant visual reaction
- **State transitions**: Clearly express state changes
- **Completion signals**: Indicate action completion

URL: https://m3.material.io/foundations/usability/overview

---

## Design Tactics

Specific design tactics for implementing M3 Expressive.

URL: https://m3.material.io/foundations/usability/applying-m-3-expressive

### 1. Emphasized Easing

Use **Emphasized easing** for more dramatic effect than Standard easing:

```
Emphasized Decelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0)
Emphasized Accelerate: cubic-bezier(0.3, 0.0, 0.8, 0.15)
```

**When to use:**
- Important transitions
- When you need to capture user attention
- When enhancing brand expression

**Example:**
```css
.expressive-enter {
  animation: enter 500ms cubic-bezier(0.05, 0.7, 0.1, 1.0);
}
```

### 2. Extended Duration

Longer animation times than standard:

| Element | Standard | Expressive |
|---------|----------|------------|
| Small changes | 100ms | 150-200ms |
| Medium changes | 250ms | 400-500ms |
| Large transitions | 300ms | 500-700ms |

**Caution:** Do not exceed 1000ms.

### 3. Exaggerated Scale

Amplify scale changes:

**Standard:**
- Scale: 1.0 → 1.05 (+5%)

**Expressive:**
- Scale: 1.0 → 1.15 (+15%)
- Scale: 1.0 → 0.9 → 1.1 (bounce effect)

**Example use cases:**
- FAB tap animation
- Card selection state
- Icon active state

### 4. Dynamic Color Transitions

Dynamic color changes:

**Techniques:**
- Gradient animations: Dynamic gradient changes
- Color pulse: Color pulse effect
- Hue rotation: Hue shifts

**Example:**
```css
.expressive-button:active {
  background: linear-gradient(45deg, primary, tertiary);
  transition: background 400ms cubic-bezier(0.05, 0.7, 0.1, 1.0);
}
```

### 5. Layered Motion

Multiple elements moving at different timings:

**Stagger animations:**
- Delay: 50-100ms per item
- Sequential display of list items
- Card grid reveals

**Example timing:**
```
Item 1: 0ms
Item 2: 80ms
Item 3: 160ms
Item 4: 240ms
```

### 6. Shape Morphing

Dynamic shape transformation (detailed below).

---

## Expressive Motion

The core motion system of M3 Expressive.

URL: https://m3.material.io/blog/m3-expressive-motion-theming

### Motion Theming System

A new customizable motion theme system:

#### Motion Tokens

**Duration tokens:**
```
motion.duration.short: 150ms
motion.duration.medium: 400ms
motion.duration.long: 600ms
motion.duration.extra-long: 1000ms
```

**Easing tokens:**
```
motion.easing.emphasized: cubic-bezier(0.05, 0.7, 0.1, 1.0)
motion.easing.emphasizedDecelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0)
motion.easing.emphasizedAccelerate: cubic-bezier(0.3, 0.0, 0.8, 0.15)
motion.easing.standard: cubic-bezier(0.2, 0.0, 0, 1.0)
```

### Expressive Transition Patterns

#### 1. Container Transform (Enhanced)

**Standard container transform:**
- Duration: 300ms
- Easing: standard

**Expressive container transform:**
- Duration: 500ms
- Easing: emphasized
- Additional effects: subtle scale changes, color shifts

#### 2. Shared Axis (Enhanced)

**Expressive enhancements:**
- Larger slide distance (+20%)
- Combined fade + scale effects
- Staged element movement

#### 3. Morph Transition

A new transition type:
- Smooth shape deformation
- Simultaneous changes to multiple properties (size, color, shape)
- Organic movement

**Example:**
```
Circle → Rounded Rectangle → Full Screen
(300ms) → (200ms)
```

### Micro-interactions

Small but impactful interactions:

#### Button Press
```
1. Scale down: 0.95 (50ms)
2. Scale up: 1.0 (150ms, emphasized easing)
3. Ripple effect: expanded, slower
```

#### Icon State Change
```
1. Scale out: 0.8 + rotate 15deg (100ms)
2. Icon swap
3. Scale in: 1.0 + rotate 0deg (200ms, emphasized)
```

#### Loading States
```
- Pulse animation: 1.0 → 1.1 → 1.0 (800ms, loop)
- Color shift: primary → tertiary → primary
```

---

## Shape and Form

### Shape Morph

Enhance brand expression through dynamic shape transformation.

URL: https://m3.material.io/styles/shape/shape-morph

#### Basic Shape Morph

Smooth shape transitions:

**Example scenarios:**
1. **FAB → Dialog**
   - Circle (56dp) → Rounded rectangle (280×400dp)
   - Duration: 500ms
   - Easing: emphasized decelerate

2. **Chip → Card**
   - Small rounded (32dp) → Medium rounded (card size)
   - Duration: 400ms

3. **Button → Full Width**
   - Fixed width → Full screen width
   - Corner radius maintained

#### Advanced Techniques

**Path morphing:**
- SVG path deformation
- Bezier curve interpolation
- Transitions between complex shapes

**Example SVG morph:**
```svg
<path d="M10,10 L90,10 L90,90 L10,90 Z">
  <animate attributeName="d"
           to="M50,10 L90,50 L50,90 L10,50 Z"
           dur="500ms"
           fill="freeze"/>
</path>
```

### Organic Shapes

More natural, organic forms:

**Characteristics:**
- Asymmetric corner radii
- Fluid lines
- Inspiration from nature

**Use cases:**
- Brand elements
- Hero sections
- Illustrations

---

## Implementation Guidelines

### When to Use M3 Expressive

#### Good Use Cases
- **Consumer apps**: Entertainment, social, gaming
- **Brand-forward products**: Where brand expression matters
- **Engagement-critical flows**: Onboarding, tutorials
- **Hero moments**: Key milestones, achievements

#### Use with Caution
- **Productivity apps**: Avoid excessive animation
- **Frequent actions**: Repeatedly used operations
- **Data-heavy interfaces**: Where information takes priority

#### Avoid
- **Accessibility concerns**: Motion-sensitive users
- **Performance-constrained**: Low-spec devices
- **Critical tasks**: Error and warning displays

### Balancing Expressiveness and Usability

#### The 80/20 Rule

- **80%**: Standard M3 (fast, functional)
- **20%**: M3 Expressive (impactful, brand expression)

**Example distribution:**
- Standard M3: List item taps, form inputs, settings changes
- M3 Expressive: Screen transitions, primary actions (FAB), first-time experiences

### Respect User Preferences

#### Reduced Motion

Respect the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### Accessibility

- **Vestibular disorders**: Avoid large movements
- **Cognitive load**: Limit simultaneously moving elements
- **Focus management**: Keep elements focusable during animation

---

## Practical Examples

### Example 1: Expressive FAB Tap

```css
.fab {
  transition: transform 150ms cubic-bezier(0.05, 0.7, 0.1, 1.0),
              box-shadow 150ms cubic-bezier(0.05, 0.7, 0.1, 1.0);
}

.fab:active {
  transform: scale(0.92);
}

.fab:not(:active) {
  transform: scale(1.0);
}

/* Ripple with longer duration */
.fab::after {
  animation: ripple 600ms cubic-bezier(0.05, 0.7, 0.1, 1.0);
}
```

### Example 2: Card to Detail Transition

```javascript
// Container transform with expressive timing
const expandCard = (card) => {
  card.animate([
    {
      transform: 'scale(1)',
      borderRadius: '12px'
    },
    {
      transform: 'scale(1.02)',
      borderRadius: '28px',
      offset: 0.3
    },
    {
      transform: 'scale(1)',
      borderRadius: '0px'
    }
  ], {
    duration: 500,
    easing: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
    fill: 'forwards'
  });
};
```

### Example 3: Staggered List Animation

```css
.list-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 400ms cubic-bezier(0.05, 0.7, 0.1, 1.0) forwards;
}

.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 80ms; }
.list-item:nth-child(3) { animation-delay: 160ms; }
.list-item:nth-child(4) { animation-delay: 240ms; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Resources and Tools

### Design Tools
- **Material Theme Builder**: M3 Expressive motion presets
- **Figma Plugins**: Motion timing visualization
- **After Effects**: Prototype animations

### Code Libraries
- **Web**: Material Web Components (M3 support)
- **Flutter**: Material 3 with custom motion
- **Android**: Jetpack Compose Material3

### References
- M3 Expressive announcement: https://m3.material.io/blog/building-with-m3-expressive
- Motion theming: https://m3.material.io/blog/m3-expressive-motion-theming
- Usability tactics: https://m3.material.io/foundations/usability/applying-m-3-expressive

---

## Summary Checklist

When implementing M3 Expressive, ensure:

- [ ] Emphasized easing for key transitions
- [ ] Extended durations (but <1000ms)
- [ ] Exaggerated scale changes where appropriate
- [ ] Layered/staggered animations for lists
- [ ] Shape morphing for container transforms
- [ ] Color dynamics for feedback
- [ ] Respect `prefers-reduced-motion`
- [ ] 80/20 balance (Standard M3 vs Expressive)
- [ ] Test on lower-end devices
- [ ] Validate accessibility
