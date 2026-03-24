# react-glass-ui 💎

<div align="center">

[![npm version](https://img.shields.io/npm/v/@dinakars777/react-glass-ui?color=CB3837&logo=npm)](https://www.npmjs.com/package/@dinakars777/react-glass-ui)
[![npm downloads](https://img.shields.io/npm/dm/@dinakars777/react-glass-ui?color=CB3837&logo=npm)](https://www.npmjs.com/package/@dinakars777/react-glass-ui)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18%20%7C%2019-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org)

**[🌐 Interactive Demo & Documentation](https://dinakars777.github.io/react-glass-ui/)**

</div>

---

> A strictly glassmorphism React UI component library.

`react-glass-ui` is a fully typed, heavily animated React component library built around the glassmorphism aesthetic — frosted glass surfaces, glowing borders, and soft depth shadows. Bundled via Vite with zero runtime dependencies.

---

## Installation

```bash
npm install @dinakars777/react-glass-ui
```

---

## Setup

Import the design tokens once at the root of your app (`main.tsx` or `App.tsx`):

```tsx
import '@dinakars777/react-glass-ui/style.css';
```

---

## Components

### Button

```tsx
import { Button } from '@dinakars777/react-glass-ui';

<Button variant="primary">Submit</Button>
<Button variant="outline" size="lg">Read More</Button>
<Button variant="ghost" fullWidth>Cancel</Button>
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `"primary" \| "outline" \| "ghost"` | `"primary"` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `fullWidth` | `boolean` | `false` |

---

### Card

```tsx
import { Card } from '@dinakars777/react-glass-ui';

<Card glow>
  <h2>Glass Container</h2>
  <p>Frosted glass surface with optional glow.</p>
</Card>
```

| Prop | Type | Default |
|---|---|---|
| `glow` | `boolean` | `false` |

---

### Input

```tsx
import { Input } from '@dinakars777/react-glass-ui';

<Input placeholder="Enter your email..." />
```

Accepts all standard HTML `<input>` attributes.

---

## Peer Dependencies

```json
{
  "react": "^18.2.0 || ^19.0.0",
  "react-dom": "^18.2.0 || ^19.0.0"
}
```

---

## Used In

- [`arch-to-code`](https://github.com/dinakars777/arch-to-code) — Visual Terraform generator

---

## License

MIT
