# Design System Methodology

A methodology for designing and building project-specific design systems based on Material Design principles.

## Table of Contents

1. [Design System Layer Structure](#design-system-layer-structure)
2. [Token Architecture Design](#token-architecture-design)
3. [Component Design Principles](#component-design-principles)
4. [Pattern Organization](#pattern-organization)
5. [Governance and Evolution](#governance-and-evolution)

---

## Design System Layer Structure

A design system consists of five layers. Lower layers are more stable; upper layers carry stronger project-specific expression.

### Layer 1: Brand Identity

The foundation that gives the design system its character. Composed of two sub-layers.

**Semantic elements** — what users feel and interpret:
- Brand personality (3-5 traits with boundaries)
- Voice & tone (formality, humor, directness, enthusiasm)
- Values and mission
- Relationship archetype with target users (equal partner, expert advisor, friendly assistant, professional tool)

**Perceptual elements** — what users see and touch:
- Color palette (primary, secondary, accent, neutral)
- Typography (typeface selection, weight distribution)
- Spacing and rhythm (density, regularity)
- Shape language (corner radius, organic vs geometric)
- Iconography style (line weight, fill, metaphor)
- Motion (speed, easing character, amplitude)
- Photography / illustration tone
- Sound / haptic feedback (if applicable)

**Translation points** — the connection between semantic and perceptual:
- Each perceptual decision must trace back to a semantic trait
- Document "why this value" for every System Token
- This layer distinguishes a design system from a style guide

See `references/brand-identity.md` for detailed methodology.

### Layer 2: Principles

Unchanging design philosophy. Applied across projects.

- Visual hierarchy: Express information priority through size, color, and spacing
- Affordance: Make interactive elements look interactive
- Feedback: Respond immediately to user actions
- Consistency: Use the same expression for the same meaning
- Accessibility: Enable use by people with diverse abilities

### Layer 3: Design Tokens

Convert brand identity and principles into project-specific values. Numeric systems for color, shape, spacing, and motion.

- Derive color schemes from brand colors
- Define typography scales
- Define shape (corner radius) scales
- Define spacing scales
- Define motion (easing, duration) values
- Document semantic rationale for each System Token

### Layer 4: Component Patterns

Reusable UI patterns built with tokens. Design them to match project requirements.

- Action patterns: primary action triggers, state toggles, data entry fields
- Information display patterns: content containers, item collections, status indicators
- Navigation patterns: destination selectors, hierarchy traversal, context switches
- Feedback patterns: system messages, confirmations, progress indicators

Name patterns after their **role in the project**, not after existing UI library components.

### Layer 5: Compositions

Concrete screen layouts combining patterns. Directly tied to project use cases.

---

## Token Architecture Design

### Three Tiers of Tokens

```
Reference Tokens → System Tokens → Component Tokens
(raw values)       (semantic values)  (usage-bound values)
```

#### Reference Tokens

Raw values without semantic meaning, such as color palettes and font sizes.

```
blue-500: #2196F3
gray-100: #F5F5F5
font-size-16: 16px
radius-12: 12px
```

#### System Tokens

Named according to the project's semantic system. Reference the Reference Tokens.

```
color-primary: {blue-500}
color-surface: {gray-100}
text-body: {font-size-16}
shape-medium: {radius-12}
```

#### Component Tokens

Values bound to specific UI patterns. Reference the System Tokens.

```
button-bg: {color-primary}
button-radius: {shape-medium}
card-bg: {color-surface}
card-radius: {shape-medium}
```

### Semantic Rationale Documentation

Every System Token should carry its semantic rationale. This connects Layer 1 (Brand Identity) to Layer 3 (Design Tokens).

**Format for each token:**
1. The value: concrete value (e.g., `12px`)
2. Semantic source: which brand trait drives it (e.g., "Approachable")
3. Rationale: why this value expresses that trait
4. Boundary: when to deviate and why

**Example:**
```
Token: shape-medium = 12px
Semantic source: "Approachable" personality
Rationale: Rounded corners feel friendly and welcoming,
  while maintaining enough structure for credibility
Boundary: Error states use shape-small (4px) to convey seriousness
```

### Color Token Design Steps

1. Set brand colors as source colors
2. Generate tonal palettes (lightness steps) from source colors
3. Assign tones to roles (primary, secondary, tertiary, surface, error)
4. Define both light and dark themes
5. Add semantic colors (success, warning, info)
6. Document semantic rationale for primary, secondary, and tertiary selections

### Typography Token Design Steps

1. Select the project's brand font based on brand personality
2. Define usage roles (display, headline, title, body, label)
3. Set size, weight, line height, and letter spacing for each role
4. Establish responsive scaling rules
5. Document how typeface and weight choices reflect brand personality

### Shape Token Design Steps

1. Define a shape scale matching the brand's character (corner radius steps)
2. Establish rules for assigning shapes based on element size and importance
3. Clarify shape semantics (e.g., larger corner radius = friendlier)
4. Document the connection between shape language and brand personality

### Spacing Token Design Steps

1. Set a base unit (4dp recommended)
2. Define a scale (4, 8, 12, 16, 24, 32, 48, 64...)
3. Establish naming conventions by usage (inset, stack, inline, section)

### Motion Token Design Steps

1. Define a duration scale (short, medium, long)
2. Select easing curves (emphasized, standard)
3. Customize to match the project's character
4. Define `prefers-reduced-motion` fallbacks

---

## Component Design Principles

Design project-specific components following these principles.

### Principle 1: Role-Based Design

Define components by role, not appearance.

**Questions to ask:**
- What user behavior does this component support?
- How much attention should it draw on screen? (emphasis level)
- What is its relationship to other components?

**Emphasis Hierarchy**

Organize component emphasis into three levels:

| Emphasis | Visual Characteristics | Usage |
|----------|----------------------|-------|
| High | Strong background, high contrast | Primary action on screen |
| Medium | Border or subtle background, mid-tone | Secondary actions |
| Low | Minimal visual weight, low contrast | Tertiary actions |

### Principle 2: Explicit States

Define a state system for every interactive element.

**Required states:**
- Default: Normal state
- Hover: Pointer over the element (desktop)
- Focused: Keyboard focus
- Pressed: Being pressed
- Disabled: Inactive

**State Layer Implementation**

Express states through semi-transparent overlays. This applies unified state expression to components on any background color. Define opacity values as project tokens.

```
Hover: primary color at {state-hover-opacity}
Focus: primary color at {state-focus-opacity}
Press: primary color at {state-press-opacity}
Drag: primary color at {state-drag-opacity}
```

Choose opacity values that match the project's brand expression — bolder brands may use higher values, subtle brands lower.

### Principle 3: Container Thinking

Design components as self-contained containers.

**Container composition:**
- Background (Surface): color, elevation
- Boundary: stroke, corner radius
- Inner padding: use spacing tokens
- Content slots: variable content areas

**Elevation usage:**
- Express stacking order
- Indicate attention priority
- Use shadow and surface tint as two distinct techniques

### Principle 4: Responsive Adaptation

Change component behavior according to window size.

**Levels of adaptation:**
- Reflow: Rearrange elements (horizontal → vertical)
- Resize: Change element dimensions
- Show/Hide: Toggle element visibility
- Transform: Switch to a different pattern (bottom nav → side nav)

### Principle 5: Accessibility First

Incorporate accessibility from the earliest stage of component design.

- Minimum touch target: 48×48dp
- Color contrast: WCAG 2.1 Level AA or above
- Keyboard operation: All interactions completable via keyboard
- Screen reader: Appropriate semantics and labels
- Text resizing: Support up to 200%

---

## Pattern Organization

### How to Build a Pattern Catalog

Analyze the project's UI and extract recurring patterns into a systematic catalog.

#### Step 1: UI Inventory

Collect all UI elements from existing screens or prototypes.

- Collect screenshots
- Classify elements (action, display, navigation, feedback)
- Identify duplicates and inconsistencies

#### Step 2: Pattern Extraction

Group similar elements and abstract them into patterns.

- Consolidate elements with the same role
- Organize variations (size, emphasis level)
- Unify naming conventions

#### Step 3: Pattern Definition

Define the following for each pattern:

- Purpose: Why it exists
- Structure: What elements compose it
- Token mapping: Which design tokens it uses
- Variations: What variations exist
- Usage guidelines: When to use and when not to use

#### Step 4: Define Inter-Pattern Relationships

Organize relationships between patterns.

- Alternative: Different patterns for the same purpose (state usage criteria clearly)
- Compositional: One pattern contains another
- Exclusive: Patterns that should not be used together

### Navigation System Design

Select navigation patterns based on screen size and content structure.

**Design questions:**
- How many top-level destinations does the app have?
- How deep is the hierarchy?
- What devices do users primarily use?
- Is the content structure flat or hierarchical?

**Considerations by window size:**

| Size | Pattern roles to consider |
|------|--------------------------|
| Compact (<600dp) | Persistent destination selector, content category switcher |
| Medium (600-840dp) | Collapsible destination panel, icon-based destination selector |
| Expanded (>840dp) | Always-visible destination panel, multi-pane layout |

Name navigation patterns after their role in the project, not after existing library components.

### Layout System Design

**Canonical Layouts**

Define commonly used layout patterns and unify them across the project.

- List-detail: Master list and detail pane composition
- Feed: Scrollable content stream
- Supporting pane: Main content + supplementary information

**Grid System**
- Define column count per window size
- Unify gutter width
- Establish margin rules

---

## Governance and Evolution

### Operating a Design System

#### Change Management

- Token changes propagate across all products, so apply them carefully
- Manage tokens and patterns with semantic versioning
- Provide migration guides for breaking changes

#### Quality Criteria

Set criteria for adding new patterns to the system.

- Used in 3 or more screens (reusability)
- Composed entirely of tokens (consistency)
- Meets accessibility requirements
- Responsive adaptation is complete

#### Audit Process

Periodically verify alignment between the product and design system.

- Does the product UI comply with tokens and patterns?
- Are undefined styles or patterns increasing?
- Are there patterns that are no longer needed?

### Extending the Design System

#### Flow for Adding New Patterns

1. Confirm necessity from product requirements
2. Consider whether existing patterns can substitute
3. Design based on principles (role, state, container, responsive, accessibility)
4. Define token mapping
5. Create documentation and usage guidelines
6. Add after review and approval

#### Flow for Extending Tokens

1. Consider adding when a value not expressible by existing tokens appears 3 or more times
2. Decide whether to add as a System Token or localize as a Component Token
3. Add following naming conventions
4. Check impact on existing Component Tokens

---

## References

- Material Design Foundations: https://m3.material.io/foundations/
- Design Tokens: https://m3.material.io/foundations/design-tokens/overview
- Layout: https://m3.material.io/foundations/layout/understanding-layout/overview
