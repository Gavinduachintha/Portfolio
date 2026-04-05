import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';

const filePath = 'src/components/effects/TechDivider.jsx';
const content = `import { useMemo } from 'react';

/**
 * Animated section divider with circuit board aesthetics
 * @param {Object} props
 * @param {'circuit'|'hex'|'minimal'} props.variant - Visual style variant
 * @param {boolean} props.animated - Enable data packet animations
 * @param {string[]} props.colors - Array of gradient colors [blue, purple, cyan]
 * @param {string} props.height - Height of the divider (e.g., '80px', '100px')
 * @param {string} props.className - Additional CSS classes
 */
export default function TechDivider({
  variant = 'circuit',
  animated = true,
  colors = ['#3B82F6', '#8B5CF6', '#06B6D4'],
  height = '80px',
  className = '',
}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shouldAnimate = animated && !prefersReducedMotion;

  const gradientId = useMemo(() => \`tech-gradient-\${Math.random().toString(36).substr(2, 9)}\`, []);
  const glowId = useMemo(() => \`tech-glow-\${Math.random().toString(36).substr(2, 9)}\`, []);

  const renderCircuitVariant = () => (
    <svg
      width="100%"
      height={height}
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      <defs>
        {/* Gradient Definition */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.6" />
          <stop offset="50%" stopColor={colors[1]} stopOpacity="0.8" />
          <stop offset="100%" stopColor={colors[2]} stopOpacity="0.6" />
        </linearGradient>

        {/* Glow Filter */}
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="1.5" />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* Background Circuit Traces */}
      <g opacity="0.3">
        {/* Horizontal traces */}
        <line x1="0" y1="25" x2="1200" y2="25" stroke={\`url(#\${gradientId})\`} strokeWidth="1" />
        <line x1="0" y1="40" x2="1200" y2="40" stroke={\`url(#\${gradientId})\`} strokeWidth="2" />
        <line x1="0" y1="55" x2="1200" y2="55" stroke={\`url(#\${gradientId})\`} strokeWidth="1" />
      </g>

      {/* Main Circuit Traces */}
      <g>
        {/* Top trace with nodes */}
        <path
          d="M 0,25 L 150,25 L 150,15 L 300,15 L 300,25 L 500,25 L 500,35 L 700,35 L 700,25 L 900,25 L 900,15 L 1050,15 L 1050,25 L 1200,25"
          stroke={\`url(#\${gradientId})\`}
          strokeWidth="2"
          fill="none"
          filter={\`url(#\${glowId})\`}
        />

        {/* Middle main trace */}
        <path
          d="M 0,40 L 200,40 L 200,50 L 400,50 L 400,40 L 600,40 L 600,30 L 800,30 L 800,40 L 1000,40 L 1000,50 L 1200,50"
          stroke={\`url(#\${gradientId})\`}
          strokeWidth="3"
          fill="none"
          filter={\`url(#\${glowId})\`}
        />

        {/* Bottom trace */}
        <path
          d="M 0,55 L 250,55 L 250,65 L 450,65 L 450,55 L 750,55 L 750,45 L 950,45 L 950,55 L 1200,55"
          stroke={\`url(#\${gradientId})\`}
          strokeWidth="2"
          fill="none"
          filter={\`url(#\${glowId})\`}
        />
      </g>

      {/* Connection Nodes */}
      <g fill={colors[1]} opacity="0.8">
        <circle cx="150" cy="25" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="300" cy="15" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="500" cy="25" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="700" cy="35" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="900" cy="25" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="200" cy="40" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="400" cy="50" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="600" cy="40" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="800" cy="30" r="3" filter={\`url(#\${glowId})\`} />
        <circle cx="1000" cy="40" r="3" filter={\`url(#\${glowId})\`} />
      </g>

      {/* Animated Data Packets */}
      {shouldAnimate && (
        <g className="data-packets">
          {/* Packet 1 - Top trace */}
          <circle r="4" fill={colors[0]} filter={\`url(#\${glowId})\`}>
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M 0,25 L 150,25 L 150,15 L 300,15 L 300,25 L 500,25 L 500,35 L 700,35 L 700,25 L 900,25 L 900,15 L 1050,15 L 1050,25 L 1200,25"
            />
          </circle>

          {/* Packet 2 - Middle trace */}
          <circle r="5" fill={colors[1]} filter={\`url(#\${glowId})\`}>
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M 0,40 L 200,40 L 200,50 L 400,50 L 400,40 L 600,40 L 600,30 L 800,30 L 800,40 L 1000,40 L 1000,50 L 1200,50"
            />
          </circle>

          {/* Packet 3 - Bottom trace */}
          <circle r="4" fill={colors[2]} filter={\`url(#\${glowId})\`}>
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M 0,55 L 250,55 L 250,65 L 450,65 L 450,55 L 750,55 L 750,45 L 950,45 L 950,55 L 1200,55"
            />
          </circle>

          {/* Packet 4 - Top trace (delayed) */}
          <circle r="3" fill={colors[2]} opacity="0.8" filter={\`url(#\${glowId})\`}>
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              begin="2s"
              path="M 0,25 L 150,25 L 150,15 L 300,15 L 300,25 L 500,25 L 500,35 L 700,35 L 700,25 L 900,25 L 900,15 L 1050,15 L 1050,25 L 1200,25"
            />
          </circle>

          {/* Packet 5 - Middle trace (delayed) */}
          <circle r="3" fill={colors[0]} opacity="0.8" filter={\`url(#\${glowId})\`}>
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              begin="2.5s"
              path="M 0,40 L 200,40 L 200,50 L 400,50 L 400,40 L 600,40 L 600,30 L 800,30 L 800,40 L 1000,40 L 1000,50 L 1200,50"
            />
          </circle>
        </g>
      )}
    </svg>
  );

  const renderHexVariant = () => (
    <svg
      width="100%"
      height={height}
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.6" />
          <stop offset="50%" stopColor={colors[1]} stopOpacity="0.8" />
          <stop offset="100%" stopColor={colors[2]} stopOpacity="0.6" />
        </linearGradient>

        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="1.5" />
          </feComponentTransfer>
        </filter>

        {/* Hexagon Pattern */}
        <pattern id={\`hex-pattern-\${gradientId}\`} x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon
            points="30,1 52,14 52,38 30,51 8,38 8,14"
            fill="none"
            stroke={colors[1]}
            strokeWidth="0.5"
            opacity="0.3"
          />
        </pattern>
      </defs>

      {/* Hexagonal Background */}
      <rect width="1200" height="80" fill={\`url(#hex-pattern-\${gradientId})\`} opacity="0.4" />

      {/* Main Divider Line */}
      <line
        x1="0"
        y1="40"
        x2="1200"
        y2="40"
        stroke={\`url(#\${gradientId})\`}
        strokeWidth="2"
        filter={\`url(#\${glowId})\`}
      />

      {/* Hexagonal Connection Points */}
      <g stroke={\`url(#\${gradientId})\`} strokeWidth="1.5" fill="none" filter={\`url(#\${glowId})\`}>
        {[100, 300, 500, 700, 900, 1100].map((x, i) => (
          <polygon
            key={i}
            points={\`\${x},40 \${x + 8},34 \${x + 8},28 \${x},22 \${x - 8},28 \${x - 8},34\`}
            className={shouldAnimate ? 'animate-pulse' : ''}
            style={{ animationDelay: \`\${i * 0.3}s\` }}
          />
        ))}
      </g>

      {/* Animated Data Packets */}
      {shouldAnimate && (
        <g>
          <circle r="4" fill={colors[0]} filter={\`url(#\${glowId})\`}>
            <animate attributeName="cx" from="0" to="1200" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="40;35;40;45;40" dur="5s" repeatCount="indefinite" />
          </circle>

          <circle r="3" fill={colors[2]} opacity="0.8" filter={\`url(#\${glowId})\`}>
            <animate attributeName="cx" from="0" to="1200" dur="6s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="cy" values="40;45;40;35;40" dur="6s" repeatCount="indefinite" begin="1s" />
          </circle>
        </g>
      )}
    </svg>
  );

  const renderMinimalVariant = () => (
    <svg
      width="100%"
      height={height}
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.3" />
          <stop offset="50%" stopColor={colors[1]} stopOpacity="0.9" />
          <stop offset="100%" stopColor={colors[2]} stopOpacity="0.3" />
        </linearGradient>

        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="2" />
          </feComponentTransfer>
        </filter>
      </defs>

      {/* Main gradient line */}
      <line
        x1="0"
        y1="40"
        x2="1200"
        y2="40"
        stroke={\`url(#\${gradientId})\`}
        strokeWidth="2"
        filter={\`url(#\${glowId})\`}
      />

      {/* Accent dots */}
      <g fill={\`url(#\${gradientId})\`} filter={\`url(#\${glowId})\`}>
        <circle cx="200" cy="40" r="2" className={shouldAnimate ? 'animate-pulse' : ''} />
        <circle cx="400" cy="40" r="3" className={shouldAnimate ? 'animate-pulse' : ''} style={{ animationDelay: '0.5s' }} />
        <circle cx="600" cy="40" r="2" className={shouldAnimate ? 'animate-pulse' : ''} style={{ animationDelay: '1s' }} />
        <circle cx="800" cy="40" r="3" className={shouldAnimate ? 'animate-pulse' : ''} style={{ animationDelay: '1.5s' }} />
        <circle cx="1000" cy="40" r="2" className={shouldAnimate ? 'animate-pulse' : ''} style={{ animationDelay: '2s' }} />
      </g>

      {/* Animated Data Packets */}
      {shouldAnimate && (
        <g>
          <circle r="5" fill={colors[1]} filter={\`url(#\${glowId})\`}>
            <animate attributeName="cx" from="-20" to="1220" dur="4s" repeatCount="indefinite" />
            <animate attributeName="cy" value="40" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
          </circle>

          <circle r="4" fill={colors[0]} filter={\`url(#\${glowId})\`}>
            <animate attributeName="cx" from="-20" to="1220" dur="5s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="cy" value="40" dur="5s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" begin="1.5s" />
          </circle>
        </g>
      )}
    </svg>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'hex':
        return renderHexVariant();
      case 'minimal':
        return renderMinimalVariant();
      case 'circuit':
      default:
        return renderCircuitVariant();
    }
  };

  return (
    <div className={\`w-full overflow-hidden \${className}\`} style={{ height }}>
      {renderVariant()}
    </div>
  );
}

// Usage examples:
// 
// <TechDivider variant="circuit" animated={true} height="100px" />
// 
// <TechDivider 
//   variant="hex" 
//   animated={true} 
//   colors={['#3B82F6', '#8B5CF6', '#06B6D4']}
//   height="80px"
// />
// 
// <TechDivider variant="minimal" animated={false} height="60px" />
`;

// Create directory and write file
await mkdir(dirname(filePath), { recursive: true });
await writeFile(filePath, content, 'utf8');
console.log('✅ Created:', filePath);
