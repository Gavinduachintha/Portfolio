# GlitchText Component - Enhanced Features

## Overview
The GlitchText component now includes advanced glitch effects while maintaining full backward compatibility.

## Basic Usage (Unchanged)
```jsx
import GlitchText from './components/ui/GlitchText';

// Simple glitch effect
<GlitchText>Hello World</GlitchText>

// With original props
<GlitchText 
  speed={2} 
  enableShadows={true} 
  enableOnHover={false}
>
  Welcome
</GlitchText>
```

## New Advanced Effects

### 1. RGB Split Effect on Hover
Chromatic aberration effect triggered on hover with blue/purple theme.

```jsx
<GlitchText rgbSplitOnHover={true}>
  Hover over me
</GlitchText>
```

**Features:**
- Smooth 0.3s transition
- Blue (#3B82F6) and purple (#8B5CF6) color split
- 2-3px offset for subtle depth
- GPU-accelerated transforms

### 2. Random Glitches
Subtle, periodic glitches that don't interfere with readability.

```jsx
<GlitchText 
  enableRandomGlitches={true}
  randomGlitchIntensity={0.02}
>
  I glitch randomly
</GlitchText>
```

**Props:**
- `enableRandomGlitches`: Enable random glitch effect (default: false)
- `randomGlitchIntensity`: Frequency of glitches (default: 0.02 = 2%)

**Features:**
- Checks every second for potential glitch
- 100-200ms duration
- Uses blue/purple RGB split

### 3. Data Corruption Animation
Characters corrupt to tech symbols then reconstruct.

```jsx
<GlitchText 
  dataCorruption={true}
  corruptOnMount={true}
>
  Matrix Style Text
</GlitchText>
```

**Props:**
- `dataCorruption`: Enable corruption effect (default: false)
- `corruptOnMount`: Auto-trigger on component mount (default: false)

**Features:**
- Uses tech characters: 01█▓▒░!<>-_\/[]{}—=+*^?#
- Reconstructs character by character
- 30ms per iteration
- Smooth reveal animation

### 4. Chromatic Aberration for Depth
Persistent subtle chromatic effect for 3D feel.

```jsx
<GlitchText 
  chromaticAberration={true}
  chromaticIntensity={0.5}
>
  3D Depth Effect
</GlitchText>
```

**Props:**
- `chromaticAberration`: Enable chromatic aberration (default: false)
- `chromaticIntensity`: Effect intensity 0-1 (default: 0.5)

**Features:**
- Subtle floating animation (4s ease-in-out)
- Blue/purple channel separation
- Configurable intensity
- Works with RGB split hover

## Combining Effects

```jsx
// Professional heading with multiple effects
<GlitchText
  rgbSplitOnHover={true}
  chromaticAberration={true}
  chromaticIntensity={0.3}
  enableRandomGlitches={true}
  randomGlitchIntensity={0.01}
  as="h1"
  className="text-4xl font-bold"
>
  Advanced Glitch Text
</GlitchText>

// Loading/intro text with corruption
<GlitchText
  dataCorruption={true}
  corruptOnMount={true}
  chromaticAberration={true}
>
  Initializing...
</GlitchText>
```

## All Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | string/node | required | Text content to display |
| speed | number | 1 | Animation speed multiplier |
| enableShadows | boolean | true | Enable original glitch shadows |
| enableOnHover | boolean | false | Activate glitch on hover only |
| className | string | "" | Additional CSS classes |
| as | string | "span" | HTML element to render |
| **rgbSplitOnHover** | boolean | false | RGB split on hover |
| **enableRandomGlitches** | boolean | false | Random periodic glitches |
| **randomGlitchIntensity** | number | 0.02 | Glitch frequency (0-1) |
| **dataCorruption** | boolean | false | Enable corruption animation |
| **corruptOnMount** | boolean | false | Auto-trigger corruption |
| **chromaticAberration** | boolean | false | Persistent chromatic effect |
| **chromaticIntensity** | number | 0.5 | Chromatic intensity (0-1) |

## Accessibility

All animations respect `prefers-reduced-motion`:
- Animations are disabled
- Transitions are removed
- Hover effects are simplified

## Performance

- Uses `will-change` for GPU acceleration
- Transform-based animations (no layout reflows)
- Efficient DOM updates
- Cleanup on unmount prevents memory leaks

## Color Scheme

All new effects use the consistent blue/purple theme:
- Blue: `#3B82F6`
- Purple: `#8B5CF6`

This matches modern tech aesthetics and provides excellent contrast.
