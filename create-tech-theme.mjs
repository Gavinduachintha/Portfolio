import { mkdir } from 'fs/promises';
import { writeFile } from 'fs/promises';

// Create directory
await mkdir('src/styles', { recursive: true });
console.log('Directory created: src/styles');

// Create CSS file
const cssContent = `/**
 * PCB & Electronics-Themed Visual Motifs
 * 
 * Usage Examples:
 * <div className="pcb-trace horizontal"></div>
 * <div className="pcb-node pulse-glow"></div>
 * <div className="circuit-path data-flow"></div>
 * <span className="solder-joint"></span>
 */

/* ==================== COLOR DEFINITIONS ==================== */
:root {
  /* PCB Green Substrate */
  --pcb-green-dark: #1B5E20;
  --pcb-green: #2E7D32;
  --pcb-green-light: #388E3C;
  
  /* Copper Traces */
  --copper: #B87333;
  --copper-dark: #8B4513;
  --copper-light: #CD7F32;
  --copper-shine: #D4A574;
  
  /* Solder & Contacts */
  --solder-silver: #C0C0C0;
  --solder-shine: #E8E8E8;
  --gold-contact: #FFD700;
  --gold-contact-dark: #DAA520;
  
  /* Tech Accents (Blue/Purple Integration) */
  --tech-blue: #2196F3;
  --tech-purple: #9C27B0;
  --tech-cyan: #00BCD4;
  --tech-glow: rgba(33, 150, 243, 0.6);
  
  /* Silkscreen */
  --silkscreen-white: #F5F5F5;
}

/* ==================== PCB TRACE STYLES ==================== */
.pcb-trace {
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--copper-shine) 0%,
    var(--copper) 50%,
    var(--copper-dark) 100%
  );
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.pcb-trace.horizontal {
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
}

.pcb-trace.vertical {
  width: 3px;
  height: 100%;
  border-radius: 1.5px;
}

.pcb-trace.thick {
  height: 5px;
  border-radius: 2.5px;
}

.pcb-trace.thin {
  height: 2px;
  border-radius: 1px;
}

.pcb-trace.angled {
  transform: rotate(45deg);
  transform-origin: left center;
}

/* ==================== PCB NODE / SOLDER PAD ==================== */
.pcb-node {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    var(--copper-shine),
    var(--copper) 40%,
    var(--copper-dark)
  );
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.4),
    inset 0 1px 2px rgba(255, 255, 255, 0.4),
    0 0 8px rgba(184, 115, 51, 0.3);
}

.pcb-node.large {
  width: 20px;
  height: 20px;
}

.pcb-node.small {
  width: 8px;
  height: 8px;
}

.pcb-node.square {
  border-radius: 2px;
}

/* ==================== PCB VIA (Through-hole) ==================== */
.pcb-via {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    #1a1a1a 0%,
    #1a1a1a 30%,
    var(--copper) 31%,
    var(--copper-light) 100%
  );
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.5),
    inset 0 0 2px rgba(0, 0, 0, 0.8);
}

.pcb-via.plated {
  background: radial-gradient(
    circle at center,
    #2a2a2a 0%,
    #2a2a2a 30%,
    var(--gold-contact) 31%,
    var(--gold-contact-dark) 100%
  );
}

/* ==================== CIRCUIT PATH ==================== */
.circuit-path {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    transparent 0%,
    transparent 40%,
    var(--tech-blue) 50%,
    transparent 60%,
    transparent 100%
  );
  background-size: 200% 100%;
}

.circuit-path::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--copper);
  opacity: 0.3;
}

/* ==================== SOLDER JOINT ==================== */
.solder-joint {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    var(--solder-shine),
    var(--solder-silver) 40%,
    #A9A9A9
  );
  box-shadow: 
    0 2px 3px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.6);
}

.solder-joint.reflowed {
  background: radial-gradient(
    ellipse at 30% 30%,
    var(--solder-shine),
    var(--solder-silver) 30%,
    #B0B0B0 60%,
    #909090
  );
}

/* ==================== COMPONENT DECORATIONS ==================== */

/* Resistor */
.resistor {
  position: relative;
  width: 40px;
  height: 12px;
  background: linear-gradient(
    to bottom,
    #E0C8A0 0%,
    #D4B896 50%,
    #C4A882 100%
  );
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.resistor::before,
.resistor::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 2px;
  background: var(--solder-silver);
  top: 50%;
  transform: translateY(-50%);
}

.resistor::before {
  left: -4px;
}

.resistor::after {
  right: -4px;
}

/* Resistor color bands */
.resistor-bands {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8px;
}

.resistor-bands span {
  width: 2px;
  height: 100%;
  display: block;
}

/* Capacitor */
.capacitor {
  position: relative;
  width: 20px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

.capacitor::before,
.capacitor::after {
  content: '';
  width: 8px;
  height: 20px;
  background: linear-gradient(
    to right,
    #4A4A4A,
    #6A6A6A,
    #4A4A4A
  );
  border-radius: 1px;
}

.capacitor::after {
  background: linear-gradient(
    to left,
    #4A4A4A,
    #6A6A6A,
    #4A4A4A
  );
}

/* IC Chip */
.ic-chip {
  position: relative;
  width: 40px;
  height: 30px;
  background: linear-gradient(
    135deg,
    #2a2a2a 0%,
    #1a1a1a 100%
  );
  border-radius: 2px;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.ic-chip::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 2px;
  background: var(--silkscreen-white);
  border-radius: 1px;
}

.ic-pins {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.ic-pins::before,
.ic-pins::after {
  content: '';
  width: 2px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 10%,
    var(--solder-silver) 10%,
    var(--solder-silver) 30%,
    transparent 30%,
    transparent 40%,
    var(--solder-silver) 40%,
    var(--solder-silver) 60%,
    transparent 60%,
    transparent 70%,
    var(--solder-silver) 70%,
    var(--solder-silver) 90%,
    transparent 90%
  );
}

/* LED */
.led-symbol {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.9),
    var(--tech-blue) 30%,
    #1565C0
  );
  box-shadow: 
    0 0 8px var(--tech-glow),
    0 2px 4px rgba(0, 0, 0, 0.3);
}

.led-symbol.red {
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.9),
    #F44336 30%,
    #C62828
  );
  box-shadow: 
    0 0 8px rgba(244, 67, 54, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.3);
}

.led-symbol.green {
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.9),
    #4CAF50 30%,
    #2E7D32
  );
  box-shadow: 
    0 0 8px rgba(76, 175, 80, 0.6),
    0 2px 4px rgba(0, 0, 0, 0.3);
}

/* ==================== BACKGROUND PATTERNS ==================== */

/* PCB Substrate Background */
.pcb-background {
  position: relative;
  background-color: var(--pcb-green);
  background-image: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.05) 2px,
      rgba(0, 0, 0, 0.05) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.05) 2px,
      rgba(0, 0, 0, 0.05) 4px
    );
}

/* Copper Trace Pattern Background */
.copper-pattern {
  position: relative;
  background-color: var(--pcb-green-dark);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h30M30 0v30M30 30h30M30 30v30' stroke='%23B87333' stroke-width='2' fill='none' opacity='0.3'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%23B87333' opacity='0.4'/%3E%3C/svg%3E");
}

/* Circuit Grid Pattern */
.circuit-grid {
  position: relative;
  background-color: #0a0a0a;
  background-image: 
    linear-gradient(rgba(33, 150, 243, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(33, 150, 243, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Metallic Copper Shine */
.copper-shine {
  background: linear-gradient(
    135deg,
    var(--copper-dark) 0%,
    var(--copper-light) 25%,
    var(--copper-shine) 50%,
    var(--copper-light) 75%,
    var(--copper-dark) 100%
  );
  background-size: 200% 200%;
}

/* ==================== ANIMATION CLASSES ==================== */

/* Pulsing Glow Effect */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 
      0 0 5px var(--tech-glow),
      0 0 10px var(--tech-glow),
      0 2px 4px rgba(0, 0, 0, 0.3);
  }
  50% {
    box-shadow: 
      0 0 10px var(--tech-glow),
      0 0 20px var(--tech-glow),
      0 0 30px var(--tech-glow),
      0 2px 4px rgba(0, 0, 0, 0.3);
  }
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Data Flow Animation */
@keyframes data-flow {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.data-flow {
  animation: data-flow 3s linear infinite;
}

/* LED Blink */
@keyframes led-blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.led-blink {
  animation: led-blink 1s ease-in-out infinite;
}

/* Fast LED Blink */
.led-blink-fast {
  animation: led-blink 0.5s ease-in-out infinite;
}

/* Slow LED Pulse */
@keyframes led-pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

.led-pulse {
  animation: led-pulse 2s ease-in-out infinite;
}

/* Circuit Active State */
@keyframes circuit-active {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.circuit-active {
  animation: circuit-active 1.5s ease-in-out infinite;
}

/* Copper Shimmer */
@keyframes copper-shimmer {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 200%;
  }
}

.copper-shimmer {
  animation: copper-shimmer 4s ease-in-out infinite;
}

/* Electric Spark */
@keyframes electric-spark {
  0%, 100% {
    box-shadow: 
      0 0 5px var(--tech-cyan),
      0 0 10px var(--tech-cyan);
  }
  10% {
    box-shadow: 
      0 0 20px var(--tech-cyan),
      0 0 40px var(--tech-cyan),
      0 0 60px var(--tech-cyan);
  }
  20%, 80% {
    box-shadow: 
      0 0 5px var(--tech-cyan),
      0 0 10px var(--tech-cyan);
  }
  90% {
    box-shadow: 
      0 0 20px var(--tech-cyan),
      0 0 40px var(--tech-cyan),
      0 0 60px var(--tech-cyan);
  }
}

.electric-spark {
  animation: electric-spark 3s ease-in-out infinite;
}

/* Trace Current Flow */
@keyframes trace-current {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 0;
  }
}

.trace-current {
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 10px,
    var(--tech-blue) 10px,
    var(--tech-blue) 15px,
    transparent 15px,
    transparent 20px
  );
  background-size: 40px 100%;
  animation: trace-current 1s linear infinite;
}

/* ==================== UTILITY MODIFIERS ==================== */

/* Glow Variants */
.glow-blue {
  --tech-glow: rgba(33, 150, 243, 0.6);
}

.glow-purple {
  --tech-glow: rgba(156, 39, 176, 0.6);
}

.glow-cyan {
  --tech-glow: rgba(0, 188, 212, 0.6);
}

.glow-green {
  --tech-glow: rgba(76, 175, 80, 0.6);
}

.glow-red {
  --tech-glow: rgba(244, 67, 54, 0.6);
}

/* Opacity Modifiers */
.tech-subtle {
  opacity: 0.6;
}

.tech-prominent {
  opacity: 1;
  filter: brightness(1.2);
}

/* Performance Optimized - Use will-change for animated elements */
.pulse-glow,
.data-flow,
.led-blink,
.circuit-active,
.copper-shimmer,
.electric-spark {
  will-change: transform, opacity, box-shadow;
}

/* Reduce Motion Support */
@media (prefers-reduced-motion: reduce) {
  .pulse-glow,
  .data-flow,
  .led-blink,
  .led-blink-fast,
  .led-pulse,
  .circuit-active,
  .copper-shimmer,
  .electric-spark,
  .trace-current {
    animation: none;
  }
  
  .circuit-active,
  .tech-subtle {
    opacity: 0.8;
  }
}

/* ==================== USAGE EXAMPLES ==================== */

/*
Example 1: Animated Circuit Node
<div className="pcb-node large pulse-glow glow-blue"></div>

Example 2: Data Flow Trace
<div className="pcb-trace horizontal data-flow" style={{width: '200px'}}></div>

Example 3: Blinking LED Indicator
<div className="led-symbol green led-blink"></div>

Example 4: PCB Background Section
<section className="pcb-background" style={{padding: '2rem'}}>
  <h2>Circuit Design</h2>
</section>

Example 5: Resistor Component
<div className="resistor">
  <div className="resistor-bands">
    <span style={{background: '#8B4513'}}></span>
    <span style={{background: '#000000'}}></span>
    <span style={{background: '#FF0000'}}></span>
    <span style={{background: '#FFD700'}}></span>
  </div>
</div>

Example 6: IC Chip with Animation
<div className="ic-chip circuit-active">
  <div className="ic-pins"></div>
</div>

Example 7: Circuit Grid Background
<div className="circuit-grid" style={{minHeight: '400px'}}>
  <!-- Your content here -->
</div>
*/
`;

await writeFile('src/styles/tech-theme.css', cssContent);
console.log('CSS file created: src/styles/tech-theme.css');
