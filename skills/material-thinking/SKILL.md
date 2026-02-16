---
name: material-thinking
description: A methodology for building project-level design systems based on Material Design principles. Systematically covers design token architecture, component design principles, pattern organization, visual style definition, and expressive expression. Designs and builds design systems tailored to project requirements without depending on Material's predefined components.
---

# Material Thinking

Apply Material Design principles to build project-specific design systems.

## Premise

The essence of Material is not a component library but design principles. Since context differs across projects, the surface layer (component appearance and behavior) must be customized. This skill applies Material principles as methodology to build project-level design systems.

## References

### 1. Design System Methodology (`references/design-system-methodology.md`)

Methodology for designing, building, and operating design systems. Refer to when:

- Designing token architecture (Reference → System → Component)
- Applying component design principles (role-based design, state systems, container thinking)
- Extracting and organizing patterns
- Governing and extending design systems

### 2. Foundations (`references/foundations.md`)

Material's foundational principles applied to all UIs. Refer to when:

- Checking accessibility requirements
- Designing layout and responsive behavior (window size classes, canonical layouts)
- Defining interaction patterns (states, gestures, selection)
- Writing content design and UX copy

### 3. Visual Styles (`references/styles.md`)

Elements that compose the visual language. Refer to when:

- Designing color systems (tonal palettes, color roles, dynamic color)
- Defining typography (type scale, fonts)
- Working with elevation and shape
- Selecting icons and designing motion

### 4. Expressive Expression (`references/m3-expressive.md`)

Techniques for creating more expressive UIs. Refer to when:

- Applying expressive motion
- Implementing shape morphing
- Enhancing brand expression
- Balancing expressiveness with usability

## Workflows

### Workflow 1: Build a New Project Design System

When building a design system from scratch for a new project.

#### 1. Define design principles

Establish project-specific design principles. Customize Material's principles (visual hierarchy, affordance, feedback, consistency, accessibility) to match the project's purpose and brand.

- Refer to `references/foundations.md`
- Refer to `references/design-system-methodology.md` → Layer 1

#### 2. Design token architecture

Convert the brand's visual identity into design tokens.

- Refer to `references/design-system-methodology.md` → Token Architecture Design
- Refer to `references/styles.md` → each section

Summary of steps:

1. Define Reference Tokens as raw values (color palette, font sizes, etc.)
2. Map to System Tokens with semantic names (primary, surface, etc.)
3. Define light and dark themes
4. Define typography scale (5 roles × 3 sizes)
5. Define shape scale (corner radius steps)
6. Define spacing scale (4dp base)
7. Define motion tokens (duration, easing)

#### 3. Design component patterns

Design UI patterns based on project requirements. Do not assume Material's predefined components.

- Refer to `references/design-system-methodology.md` → Component Design Principles

Define the following for each pattern:

- Role and emphasis level
- State system (default, hover, focused, pressed, disabled)
- Container structure (background, boundary, padding, content slots)
- Responsive adaptation rules
- Accessibility requirements

#### 4. Organize patterns

Categorize designed patterns and define relationships between them.

- Refer to `references/design-system-methodology.md` → Pattern Organization

#### 5. Consider expressive expression (optional)

Apply when brand expression or engagement is important.

- Refer to `references/m3-expressive.md`
- Follow the 80/20 rule (80% standard, 20% expressive)

### Workflow 2: Extract a Design System from an Existing Product

When retroactively building a design system from a running product.

#### 1. Conduct a UI inventory

Collect and classify all UI elements from existing screens.

- Collect screenshots
- List all color, font size, corner radius, and spacing values in use
- Identify inconsistencies and duplicates

#### 2. Standardize tokens

Organize scattered values into a token system.

- Refer to `references/design-system-methodology.md` → Token Architecture Design
- Consolidate similar values and fit them into a scale
- Assign semantic names

#### 3. Extract patterns

- Refer to `references/design-system-methodology.md` → Pattern Organization
- Consolidate UI elements with the same role
- Organize variations
- Unify naming conventions

#### 4. Audit accessibility

- Refer to `references/foundations.md` → Accessibility
- Check color contrast, touch targets, keyboard operation, and screen reader support

### Workflow 3: Extend a Design System

When adding new patterns or tokens to an existing design system.

#### 1. Confirm necessity

- Will it be used in 3 or more screens? (reusability)
- Can existing patterns substitute?

#### 2. Design based on principles

- Refer to `references/design-system-methodology.md` → Component Design Principles
- Design from 5 perspectives: role, state, container, responsive, accessibility

#### 3. Define token mapping

- Check if existing System Tokens can express the need
- If new tokens are required, add them following naming conventions

#### 4. Create documentation

- Describe purpose, structure, variations, and usage guidelines
- Specify pattern relationships (alternative, compositional, exclusive)

### Workflow 4: Conduct a Design Review

When evaluating UI quality from a design system perspective.

#### 1. Check token compliance

- Are all colors, font sizes, corner radii, and spacing values following tokens?
- Are there hard-coded values?

#### 2. Check pattern compliance

- Are defined patterns used correctly?
- Are undefined patterns proliferating?

#### 3. Check principle compliance

- Is visual hierarchy clear?
- Is the state system complete?
- Are accessibility requirements met?
- Is responsive adaptation in place?

#### 4. Check consistency

- Do components with the same role share unified expression?
- Is token usage consistent?

## Decision Guide

### When to use this skill

| Situation | Reference to consult |
|-----------|---------------------|
| Build a new design system | `design-system-methodology.md` → entire document |
| Design tokens | `design-system-methodology.md` → Token Architecture + `styles.md` |
| Design components | `design-system-methodology.md` → Component Design Principles |
| Design layout | `foundations.md` → Layout |
| Check accessibility | `foundations.md` → Accessibility |
| Enrich expression | `m3-expressive.md` |
| Audit existing UI | `design-system-methodology.md` → Governance and Evolution |

### On Material's Predefined Components

Material's predefined components (Button, FAB, Card, etc.) are one reference implementation and need not be adopted as-is in a project's design system. Follow these guidelines:

- Understand the principles and design components that fit the project's context
- Material's predefined components may be referenced as a starting point, but final designs should match project requirements
- Component names and structures should align with the project's terminology
