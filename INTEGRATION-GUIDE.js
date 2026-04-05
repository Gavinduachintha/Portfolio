/**
 * QUICK START GUIDE - Circuit Board Background
 * ============================================
 * 
 * 📁 FILES CREATED:
 * 1. src/components/CircuitBoard.jsx - Main component
 * 2. src/CircuitBoardDemo.jsx - Full demo with examples
 * 3. CircuitBoard-README.md - Complete documentation
 * 
 * 🚀 QUICK INTEGRATION (3 steps):
 */

// STEP 1: Import the component
import CircuitBoard from './components/CircuitBoard';

// STEP 2: Add to your Hero section (or any section with position: relative)
function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', background: '#0f172a' }}>
      {/* Add Circuit Board as background */}
      <CircuitBoard />
      
      {/* Your content (make sure it has position: relative and z-index) */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Your Name</h1>
        <p>Backend Developer</p>
      </div>
    </section>
  );
}

// STEP 3 (Optional): Customize colors and animation
function CustomHero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', background: '#0f172a' }}>
      <CircuitBoard 
        intensity={0.5}           // How visible (0-1)
        speed="medium"            // 'slow' | 'medium' | 'fast'
        primaryColor="#3B82F6"    // Blue
        secondaryColor="#8B5CF6"  // Purple
      />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Your content */}
      </div>
    </section>
  );
}

/**
 * 🎨 COLOR PRESETS:
 */

// Electric Blue (default)
<CircuitBoard primaryColor="#3B82F6" secondaryColor="#8B5CF6" />

// Matrix Green
<CircuitBoard primaryColor="#10B981" secondaryColor="#6EE7B7" intensity={0.6} />

// Cyberpunk Red
<CircuitBoard primaryColor="#EF4444" secondaryColor="#F97316" intensity={0.3} />

// Cyan Tech
<CircuitBoard primaryColor="#06B6D4" secondaryColor="#3B82F6" />

/**
 * 📱 RESPONSIVE TIPS:
 * - Component auto-reduces opacity on mobile
 * - Use lower intensity (0.3-0.4) for better text readability on small screens
 * - The circuit pattern tiles seamlessly at any screen size
 */

/**
 * ⚡ PERFORMANCE:
 * - GPU-accelerated (uses CSS transforms)
 * - SVG patterns (efficient rendering)
 * - No JavaScript animation loops
 * - Respects prefers-reduced-motion
 */

/**
 * 🔧 TROUBLESHOOTING:
 * 
 * Q: Content is hidden behind the circuit board
 * A: Make sure your content has position: relative and z-index: 1 or higher
 * 
 * Q: Circuit board doesn't fill the container
 * A: Make sure parent has position: relative (not static)
 * 
 * Q: Want to move to effects folder?
 * A: Create folder: mkdir src\components\effects
 *    Move file: move src\components\CircuitBoard.jsx src\components\effects\
 *    Update import: from './components/effects/CircuitBoard'
 * 
 * Q: Animations too distracting?
 * A: Lower the intensity prop: <CircuitBoard intensity={0.2} />
 *    Or slow down: <CircuitBoard speed="slow" />
 */

export default Hero;
