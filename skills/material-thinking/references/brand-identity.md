# Brand Identity for Design Systems

A methodology for defining brand identity and translating it into design system elements.

## Table of Contents

1. [Two Layers of Brand](#two-layers-of-brand)
2. [Semantic Elements](#semantic-elements)
3. [Perceptual Elements](#perceptual-elements)
4. [Translation: Semantic to Perceptual](#translation-semantic-to-perceptual)
5. [Documentation Format](#documentation-format)

---

## Two Layers of Brand

Brand is composed of two layers. A design system gains its identity when both are defined and their connections are documented.

### Semantic Layer (Meaning)

What users feel and interpret. Invisible but foundational.

- Brand Personality
- Voice & Tone
- Values and Mission
- Relationship with Target Users

### Perceptual Layer (Expression)

What users see and touch. The tangible manifestation of semantic decisions.

- Color Palette
- Typography
- Spacing and Rhythm
- Shape Language
- Iconography Style
- Motion
- Photography / Illustration Tone
- Sound / Haptic Feedback

### The Connection

Defining colors and fonts alone does not establish a brand. A design system is distinguished from a mere style guide by documenting **why each value was chosen** — the semantic rationale behind perceptual decisions.

---

## Semantic Elements

### Brand Personality

Define the brand's character traits. These drive all perceptual decisions.

**Definition framework:**
- 3-5 personality traits (e.g., honest, innovative, approachable)
- For each trait, define what it means in this project's context
- Define what it does NOT mean (boundaries)

**Example:**
```
Trait: Approachable
Means: Friendly without being casual, welcoming without being simplistic
Does not mean: Childish, unserious, lacking authority
```

### Voice & Tone

How the product communicates through language.

**Dimensions:**
- Formality: casual ↔ formal
- Humor: serious ↔ playful
- Directness: indirect ↔ direct
- Enthusiasm: matter-of-fact ↔ enthusiastic

**Guidelines to define:**
- Default tone for standard interactions
- Variation rules by context (error, success, onboarding, etc.)
- Prohibited expressions
- Terminology conventions

### Values and Mission

The product's reason for existence and what it stands for.

- Mission statement (one sentence)
- Core values (3-5)
- How values manifest in design decisions

### Relationship with Target Users

The dynamic between the product and its users.

**Relationship archetypes:**
- Equal partner: collaborative, mutual
- Expert advisor: knowledgeable, guiding
- Friendly assistant: supportive, cheerful
- Professional tool: efficient, no-nonsense

This archetype influences every perceptual element from color warmth to animation style.

---

## Perceptual Elements

### Color Palette

**Brand color decisions:**
- Primary: the main color that represents the brand
- Secondary: complementary color for variety and balance
- Accent: highlight color for emphasis and calls to action
- Neutral: background and text colors

**Translation points from semantic:**
- Warm vs cool → relationship archetype (friendly = warm, professional = cool)
- Saturation → energy level (energetic = saturated, calm = muted)
- Contrast → personality (bold = high contrast, gentle = low contrast)

### Typography

**Brand typeface decisions:**
- Primary typeface: headings and emphasis
- Secondary typeface: body text (may be the same)
- Monospace: code or data (if applicable)

**Translation points from semantic:**
- Serif vs sans-serif → personality (traditional = serif, modern = sans-serif)
- Weight distribution → tone (authoritative = bold-heavy, approachable = regular-heavy)
- Letter spacing → character (open = friendly, tight = professional)

### Spacing and Rhythm

**Density and breathing room:**
- Dense: information-rich, efficient
- Moderate: balanced, standard
- Spacious: calm, focused

**Translation points from semantic:**
- Density → relationship (tool = dense, companion = spacious)
- Rhythm regularity → personality (systematic = regular, creative = varied)

### Shape Language

**Geometric choices:**
- Corner radius scale: sharp to rounded
- Straight vs organic lines
- Symmetry vs asymmetry

**Translation points from semantic:**
- Corner radius → approachability (friendly = rounded, serious = sharp)
- Organic vs geometric → personality (human = organic, precise = geometric)

### Iconography Style

**Icon system decisions:**
- Line weight
- Fill vs outline
- Level of detail
- Metaphor selection

**Translation points from semantic:**
- Line weight → personality (bold = confident, thin = refined)
- Fill style → emphasis (filled = strong, outline = subtle)

### Motion

**Animation character:**
- Speed: fast vs measured
- Easing: snappy vs smooth
- Amplitude: subtle vs dramatic

**Translation points from semantic:**
- Speed → efficiency (productive = fast, mindful = measured)
- Bounce/overshoot → playfulness (playful = bouncy, professional = smooth)
- Duration → importance signaling

### Photography / Illustration Tone

**Visual content style:**
- Photography: candid vs staged, saturated vs muted
- Illustration: detailed vs minimal, realistic vs abstract
- Usage patterns: when to use photos vs illustrations

### Sound / Haptic Feedback

When applicable:
- Notification sounds: tone, length, urgency mapping
- Interaction feedback: subtle vs pronounced
- Brand audio signature

---

## Translation: Semantic to Perceptual

The core of design system identity. For each semantic trait, document how it manifests in perceptual elements.

### Translation Matrix

Map each brand personality trait to specific perceptual decisions.

**Template:**

| Semantic Trait | Color | Typography | Shape | Spacing | Motion |
|---------------|-------|------------|-------|---------|--------|
| [trait 1] | [how it manifests] | [how it manifests] | [how it manifests] | [how it manifests] | [how it manifests] |
| [trait 2] | ... | ... | ... | ... | ... |

**Example:**

| Semantic Trait | Color | Typography | Shape | Spacing | Motion |
|---------------|-------|------------|-------|---------|--------|
| Approachable | Warm palette, medium saturation | Regular weight preferred, generous line-height | Corner radius 8px+, soft edges | Spacious, breathing room | Smooth easing, moderate speed |
| Innovative | Accent with unexpected hue | Modern sans-serif, varied scale | Mix of sharp and rounded | Dynamic, asymmetric | Emphasized easing, bold transitions |

### Translation Rules

For each perceptual decision, document:

1. **The value**: What it is (e.g., corner-radius: 8px)
2. **The semantic source**: Which brand trait drives it
3. **The rationale**: Why this value expresses that trait
4. **The boundary**: When to deviate and why

**Example:**
```
Token: shape-medium = 12px
Semantic source: "Approachable" personality
Rationale: Rounded corners feel friendly and welcoming,
  while maintaining enough structure for credibility
Boundary: Error states use 4px (shape-small) to convey seriousness
```

### Conflict Resolution

When semantic traits suggest conflicting perceptual choices:

1. Identify the conflict (e.g., "professional" suggests low saturation, "energetic" suggests high)
2. Prioritize by context: which trait matters more for this element?
3. Document the resolution and rationale
4. Create a hierarchy of traits for default conflict resolution

---

## Documentation Format

### Brand Identity Section

When documenting a project's brand identity:

```markdown
## Brand Identity

### Personality
- [Trait 1]: [definition] / Not: [boundary]
- [Trait 2]: [definition] / Not: [boundary]
- [Trait 3]: [definition] / Not: [boundary]

### Voice & Tone
- Default: [description]
- Error: [variation]
- Success: [variation]
- Onboarding: [variation]

### Relationship: [archetype]
[Description of product-user dynamic]

### Translation Matrix
[Matrix mapping traits to perceptual elements]

### Translation Rules
[For each key design token, semantic source and rationale]
```

### Integration with Token Implementation

Token values and component implementations in the codebase are SSoT. The design system documentation records the semantic rationale — not the values themselves.

```markdown
### Key Translation Rules
- `--color-primary`: Innovative — Blue conveys trust and forward-thinking
- `--shape-medium`: Approachable — Rounded corners create welcoming feel
- `--spacing-section`: Calm — Generous whitespace reduces cognitive load
```

These rules are referenced when introducing new tokens or reviewing existing ones. Existing implementation takes precedence unless it contradicts a documented principle.

---

## References

- Material Design Theming: https://m3.material.io/foundations/design-tokens/overview
- Material Color System: https://m3.material.io/styles/color/system/overview
