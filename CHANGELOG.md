# Changelog

All notable changes to this project will be documented in this file.
 
## [1.0.5] - 2026-02-18
### Fixed
- Improved package resolution by adding an `index.js` entry point and modern `exports` configuration.
- Fixed "Cannot find module" errors in TypeScript by adding explicit module declarations in `index.d.ts`.
- Included `reset.min.css` in the package exports for direct sub-path access.

## [1.0.4] - 2026-02-18
### Added
- New demo section "Visual Assets" for testing image block-level and responsiveness.
- Improved "Lists with Classes" section in demo for clear side-by-side comparison.

## [1.0.3] - 2026-02-17
### Added
- Normalization for `hr`, `abbr[title]`, `code/kbd/samp/pre`.
- `[popover]` exclusion from margin reset alongside `dialog`.
- `dialog` color inheritance for dark theme compatibility.

### Changed
- Moved `scroll-behavior: smooth` inside `prefers-reduced-motion` media query (A11Y).
- Replaced `height: auto` with `block-size: auto` for full logical properties consistency.

### Removed
- `shape-margin` from `img` (decorative, belongs in design system).
- `::selection` styles (project-specific, not a reset concern).

## [1.0.2] - 2026-02-17
### Added
- Professional documentation badges (NPM, MIT, Bundle Size) in `README.md`.
- Enriched feature comparison table (Logical Properties, Scrollbar Stability, Framework Isolation).

## [1.0.1] - 2026-02-17
### Fixed
- Corrected `README.md` features table (removed inaccurate `aspect-ratio` mention).
- Build optimization: confirmed scoped package configuration.

## [1.0.0] - 2026-02-17
### Added
- Initial release of `modern-reset`.
- Zero-specificity implementation using `:where()`.
- Defensive layout patterns (`scrollbar-gutter`, `overflow-x: clip`).
- Modern form handling (`field-sizing: content`).
- Typography balance and fluid-ready structure.
