import { useMemo } from 'react';

/**
 * CircuitBoard - Animated SVG circuit board background component
 * 
 * @param {Object} props
 * @param {number} [props.intensity=0.4] - Overall opacity (0-1)
 * @param {'slow'|'medium'|'fast'} [props.speed='medium'] - Animation speed
 * @param {string} [props.primaryColor='#3B82F6'] - Primary circuit color (blue)
 * @param {string} [props.secondaryColor='#8B5CF6'] - Secondary circuit color (purple)
 * @param {string} [props.className=''] - Additional CSS classes
 */
const CircuitBoard = ({ 
  intensity = 0.4, 
  speed = 'medium',
  primaryColor = '#3B82F6',
  secondaryColor = '#8B5CF6',
  className = ''
}) => {
  const speedMap = {
    slow: '4s',
    medium: '3s',
    fast: '2s'
  };
  
  const animationDuration = speedMap[speed] || speedMap.medium;
  
  // Generate unique IDs for gradients to avoid conflicts
  const gradientId = useMemo(() => `circuit-gradient-${Math.random().toString(36).substr(2, 9)}`, []);
  const glowGradientId = useMemo(() => `glow-gradient-${Math.random().toString(36).substr(2, 9)}`, []);
  
  return (
    <div 
      className={`circuit-board-container ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        opacity: intensity,
        pointerEvents: 'none',
      }}
    >
      <svg
        className="circuit-board-svg"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <defs>
          {/* Primary gradient for circuit traces */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.6" />
            <stop offset="50%" stopColor={secondaryColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0.6" />
          </linearGradient>
          
          {/* Glow gradient for animated pulses */}
          <radialGradient id={glowGradientId}>
            <stop offset="0%" stopColor={primaryColor} stopOpacity="1" />
            <stop offset="50%" stopColor={secondaryColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
          </radialGradient>
          
          {/* Circuit pattern definition */}
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal traces */}
            <line x1="0" y1="50" x2="200" y2="50" stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.3" />
            <line x1="0" y1="150" x2="200" y2="150" stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.3" />
            
            {/* Vertical traces */}
            <line x1="50" y1="0" x2="50" y2="200" stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.3" />
            <line x1="150" y1="0" x2="150" y2="200" stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.3" />
            
            {/* Diagonal traces */}
            <line x1="0" y1="0" x2="100" y2="100" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.2" />
            <line x1="100" y1="100" x2="200" y2="200" stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.2" />
            
            {/* Connection nodes */}
            <circle cx="50" cy="50" r="3" fill={primaryColor} opacity="0.5" />
            <circle cx="150" cy="50" r="3" fill={secondaryColor} opacity="0.5" />
            <circle cx="50" cy="150" r="3" fill={secondaryColor} opacity="0.5" />
            <circle cx="150" cy="150" r="3" fill={primaryColor} opacity="0.5" />
            <circle cx="100" cy="100" r="4" fill={primaryColor} opacity="0.6" />
            
            {/* Small detail nodes */}
            <circle cx="25" cy="50" r="2" fill={primaryColor} opacity="0.4" />
            <circle cx="175" cy="50" r="2" fill={secondaryColor} opacity="0.4" />
            <circle cx="50" cy="25" r="2" fill={secondaryColor} opacity="0.4" />
            <circle cx="150" cy="175" r="2" fill={primaryColor} opacity="0.4" />
            
            {/* Micro circuits */}
            <rect x="45" y="45" width="10" height="10" fill="none" stroke={primaryColor} strokeWidth="0.5" opacity="0.3" />
            <rect x="145" y="145" width="10" height="10" fill="none" stroke={secondaryColor} strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        
        {/* Background circuit pattern */}
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        
        {/* Animated data flow paths */}
        {/* Path 1: Horizontal flow */}
        <g className="data-flow" style={{ '--animation-delay': '0s', '--animation-duration': animationDuration }}>
          <circle cx="0" cy="50" r="4" fill={`url(#${glowGradientId})`}>
            <animate
              attributeName="cx"
              from="0"
              to="100%"
              dur={animationDuration}
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        {/* Path 2: Vertical flow */}
        <g className="data-flow" style={{ '--animation-delay': '0.5s', '--animation-duration': animationDuration }}>
          <circle cx="150" cy="0" r="4" fill={`url(#${glowGradientId})`}>
            <animate
              attributeName="cy"
              from="0"
              to="100%"
              dur={animationDuration}
              repeatCount="indefinite"
              begin="0.5s"
            />
          </circle>
        </g>
        
        {/* Path 3: Diagonal flow */}
        <g className="data-flow" style={{ '--animation-delay': '1s', '--animation-duration': animationDuration }}>
          <circle r="4" fill={`url(#${glowGradientId})`}>
            <animate
              attributeName="cx"
              from="0"
              to="100%"
              dur={animationDuration}
              repeatCount="indefinite"
              begin="1s"
            />
            <animate
              attributeName="cy"
              from="0"
              to="100%"
              dur={animationDuration}
              repeatCount="indefinite"
              begin="1s"
            />
          </circle>
        </g>
        
        {/* Path 4: Reverse horizontal */}
        <g className="data-flow" style={{ '--animation-delay': '1.5s', '--animation-duration': animationDuration }}>
          <circle cy="150" r="3" fill={`url(#${glowGradientId})`} opacity="0.8">
            <animate
              attributeName="cx"
              from="100%"
              to="0"
              dur={animationDuration}
              repeatCount="indefinite"
              begin="1.5s"
            />
          </circle>
        </g>
        
        {/* Path 5: Reverse vertical */}
        <g className="data-flow" style={{ '--animation-delay': '2s', '--animation-duration': animationDuration }}>
          <circle cx="50" r="3" fill={`url(#${glowGradientId})`} opacity="0.8">
            <animate
              attributeName="cy"
              from="100%"
              to="0"
              dur={animationDuration}
              repeatCount="indefinite"
              begin="2s"
            />
          </circle>
        </g>
      </svg>
      
      <style>{`
        .circuit-board-container {
          will-change: opacity;
        }
        
        .circuit-board-svg {
          will-change: transform;
        }
        
        .data-flow {
          will-change: opacity;
          animation: pulse var(--animation-duration) ease-in-out infinite;
          animation-delay: var(--animation-delay);
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        
        /* Mobile responsiveness - reduce complexity on small screens */
        @media (max-width: 768px) {
          .circuit-board-svg {
            opacity: 0.7;
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .data-flow {
            animation: none;
          }
          
          .data-flow circle {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CircuitBoard;
