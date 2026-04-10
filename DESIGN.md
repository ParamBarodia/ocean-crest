# Ocean Crest Exports — Design System

## 1. Visual Theme & Atmosphere

Ocean Crest Exports is a B2B spice and commodity export brand under Sheth & Bhatt's LLP. The design communicates verified quality, transparency, and professional trust — not flashy consumer branding. The palette is drawn directly from the company logo: a deep institutional blue (`#1B3A5C`) paired with warm golden accents (`#C5923A`) on a beige canvas (`#F5F0E8`). This creates a visual identity that reads as both maritime/trading and warm/premium — the blue evokes ocean trade routes, the gold signals quality and value, and the beige ground keeps everything approachable rather than corporate-cold.

The typography pairing is Cormorant (display serif) and Montserrat (body sans-serif). Cormorant at large sizes carries the luxury and heritage signal — its high-contrast strokes and elegant proportions suggest tradition and craftsmanship. Montserrat provides the clean geometric counterpoint for body text, forms, and UI elements. The contrast between an ornate serif and a geometric sans creates visual tension that feels premium without being pretentious.

The interaction model is restrained. Hover animations use 200-300ms transitions on color and transform only (no layout-triggering properties). Scroll reveals are subtle fade-ups at 600ms with staggered delays. The signature interaction is the Everest-style nav underline — a golden line that slides in from left on hover via `transform-origin` swap. Product cards use image scale to 1.08 on hover with gradient overlay transitions. Nothing bounces, nothing pulses continuously, nothing demands attention — elements respond when addressed.

**Key Characteristics:**
- Cormorant serif for display headings (400-700 weight), Montserrat sans for everything else (300-700)
- Deep blue (`#1B3A5C`) as primary brand color — used for dark sections, headings, header on scroll
- Golden (`#C5923A`) as sole accent — CTAs, underlines, icons, hover states, certification badges
- Warm beige (`#F5F0E8`) as primary background — not white, not gray, distinctly warm
- Liquid glass effect (`.glass` / `.glass-light`) for overlay cards and hero elements
- Navy-tinted shadows: `rgba(27,58,92,0.06)` base — shadows that feel brand-colored
- Golden signature lines (`.gold-line`, `.gold-line-left`) as section accents
- Scroll progress bar (golden, 2px, fixed top) indicating page position
- Header hides on scroll-down, reveals on scroll-up (Everest pattern)
- Ken Burns slow zoom on hero background image (20s infinite alternate)
- Product images scale 1.08 on hover with 500ms ease-out (Everest pattern)
- `prefers-reduced-motion` globally respected in CSS

## 2. Color Palette & Roles

### Primary Brand
- **Deep Blue** (`#1B3A5C`): Primary heading color, dark section backgrounds, header on scroll, nav text, footer background. The anchor of the entire system.
- **Blue Light** (`#2A5380`): Hover state for secondary buttons, lighter dark sections.
- **Blue Muted** (`#4A7AAB`): Tertiary blue for decorative elements, subtle accents.

### Accent
- **Gold** (`#C5923A`): The sole accent color. CTA button backgrounds, nav underlines, icon tints, certification badges, section eyebrow text, form focus rings, scroll progress bar. Reserved exclusively for elements that need to draw attention or indicate interactivity.
- **Gold Light** (`#D4A84E`): Hover state for gold CTAs, golden gradient text highlights.
- **Gold Muted** (`#A67B2E`): Active/pressed state for gold elements.

### Spice Tones (Decorative only)
- **Spice** (`#C4724E`): Warm terracotta for decorative accents.
- **Cinnamon** (`#92400E`): Deep warm brown.
- **Saffron** (`#D97706`): Bright warm yellow.
- **Teal** (`#0D7C6E`): Cool green for success states and checkmarks.

### Neutral / Surface
- **Stone** (`#F5F0E8`): Primary page background. A warm beige — the defining surface color.
- **Stone 100** (`#EDE8DF`): Secondary surface for alternating sections, form input backgrounds.
- **Stone 200** (`#DDD6CA`): Tertiary surface, hover backgrounds.
- **Stone 300** (`#C8BFB0`): Scrollbar thumb, disabled states.
- **Warm White** (`#FAF7F2`): Lightest surface for cards, elevated elements.

### Text
- **Ink** (`#1A1A2E`): Primary text color. Near-black with a slight blue undertone.
- **Ink Muted** (`#5A6275`): Secondary text, descriptions, form labels.
- **Ink Light** (`#7A8498`): Tertiary text, placeholders, timestamps.

### Borders
- **Edge** (`#D4CCB8`): Primary border color for cards, dividers, form inputs.
- **Edge Light** (`#E5DFD2`): Subtle borders for secondary elements.

### Shadow System
Shadows use a navy-tinted base color `rgba(27,58,92,...)` so that elevation feels brand-colored:
- **Card** (`0 1px 3px rgba(27,58,92,0.06)`): Default card elevation.
- **Card Hover** (`0 4px 16px rgba(27,58,92,0.1)`): Hovered/focused cards.
- **Modal** (`0 8px 32px rgba(27,58,92,0.14)`): Modals, dropdown menus.
- **Hero** (`0 20px 60px rgba(27,58,92,0.18)`): Hero elements, large cards.
- **Gold Glow** (`0 4px 20px rgba(197,146,58,0.25)`): CTA button glow on hover.

### Functional
- **Error** (`#DC2626`): Form validation errors.
- **Success** (`#16A34A`): Success messages.
- **WhatsApp** (`#25D366`): WhatsApp FAB button only.

## 3. Typography Rules

### Font Families
- **Display**: `Cormorant`, fallback: `Georgia, serif`
  - CSS variable: `--font-cormorant`
  - Applied via: `font-[family-name:var(--font-display)]`
  - Loaded via `next/font/google` with weights 400, 500, 600, 700
- **Body / UI**: `Montserrat`, fallback: `system-ui, sans-serif`
  - CSS variable: `--font-montserrat`
  - Loaded via `next/font/google` with weights 300, 400, 500, 600, 700

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero Heading | Cormorant | 80px (5.0rem) | 300-700 | 0.95 | -0.02em | Split lines: light weight + bold gradient |
| Page Title (H1) | Cormorant | 48px (3.0rem) | 700 | 1.15 | -0.02em | Inner page hero banners |
| Section Title (H2) | Cormorant | 40-44px (2.5-2.75rem) | 600 | 1.15 | -0.02em | Main section headings |
| Card Title (H3) | Cormorant | 20-22px (1.25-1.375rem) | 600 | 1.15 | -0.02em | Product cards, feature cards |
| Eyebrow | Montserrat | 11px (0.69rem) | 500-600 | 1.0 | 0.3em | Section labels, uppercase tracking |
| Nav Link | Montserrat | 13-14px (0.81-0.875rem) | 600 | 1.0 | 0.05-0.1em | Uppercase, golden underline on hover |
| Body | Montserrat | 16px (1.0rem) | 400 | 1.6 | normal | Standard reading text |
| Body Light | Montserrat | 16px (1.0rem) | 300 | 1.6 | normal | Hero subtitles, descriptions on dark |
| Small | Montserrat | 14px (0.875rem) | 400 | 1.5 | normal | Secondary descriptions, card text |
| Caption | Montserrat | 11-12px (0.69-0.75rem) | 500 | 1.3 | 0.1-0.2em | Labels, badges, timestamps |
| Button | Montserrat | 11-14px (0.69-0.875rem) | 600-700 | 1.0 | 0.15em | Uppercase, tracking wide |
| Form Label | Montserrat | 11px (0.69rem) | 500 | 1.0 | wider | Uppercase, gold on dark forms |

### Principles
- Cormorant is **only** for headings (H1-H3). Never used for body, buttons, labels, or nav.
- Montserrat is **everything else** — body, buttons, nav, labels, forms, captions.
- Eyebrows are always: `text-[11px] font-medium tracking-[0.3em] uppercase text-gold`
- The golden gradient text effect (`.text-gradient-copper`) is reserved for hero heading accent words only.
- Letter-spacing on headings: `-0.02em` (slight negative). On eyebrows/buttons: `0.1-0.3em` (wide positive).

## 4. Component Stylings

### Buttons

**Primary (Gold CTA)**
- Background: `#C5923A` (gold)
- Text: `#ffffff` (white)
- Padding: 10px 20px (sm), 12px 24px (md), 16px 32px (lg)
- Radius: 6px (`--radius-sm`)
- Font: 11-14px Montserrat weight 600, tracking 0.15em, uppercase
- Hover: `#D4A84E` (gold-light) background
- Focus: `outline-2 outline-offset-2 outline-gold`
- Active: `scale(0.98)`

**Secondary (Blue)**
- Background: `#1B3A5C` (primary)
- Text: `#ffffff`
- Hover: `#2A5380` (primary-light)

**Outline**
- Background: transparent
- Border: 2px solid `#1B3A5C`
- Text: `#1B3A5C`
- Hover: fill `#1B3A5C`, text white

**Ghost**
- Background: transparent
- Text: `#1B3A5C`
- Hover: `#F5F0E8` (stone) background

**WhatsApp**
- Background: `#25D366`
- Text: white
- Hover: `#1ebe57`

### Cards

**Default Card**
- Background: white
- Radius: 12px (`--radius-md`)
- Shadow: `card` (navy-tinted)
- Hover: translate-y -6px + `card-hover` shadow (300ms ease-out)
- All clickable cards have `cursor-pointer`

**Glass Card (dark backgrounds)**
- Background: `rgba(255,255,255,0.07)`
- Backdrop-filter: `blur(16px) saturate(180%)`
- Border: `1px solid rgba(255,255,255,0.15)`

**Glass Card Light (light backgrounds)**
- Background: `rgba(250,247,242,0.9)`
- Backdrop-filter: `blur(12px) saturate(150%)`
- Border: `1px solid rgba(212,204,184,0.5)`

### Form Inputs

- Background: `#EDE8DF` (stone-100) on light, `rgba(255,255,255,0.05)` on dark
- Border: 1px solid `#D4CCB8` (edge)
- Radius: 6px
- Padding: 10px 12px
- Font: 14px Montserrat weight 400
- Focus: `ring-2 ring-gold/40 border-gold`
- Error: `border-error ring-error/20`
- Labels always use `htmlFor` + input `id` (accessibility requirement)

### Navigation

**Header**
- Position: fixed, z-50
- Initial: transparent background with gradient `from-black/40 to-transparent`
- Scrolled (>60px): `bg-white/95 backdrop-blur-xl`
- Hides on scroll-down (>300px), reveals on scroll-up
- Nav links: 13px Montserrat weight 600, uppercase, tracking 0.05em
- Hover: text changes to gold, golden underline slides in from left (origin-swap trick)
- CTA button: gold pill (`rounded-full`)

**Mobile Drawer**
- Slides from right (spring animation)
- Dark background (`#1B3A5C`)
- Links stagger-animate in on open
- Full-height with scroll

### Scroll Progress Bar
- Fixed top, z-60
- Height: 2px
- Color: gold (`#C5923A`)
- Width: linked to `scrollYProgress` via Framer Motion

## 5. Layout Principles

### Containers
- Max width: `max-w-7xl` (1280px) — consistent across all sections
- Horizontal padding: `px-6` mobile, `lg:px-8` desktop
- Content areas for long-form text: `max-w-4xl` or `max-w-5xl` centered

### Section Spacing
- Standard: `py-24 lg:py-32` (consistent rhythm)
- Hero sections: `py-32 lg:py-40`
- Compact strips: `py-16 lg:py-20`

### Section Background Rhythm
Sections alternate backgrounds to create visual separation:
1. Dark (primary `#1B3A5C`) — hero, journey, CTA, footer
2. Beige (stone `#F5F0E8`) — products, why choose us
3. Light beige (stone-100 `#EDE8DF`) — certificates
4. Warm white (`#FAF7F2`) — about sections, values

### Grid Patterns
- Two-column: `grid lg:grid-cols-2 gap-10 lg:gap-16`
- Product grid: `grid sm:grid-cols-2 gap-5 lg:gap-6`
- Feature grid: `grid grid-cols-2 gap-x-8 gap-y-10`
- Process steps: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6`

### Responsive Breakpoints
- Mobile: 0-639px (single column)
- Tablet: 640px (`sm:`)
- Desktop: 1024px (`lg:`)
- Container max: 1280px (`max-w-7xl`)

### Z-Index Scale
- Scroll progress bar: z-60
- Header: z-50
- Mobile drawer overlay: z-50
- WhatsApp FAB: z-40
- Dropdown menus: z-50 (within header)
- Toast notifications: z-50

## 6. Animation & Interaction

### Scroll Reveals (Framer Motion)
- **Fade up**: opacity 0→1, translateY 40→0, duration 600ms, ease `[0.16, 1, 0.3, 1]`
- **Stagger children**: 80-120ms delay per child
- **Viewport trigger**: `amount: 0.15-0.2`, `once: true`
- All wrapped in `prefers-reduced-motion` check via global CSS

### Hover Effects
- **Product cards**: image `scale(1.08)` at 500ms ease-out, gradient overlay lightens
- **Tags**: slide in from above (`-translate-y-2` → `0`) on card hover
- **Arrow buttons**: fade in + scale (`0.75` → `1`) on card hover
- **Nav links**: golden underline via CSS `scaleX` with origin-swap
- **Buttons**: background color transition 200ms, `scale(0.98)` on active
- **Feature icons**: background `gold/10` → `gold/20` on group hover

### Page-Level
- **Ken Burns**: background images zoom `scale(1)` → `scale(1.05)` over 20s, alternating
- **Floating**: decorative elements use `@keyframes float` (6-8s ease-in-out infinite)
- **Marquee**: product names scroll horizontally at 30s linear infinite
- **Header transition**: background changes over 500ms, hides/reveals with 300ms slide

### Timing Guidelines
- Micro-interactions: 150-200ms
- Hover transitions: 200-300ms
- Scroll reveals: 500-600ms
- Page transitions: 300ms
- Float/ambient: 6000-8000ms
- Never animate `width`, `height`, `top`, `left` — use `transform` and `opacity` only

## 7. Imagery

### Product Images
- Source: Unsplash (placeholder until client provides real photos)
- Format: WebP/AVIF via next/image
- Aspect ratio: 4:3 for catalog cards, 1:1 for product detail
- Hover: `scale(1.08)` with gradient overlay transition
- Alt text: descriptive (e.g., "Dehydrated garlic powder in export packaging")

### Hero Background
- Full-width, Ken Burns animation
- Dark overlay: `bg-primary/85` for text readability
- Gradient mesh overlay for depth

### Product Detail
- Toggle between Photo view and 3D View (WIP — needs real GLB models)
- Default: 2D image with zoom on hover

## 8. Branding

### Logo Text
- Primary: "OCEAN CREST EXPORTS" in Cormorant, uppercase, tracking 0.08em
- Sub: "Part of Sheth & Bhatt's LLP" in Montserrat, 9px, tracking 0.25em, gold color
- Mark: Circle with "OC" in Cormorant, bordered in gold

### Tagline
- "Your Verified Partner for Indian Commodities"
- Displayed in hero as eyebrow text in gold

### Parent Company
- Always shown: "Part of Sheth & Bhatt's LLP"
- Footer copyright includes both entities

## 9. Accessibility

- All text meets WCAG 2.1 AA contrast (4.5:1 minimum)
- Footer text: minimum `white/55` opacity on dark backgrounds
- Form inputs have associated `<label>` elements with `htmlFor`/`id`
- Focus rings: `focus-visible:outline-2 focus-visible:outline-gold` on buttons, `focus:ring-2 focus:ring-gold/40` on inputs
- Icon-only buttons have `aria-label`
- Decorative images have `aria-hidden="true"`
- Touch targets: minimum 44x44px (social icons are `w-11 h-11`)
- `prefers-reduced-motion` disables all animations globally
- RTL support for Arabic and Urdu via `dir="rtl"` and CSS logical properties

## 10. Internationalization

12 languages supported: English, Hindi, Arabic, Urdu, French, German, Spanish, Russian, Chinese, Italian, Korean, Japanese.

RTL languages (Arabic, Urdu) trigger `dir="rtl"` on `<html>`.

Language switcher in header with native script names (e.g., "العربية", "हिन्दी", "日本語").

## 11. Agent Prompt Guide

When building new pages or components for this project:
1. Use `primary` (#1B3A5C) for headings and dark sections
2. Use `gold` (#C5923A) as the **only** accent color — no other bright colors
3. Use `stone` (#F5F0E8) as page background — never pure white
4. Headings in Cormorant via `font-[family-name:var(--font-display)]`
5. Everything else in Montserrat (default body font)
6. Eyebrows: `text-[11px] font-medium tracking-[0.3em] uppercase text-gold`
7. Section padding: `py-24 lg:py-32`
8. Container: `max-w-7xl mx-auto px-6 lg:px-8`
9. Cards: `bg-white rounded-[var(--radius-md)] shadow-card`
10. Gold CTA buttons, blue secondary buttons
11. Hover: 200-300ms transitions, `cursor-pointer` on everything clickable
12. No emojis as icons — use Lucide React
13. All images via `next/image` with `unoptimized` for external URLs
14. Forms need `htmlFor`/`id`, `focus:ring-2 focus:ring-gold/40`, `aria-*` attributes
