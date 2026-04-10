# Graph Report - src  (2026-04-10)

## Corpus Check
- Corpus is ~13,413 words - fits in a single context window. You may not need a graph.

## Summary
- 72 nodes · 103 edges · 13 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "UI Components & Forms"
Cohesion: 0.18
Nodes (0): 

### Community 1 - "Product Catalog & Data"
Cohesion: 0.18
Nodes (0): 

### Community 2 - "App Shell & Layout"
Cohesion: 0.22
Nodes (0): 

### Community 3 - "Header & i18n System"
Cohesion: 0.28
Nodes (0): 

### Community 4 - "Pages & Routing"
Cohesion: 0.33
Nodes (0): 

### Community 5 - "CTA & Scroll Animations"
Cohesion: 0.4
Nodes (0): 

### Community 6 - "Stagger Animations & Features"
Cohesion: 0.5
Nodes (0): 

### Community 7 - "SEO Robots"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Counter Animation"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Parallax Layer"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Certificates"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Journey Section"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Animation Barrel Export"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `SEO Robots`** (2 nodes): `robots.ts`, `robots()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Counter Animation`** (2 nodes): `CounterAnimation.tsx`, `CounterAnimation()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Parallax Layer`** (2 nodes): `ParallaxLayer.tsx`, `ParallaxLayer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Certificates`** (2 nodes): `certificates.ts`, `CertificateStrip.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Journey Section`** (2 nodes): `JourneySection.tsx`, `JourneySection()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Animation Barrel Export`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._