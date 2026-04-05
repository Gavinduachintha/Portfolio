# Tech UI Accent Components

Three lightweight, customizable React components for creating cyberpunk/tech UI aesthetics in your portfolio.

## Components

### 1. TechBrackets

Corner bracket decorations with a cyberpunk/tech UI style.

**Props:**
- `position` - Which corners to show: `'all'` | `'top-left'` | `'top-right'` | `'bottom-left'` | `'bottom-right'` (default: `'all'`)
- `size` - Size of brackets: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `color` - Color theme: `'blue'` | `'purple'` | `'cyan'` | `'violet'` (default: `'blue'`)
- `animated` - Enable pulse animation: `boolean` (default: `false`)
- `className` - Additional CSS classes

**Usage:**
```jsx
import { TechBrackets } from './components/ui';

<div className="relative p-8">
  <TechBrackets position="all" size="md" color="blue" animated />
  <div>Your content here</div>
</div>
```

---

### 2. LEDIndicator

Status LED component with pulsing animation and glow effect.

**Props:**
- `color` - LED color: `'green'` | `'blue'` | `'red'` | `'amber'` | `'purple'` (default: `'green'`)
- `size` - Size: `'xs'` | `'sm'` | `'md'` | `'lg'` (default: `'sm'`)
- `pulsing` - Enable pulsing animation: `boolean` (default: `false`)
- `label` - Optional label text: `string` (default: `''`)
- `labelPosition` - Label position: `'left'` | `'right'` (default: `'right'`)
- `className` - Additional CSS classes

**Color Guide:**
- `green` - Active/Online status
- `blue` - Loading/Processing
- `red` - Error/Offline
- `amber` - Warning/Caution
- `purple` - Idle/Standby

**Usage:**
```jsx
import { LEDIndicator } from './components/ui';

<LEDIndicator color="green" size="sm" pulsing label="ACTIVE" />
<LEDIndicator color="red" size="md" pulsing label="ERROR" />
```

---

### 3. DataReadout

Decorative system metrics display with terminal/tech aesthetic.

**Props:**
- `label` - Label text: `string` (required)
- `value` - Display value: `string | number` (required)
- `unit` - Unit of measurement: `string` (default: `''`)
- `animated` - Enable counter animation: `boolean` (default: `false`)
- `targetValue` - Target value for animation: `number` (default: `null`)
- `color` - Color theme: `'blue'` | `'purple'` | `'cyan'` | `'green'` (default: `'blue'`)
- `className` - Additional CSS classes

**Usage:**
```jsx
import { DataReadout } from './components/ui';

<DataReadout label="CPU" value={68} unit="%" color="blue" />
<DataReadout label="Memory" value={2048} unit="MB" animated targetValue={2048} />
<DataReadout label="Uptime" value="24h 15m" color="green" />
```

---

## Complete Example

```jsx
import { TechBrackets, LEDIndicator, DataReadout } from './components/ui';

function Dashboard() {
  return (
    <div className="relative bg-neutral-900 rounded p-8">
      <TechBrackets position="all" size="lg" color="blue" animated />
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">System Dashboard</h3>
          <LEDIndicator color="green" size="sm" pulsing label="ONLINE" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <DataReadout label="Projects" value={42} animated />
          <DataReadout label="CPU" value={68} unit="%" color="purple" />
          <DataReadout label="Memory" value={2048} unit="MB" color="cyan" />
          <DataReadout label="Latency" value={45} unit="ms" color="green" />
        </div>
      </div>
    </div>
  );
}
```

## Features

- ✅ Lightweight and performant
- ✅ Fully customizable with props
- ✅ Blue/purple color scheme with theme variants
- ✅ Subtle, professional animations
- ✅ Mobile responsive
- ✅ Tailwind CSS based
- ✅ TypeScript-friendly JSDoc comments

## Demo

See `TechUIDemo.jsx` for a comprehensive showcase of all components with various configurations.

## Browser Support

Works in all modern browsers that support:
- CSS custom properties
- CSS animations
- SVG
- ES6+
