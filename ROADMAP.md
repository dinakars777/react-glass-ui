# react-glass-ui Roadmap

Updated: 2026-05-23

## Current Baseline

Recent maintenance reduced the repo's immediate release risk:

- PR #2 restored `npm run lint` and `npm run build`, updated the toolchain, removed unused Storybook test tooling that pulled in a high audit finding, and ignored generated Storybook output.
- PR #3 fixed package artifacts by generating real declaration files, emitting the documented `dist/style.css`, and keeping Vite demo assets out of the npm tarball.
- PR #4 moved the GitHub Pages workflow to current official action majors and Node 24.
- PR #5 kept `npm run lint` green after local Storybook builds by ignoring `storybook-static`.

Current verified commands:

- `npm ci`
- `npm run lint`
- `npm run build`
- `npm run build-storybook`
- `npm pack --dry-run --json`
- packed tarball install plus TypeScript consumer typecheck
- `npm audit --audit-level=high`

Known remaining audit surface:

- `npm audit` still reports 3 moderate findings through `@storybook/addon-essentials -> @storybook/addon-actions -> uuid`. npm's automatic fix recommends a breaking downgrade, so this should be handled as a deliberate Storybook addon strategy instead of a blind `npm audit fix --force`.

## Roadmap

### 1. Release Reliability

Goal: make every package publish path reproducible before code reaches `main`.

Recommended next PRs:

- Add a `CI` workflow for `pull_request` and `push` that runs `npm ci`, `npm run lint`, `npm run build`, `npm run build-storybook`, `npm pack --dry-run --json`, and a packed-consumer typecheck.
- Add a `prepack` or `prepublishOnly` script that runs the package contract checks before publishing.
- Add release automation with versioning, changelog generation, npm provenance, and an explicit publish workflow.
- Review library externals and `sideEffects` metadata so React peer dependencies and CSS imports behave predictably under consumer bundlers.

Success signals:

- A PR cannot merge while lint, build, Storybook, or package-contract checks are broken.
- The npm tarball contains only intended package artifacts.
- A release can be traced to a changelog entry and GitHub workflow run.

### 2. Dependency And Security Maintenance

Goal: keep development tooling current without hiding real package risk.

Recommended next PRs:

- Resolve the remaining Storybook `uuid` advisory by either replacing the affected `addon-actions` path, upgrading Storybook when the addon set supports it cleanly, or removing actions-related functionality if it is not used.
- Add Dependabot or Renovate for npm and GitHub Actions updates.
- Add a scheduled audit workflow that fails on high or critical findings and reports moderate findings for triage.

Success signals:

- `npm audit --audit-level=moderate` has a documented target state.
- Dependency PRs include the same package-contract verification as normal code PRs.
- GitHub Actions versions do not drift into runtime deprecation warnings.

### 3. Component Correctness And Accessibility

Goal: make component behavior stable enough for consumers to depend on.

Recommended next PRs:

- Add Vitest and React Testing Library coverage for `Button`, `Card`, and `Input` defaults, class composition, ref forwarding, prop passthrough, disabled states, and error states.
- Add accessibility behavior where the component API implies it, starting with `Input` error state support such as `aria-invalid`.
- Add keyboard and focus-visible regression coverage for interactive components.
- Add visual regression coverage through Storybook test tooling or a hosted visual review service once the Storybook addon audit path is resolved.

Success signals:

- Component behavior changes require test updates.
- Accessibility regressions are caught in CI.
- Consumers can trust documented defaults and prop tables.

### 4. Design System Depth

Goal: turn the current glassmorphism components into a coherent, themeable system.

Recommended next PRs:

- Document the CSS custom properties in `src/style.css` and define supported override patterns.
- Add first-class light, dark, and high-contrast theme examples.
- Add reduced-motion handling for glow, transform, and transition-heavy states.
- Expand the component set only after test and release foundations exist. Good candidates are `Badge`, `Modal`, `Tooltip`, `Select`, and `Toast`.

Success signals:

- Theme changes do not require editing component source.
- Components behave consistently across themes and motion preferences.
- New components follow the same API, CSS, and test patterns as the initial set.

### 5. Documentation And Demo Experience

Goal: make the project credible to npm users and useful to adopters.

Recommended next PRs:

- Replace the default Vite demo app in `src/App.tsx`, `src/App.css`, `src/index.css`, `src/assets/react.svg`, and `public/vite.svg` with a small local playground for the library.
- Expand Storybook docs with install guidance, CSS import guidance, theme examples, and accessibility notes.
- Add README sections for package contents, supported React versions, browser support, and release process.
- Add examples for composition patterns, not only individual component snippets.

Success signals:

- The local dev app demonstrates the library rather than the Vite starter.
- Storybook and README agree on installation, styling, defaults, and supported use cases.
- A new consumer can install, import CSS, render components, and understand theme customization without reading source.

## Suggested Sequence

1. Add PR CI and package-contract checks.
2. Resolve the remaining Storybook `uuid` advisory.
3. Add component tests and accessibility fixes for the existing three components.
4. Replace the Vite starter demo with a library playground.
5. Add release automation and npm provenance.
6. Expand theming and component coverage.
