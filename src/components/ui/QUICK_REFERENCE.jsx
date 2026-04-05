/**
 * TECH UI COMPONENTS - QUICK REFERENCE
 * ====================================
 * 
 * Import all components:
 * import { TechBrackets, LEDIndicator, DataReadout } from './components/ui';
 * 
 * Or import individually:
 * import TechBrackets from './components/ui/TechBrackets';
 * import LEDIndicator from './components/ui/LEDIndicator';
 * import DataReadout from './components/ui/DataReadout';
 */

// ============================================================================
// COMPONENT 1: TechBrackets
// ============================================================================

// Basic usage - all corners
<div className="relative p-8">
  <TechBrackets />
  <div>Content</div>
</div>

// Customized - specific corners, size, color
<div className="relative p-6">
  <TechBrackets position="top-left" size="lg" color="purple" />
  <TechBrackets position="bottom-right" size="lg" color="purple" />
  <h2>Title with accent corners</h2>
</div>

// Animated brackets (subtle pulse)
<div className="relative p-8">
  <TechBrackets position="all" size="md" color="blue" animated />
  <div>Featured content</div>
</div>

// Available props:
// - position: 'all' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
// - size: 'sm' | 'md' | 'lg'
// - color: 'blue' | 'purple' | 'cyan' | 'violet'
// - animated: boolean
// - className: string


// ============================================================================
// COMPONENT 2: LEDIndicator
// ============================================================================

// Status indicators
<LEDIndicator color="green" pulsing label="ACTIVE" />
<LEDIndicator color="blue" pulsing label="LOADING" />
<LEDIndicator color="red" pulsing label="ERROR" />
<LEDIndicator color="amber" pulsing label="WARNING" />

// Different sizes
<LEDIndicator color="green" size="xs" />
<LEDIndicator color="green" size="sm" />
<LEDIndicator color="green" size="md" />
<LEDIndicator color="green" size="lg" />

// Label positions
<LEDIndicator color="blue" label="Right Label" labelPosition="right" />
<LEDIndicator color="blue" label="Left Label" labelPosition="left" />

// Without label (just LED)
<LEDIndicator color="green" size="sm" pulsing />

// Available props:
// - color: 'green' | 'blue' | 'red' | 'amber' | 'purple'
// - size: 'xs' | 'sm' | 'md' | 'lg'
// - pulsing: boolean
// - label: string
// - labelPosition: 'left' | 'right'
// - className: string


// ============================================================================
// COMPONENT 3: DataReadout
// ============================================================================

// Simple metric
<DataReadout label="CPU Usage" value={68} unit="%" />

// Animated counter
<DataReadout 
  label="Total Users" 
  value={1234} 
  animated 
  targetValue={1234} 
/>

// Different colors
<DataReadout label="Memory" value={2048} unit="MB" color="blue" />
<DataReadout label="Active" value={42} color="purple" animated />
<DataReadout label="Latency" value={45} unit="ms" color="cyan" />

// String values (no animation)
<DataReadout label="Uptime" value="24h 15m" color="green" />
<DataReadout label="Status" value="Online" color="green" />

// Available props:
// - label: string (required)
// - value: string | number (required)
// - unit: string
// - animated: boolean
// - targetValue: number (for animation)
// - color: 'blue' | 'purple' | 'cyan' | 'green'
// - className: string


// ============================================================================
// REAL-WORLD EXAMPLES
// ============================================================================

// Example 1: Hero section with status
function Hero() {
  return (
    <div className="relative bg-neutral-900 rounded-lg p-12">
      <TechBrackets position="all" size="lg" color="blue" animated />
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="text-neutral-400">Full Stack Developer</p>
        </div>
        <LEDIndicator color="green" size="md" pulsing label="AVAILABLE" />
      </div>
    </div>
  );
}

// Example 2: Stats dashboard
function Stats() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <DataReadout label="Projects" value={24} animated color="blue" />
      <DataReadout label="Experience" value={5} unit="years" color="purple" />
      <DataReadout label="Technologies" value={32} animated color="cyan" />
      <DataReadout label="Clients" value={18} animated color="green" />
    </div>
  );
}

// Example 3: Project card with accents
function ProjectCard() {
  return (
    <div className="relative bg-neutral-900 rounded-lg p-6">
      <TechBrackets position="top-left" size="md" color="purple" />
      <TechBrackets position="bottom-right" size="md" color="purple" />
      
      <div className="mb-4">
        <LEDIndicator color="green" size="sm" pulsing label="LIVE" />
      </div>
      
      <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
      <p className="text-neutral-400">Modern shopping experience...</p>
    </div>
  );
}

// Example 4: Skills panel
function Skills() {
  return (
    <div className="relative bg-neutral-900 rounded-lg p-6">
      <TechBrackets position="all" size="sm" color="cyan" />
      
      <h3 className="text-lg font-bold mb-4">Technical Skills</h3>
      
      <div className="space-y-2">
        <LEDIndicator color="green" size="sm" pulsing label="React / Next.js" />
        <LEDIndicator color="green" size="sm" pulsing label="TypeScript" />
        <LEDIndicator color="blue" size="sm" label="Node.js" />
        <LEDIndicator color="blue" size="sm" label="Python" />
      </div>
    </div>
  );
}

// Example 5: Performance metrics
function Performance() {
  return (
    <div className="relative bg-neutral-900 rounded-lg p-6">
      <TechBrackets position="top-left" size="sm" color="green" />
      <TechBrackets position="top-right" size="sm" color="green" />
      
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        Performance
        <LEDIndicator color="green" size="sm" pulsing />
      </h3>
      
      <div className="grid grid-cols-4 gap-3">
        <DataReadout label="Score" value={98} unit="/100" color="green" />
        <DataReadout label="Load" value={1.2} unit="s" color="blue" />
        <DataReadout label="Uptime" value={99.9} unit="%" color="purple" />
        <DataReadout label="Ping" value={45} unit="ms" color="cyan" />
      </div>
    </div>
  );
}


// ============================================================================
// COLOR SCHEME GUIDE
// ============================================================================

/*
BLUE (#3b82f6):
- Primary actions
- Main statistics
- General tech aesthetic
- Default choice

PURPLE (#a855f7):
- Premium features
- Special highlights
- Creative elements
- Artistic sections

CYAN (#06b6d4):
- Secondary information
- Technical details
- Cool, modern feel
- Data visualization

GREEN (#22c563):
- Success states
- Active status
- Positive metrics
- Online indicators

RED (#ef4444):
- Error states (LEDIndicator only)
- Alerts
- Critical warnings

AMBER (#f59e0b):
- Warning states (LEDIndicator only)
- Pending actions
- Caution indicators
*/


// ============================================================================
// BEST PRACTICES
// ============================================================================

/*
1. USE SPARINGLY:
   - Don't overuse animations (pulsing LEDs, animated brackets)
   - Use accents strategically for important sections

2. CONTAINER REQUIREMENTS:
   - TechBrackets require parent with position: relative
   - Components work best on dark backgrounds (neutral-900)

3. MOBILE RESPONSIVENESS:
   - All components are mobile-friendly
   - Consider hiding decorations on very small screens if needed
   - DataReadout works well in grid layouts that collapse on mobile

4. PERFORMANCE:
   - Components are lightweight (SVG + CSS)
   - Animations use CSS, not JavaScript
   - No performance concerns with multiple instances

5. ACCESSIBILITY:
   - LEDIndicator includes aria-label
   - Use labels for screen readers
   - Ensure sufficient color contrast

6. COMBINING COMPONENTS:
   - Mix and match for rich UI
   - Keep color scheme consistent per section
   - Use same colors for related elements
*/
