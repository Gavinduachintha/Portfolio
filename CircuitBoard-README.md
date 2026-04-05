# Circuit Board Background Component

A professional SVG-based circuit board background effect for React portfolios with backend/electronics theme.

## Features

- 🎨 Customizable blue/purple gradients
- ⚡ GPU-accelerated animations (CSS transforms)
- 📱 Mobile responsive
- ♿ Respects `prefers-reduced-motion`
- 🎯 Performance optimized with SVG patterns
- 🔧 Fully customizable via props

## Installation

The component is located at: `src/components/CircuitBoard.jsx`

**Note:** You can move this to `src/components/effects/CircuitBoard.jsx` by:
1. Creating the directory: `mkdir src\components\effects`
2. Moving the file: `move src\components\CircuitBoard.jsx src\components\effects\CircuitBoard.jsx`

## Usage

### Basic Usage (Hero Section)

```jsx
import CircuitBoard from './components/CircuitBoard';

function Hero() {
  return (
    <section className="hero-section" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Circuit board background */}
      <CircuitBoard />
      
      {/* Your hero content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Your Name</h1>
        <p>Backend Developer & Electronics Engineer</p>
      </div>
    </section>
  );
}
```

### Custom Configuration

```jsx
import CircuitBoard from './components/CircuitBoard';

function CustomBackground() {
  return (
    <div style={{ position: 'relative', height: '100vh', background: '#0f172a' }}>
      <CircuitBoard
        intensity={0.6}           // 0-1, controls overall opacity (default: 0.4)
        speed="slow"              // 'slow' | 'medium' | 'fast' (default: 'medium')
        primaryColor="#3B82F6"    // Blue color for circuits
        secondaryColor="#8B5CF6"  // Purple color for circuits
        className="custom-circuit"
      />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Your content here */}
      </div>
    </div>
  );
}
```

### Integration Example (Full Hero Section)

```jsx
import CircuitBoard from './components/CircuitBoard';

function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b)' }}
    >
      {/* Animated Circuit Board Background */}
      <CircuitBoard 
        intensity={0.5}
        speed="medium"
        primaryColor="#3B82F6"
        secondaryColor="#8B5CF6"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-8">
          Backend Engineer & IoT Developer
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded">
            View Projects
          </button>
          <button className="px-6 py-3 border border-blue-500 text-blue-300 hover:bg-blue-900/30 rounded">
            Contact Me
          </button>
        </div>
      </div>
      
      {/* Optional: Overlay gradient for better text contrast */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'
        }}
      />
    </section>
  );
}

export default HeroSection;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `intensity` | `number` | `0.4` | Controls overall opacity (0-1). Lower = more subtle |
| `speed` | `'slow' \| 'medium' \| 'fast'` | `'medium'` | Animation speed of data pulses |
| `primaryColor` | `string` | `'#3B82F6'` | Primary color for circuit traces (blue) |
| `secondaryColor` | `string` | `'#8B5CF6'` | Secondary color for accents (purple) |
| `className` | `string` | `''` | Additional CSS classes |

## Customization Tips

### Color Schemes

**Electric Blue & Cyan:**
```jsx
<CircuitBoard 
  primaryColor="#06B6D4"
  secondaryColor="#3B82F6"
/>
```

**Neon Green (Matrix style):**
```jsx
<CircuitBoard 
  primaryColor="#10B981"
  secondaryColor="#6EE7B7"
  intensity={0.6}
/>
```

**Red & Orange (Warning/Alert theme):**
```jsx
<CircuitBoard 
  primaryColor="#EF4444"
  secondaryColor="#F97316"
  intensity={0.3}
/>
```

### Intensity Guidelines

- **0.2-0.3**: Very subtle, good for content-heavy sections
- **0.4-0.5**: Balanced (recommended for hero sections)
- **0.6-0.8**: Bold and prominent
- **0.9-1.0**: Maximum visibility (use with caution)

### Performance Notes

- Uses CSS `will-change` for GPU acceleration
- SVG patterns efficiently tile without excessive DOM nodes
- Animations use `transform` and `opacity` (GPU-friendly)
- Respects `prefers-reduced-motion` for accessibility
- Mobile-optimized with reduced opacity on small screens

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Accessibility

The component automatically:
- Disables animations for users with `prefers-reduced-motion`
- Uses `pointer-events: none` to avoid interfering with content
- Maintains proper contrast with customizable intensity

## Technical Details

### Architecture
- Pure SVG graphics (no canvas)
- CSS-driven animations (no JS animation loop)
- Unique gradient IDs prevent conflicts with multiple instances
- Pattern-based rendering for efficiency

### Files
- Main component: `src/components/CircuitBoard.jsx`
- No external dependencies beyond React and PropTypes

## License

Part of your portfolio project.
