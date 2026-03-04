# react-glass-ui 💎

> A gorgeously stylized, strictly glassmorphism React UI component library.

`react-glass-ui` was built from the ground up for developers who love the deep aesthetic of frosted glass, bright borders, and soft shadows. It utilizes purely modern Vanilla CSS rules natively bundled via Vite.

## Installation
```bash
npm install @dinakars777/react-glass-ui
```

## Setup
Import the core design tokens at the absolute root of your React application (usually `main.tsx` or `App.tsx`):
```tsx
import '@dinakars777/react-glass-ui/style.css';
```

## Usage
The library exports unstyled, fully typed, heavily animated Glass React components that accept standard HTML attributes instantly.

### Button
```tsx
import { Button } from '@dinakars777/react-glass-ui';

function App() {
  return (
    <>
      <Button variant="primary">Submit Data</Button>
      <Button variant="outline" size="lg">Read More</Button>
      <Button variant="ghost" fullWidth>Cancel Action</Button>
    </>
  )
}
```

### Card
```tsx
import { Card } from '@dinakars777/react-glass-ui';

function Dashboard() {
  return (
    <Card glow>
      <h2>Stunning Data Container</h2>
      <p>This box feels like floating glass instantly.</p>
    </Card>
  )
}
```

### Input
```tsx
import { Input } from '@dinakars777/react-glass-ui';

function Form() {
  return (
    <Input placeholder="Enter your email address..." />
  )
}
```

## License
MIT
