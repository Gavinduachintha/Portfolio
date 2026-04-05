import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/tech-theme.css';

/**
 * PCBDecorations Component
 * 
 * Renders decorative PCB and electronics-themed elements
 * to add tech aesthetics to various sections of the portfolio.
 * 
 * @example
 * // Simple trace decoration
 * <PCBDecorations type="trace" />
 * 
 * @example
 * // Animated LED indicator
 * <PCBDecorations 
 *   type="led" 
 *   animated={true} 
 *   color="blue"
 *   position="top-right"
 * />
 * 
 * @example
 * // Circuit corner decoration
 * <PCBDecorations 
 *   type="corner-circuit" 
 *   position="bottom-left"
 *   animated={true}
 * />
 */
const PCBDecorations = ({ 
  type = 'trace', 
  position = 'static',
  animated = false,
  color = 'blue',
  size = 'medium',
  className = '',
  style = {}
}) => {
  
  const positionStyles = {
    'static': {},
    'top-left': { position: 'absolute', top: '1rem', left: '1rem' },
    'top-right': { position: 'absolute', top: '1rem', right: '1rem' },
    'bottom-left': { position: 'absolute', bottom: '1rem', left: '1rem' },
    'bottom-right': { position: 'absolute', bottom: '1rem', right: '1rem' },
    'center': { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  };

  const sizeMap = {
    small: '0.75',
    medium: '1',
    large: '1.5',
  };

  const glowClass = animated ? `glow-${color}` : '';
  const scale = sizeMap[size] || '1';
  const combinedStyle = {
    ...positionStyles[position],
    transform: position === 'center' 
      ? `translate(-50%, -50%) scale(${scale})`
      : `scale(${scale})`,
    transformOrigin: 'center',
    ...style,
  };

  // Render different decoration types
  const renderDecoration = () => {
    switch (type) {
      case 'trace':
        return (
          <div 
            className={`pcb-trace horizontal ${animated ? 'data-flow' : ''} ${className}`}
            style={{ width: '100px', ...combinedStyle }}
          />
        );

      case 'trace-vertical':
        return (
          <div 
            className={`pcb-trace vertical ${animated ? 'trace-current' : ''} ${className}`}
            style={{ height: '100px', ...combinedStyle }}
          />
        );

      case 'node':
        return (
          <div 
            className={`pcb-node ${animated ? 'pulse-glow' : ''} ${glowClass} ${className}`}
            style={combinedStyle}
          />
        );

      case 'via':
        return (
          <div 
            className={`pcb-via plated ${className}`}
            style={combinedStyle}
          />
        );

      case 'led':
        return (
          <div 
            className={`led-symbol ${color} ${animated ? 'led-pulse' : ''} ${className}`}
            style={combinedStyle}
          />
        );

      case 'resistor':
        return (
          <div className={className} style={combinedStyle}>
            <div className="resistor">
              <div className="resistor-bands">
                <span style={{ background: '#8B4513' }}></span>
                <span style={{ background: '#000000' }}></span>
                <span style={{ background: '#FF0000' }}></span>
                <span style={{ background: '#FFD700' }}></span>
              </div>
            </div>
          </div>
        );

      case 'capacitor':
        return (
          <div 
            className={`capacitor ${className}`}
            style={combinedStyle}
          />
        );

      case 'ic-chip':
        return (
          <div 
            className={`ic-chip ${animated ? 'circuit-active' : ''} ${className}`}
            style={combinedStyle}
          >
            <div className="ic-pins"></div>
          </div>
        );

      case 'solder-joint':
        return (
          <span 
            className={`solder-joint reflowed ${className}`}
            style={combinedStyle}
          />
        );

      case 'corner-circuit':
        return (
          <div 
            className={className}
            style={{ 
              ...combinedStyle,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            {/* Horizontal trace */}
            <div 
              className={`pcb-trace horizontal ${animated ? 'data-flow' : ''}`}
              style={{ width: '60px' }}
            />
            {/* Vertical trace with node */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div 
                className={`pcb-trace vertical`}
                style={{ height: '40px' }}
              />
              <div 
                className={`pcb-node small ${animated ? 'pulse-glow' : ''} ${glowClass}`}
              />
            </div>
          </div>
        );

      case 'circuit-path':
        return (
          <svg 
            width="120" 
            height="80" 
            className={className}
            style={combinedStyle}
          >
            <defs>
              {animated && (
                <linearGradient id={`flowing-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor={`var(--tech-${color})`}>
                    <animate 
                      attributeName="offset" 
                      values="0;1" 
                      dur="2s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                  <stop offset="100%" stopColor="transparent">
                    <animate 
                      attributeName="offset" 
                      values="0.5;1.5" 
                      dur="2s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                </linearGradient>
              )}
            </defs>
            
            {/* Base copper trace */}
            <path 
              d="M 10 40 L 50 40 L 70 20 L 110 20" 
              stroke="var(--copper)" 
              strokeWidth="3" 
              fill="none"
              opacity="0.6"
            />
            
            {/* Animated overlay */}
            {animated && (
              <path 
                d="M 10 40 L 50 40 L 70 20 L 110 20" 
                stroke={`url(#flowing-${color})`}
                strokeWidth="3" 
                fill="none"
              />
            )}
            
            {/* Nodes */}
            <circle cx="10" cy="40" r="4" fill="var(--copper-light)" />
            <circle cx="50" cy="40" r="3" fill="var(--copper)" />
            <circle cx="70" cy="20" r="3" fill="var(--copper)" />
            <circle 
              cx="110" 
              cy="20" 
              r="5" 
              fill={`var(--tech-${color})`}
              className={animated ? 'pulse-glow' : ''}
            />
          </svg>
        );

      case 'pcb-pattern':
        return (
          <div 
            className={`pcb-background ${className}`}
            style={{
              width: '200px',
              height: '150px',
              borderRadius: '8px',
              padding: '1rem',
              ...combinedStyle
            }}
          >
            {/* Decorative traces */}
            <div style={{ 
              display: 'grid', 
              gap: '12px',
              opacity: 0.4
            }}>
              <div className="pcb-trace horizontal" style={{ width: '60%' }} />
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div className="pcb-node small" />
                <div className="pcb-trace horizontal" style={{ width: '80%' }} />
              </div>
              <div className="pcb-trace horizontal" style={{ width: '70%' }} />
            </div>
          </div>
        );

      case 'tech-badge':
        return (
          <div 
            className={className}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: 'var(--pcb-green-dark)',
              borderRadius: '4px',
              border: '2px solid var(--copper)',
              ...combinedStyle
            }}
          >
            <div className={`led-symbol ${color} ${animated ? 'led-blink-fast' : ''}`} 
                 style={{ width: '10px', height: '10px' }} />
            <span style={{ 
              color: 'var(--silkscreen-white)', 
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              ACTIVE
            </span>
          </div>
        );

      case 'connection-line':
        return (
          <div 
            className={className}
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '0',
              ...combinedStyle 
            }}
          >
            <div className={`pcb-node small ${animated ? 'pulse-glow' : ''} ${glowClass}`} />
            <div 
              className={`pcb-trace horizontal ${animated ? 'data-flow' : ''}`}
              style={{ width: '80px' }}
            />
            <div className={`pcb-node small ${animated ? 'pulse-glow' : ''} ${glowClass}`} />
          </div>
        );

      default:
        return null;
    }
  };

  return renderDecoration();
};

PCBDecorations.propTypes = {
  /** Type of decoration to render */
  type: PropTypes.oneOf([
    'trace',
    'trace-vertical',
    'node',
    'via',
    'led',
    'resistor',
    'capacitor',
    'ic-chip',
    'solder-joint',
    'corner-circuit',
    'circuit-path',
    'pcb-pattern',
    'tech-badge',
    'connection-line'
  ]),
  
  /** Position of the decoration */
  position: PropTypes.oneOf([
    'static',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'center'
  ]),
  
  /** Enable animations */
  animated: PropTypes.bool,
  
  /** Color theme for glowing elements */
  color: PropTypes.oneOf([
    'blue',
    'purple',
    'cyan',
    'green',
    'red'
  ]),
  
  /** Size of the decoration */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  
  /** Additional CSS classes */
  className: PropTypes.string,
  
  /** Additional inline styles */
  style: PropTypes.object,
};

export default PCBDecorations;

/**
 * USAGE EXAMPLES:
 * 
 * 1. Hero Section Corner Decoration:
 * <div style={{ position: 'relative' }}>
 *   <PCBDecorations 
 *     type="corner-circuit" 
 *     position="top-right"
 *     animated={true}
 *     color="blue"
 *   />
 *   <h1>Welcome to My Portfolio</h1>
 * </div>
 * 
 * 2. Status Indicator:
 * <PCBDecorations 
 *   type="led" 
 *   color="green"
 *   animated={true}
 *   size="small"
 * />
 * 
 * 3. Section Divider:
 * <PCBDecorations 
 *   type="trace" 
 *   animated={true}
 *   style={{ width: '100%', margin: '2rem 0' }}
 * />
 * 
 * 4. Connection Between Elements:
 * <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
 *   <div>Component A</div>
 *   <PCBDecorations type="connection-line" animated={true} color="cyan" />
 *   <div>Component B</div>
 * </div>
 * 
 * 5. Tech Badge/Label:
 * <PCBDecorations 
 *   type="tech-badge" 
 *   animated={true}
 *   color="blue"
 * />
 * 
 * 6. Circuit Path Visual:
 * <PCBDecorations 
 *   type="circuit-path" 
 *   animated={true}
 *   color="purple"
 *   size="large"
 * />
 * 
 * 7. Background Pattern:
 * <PCBDecorations 
 *   type="pcb-pattern"
 *   position="bottom-right"
 *   style={{ opacity: 0.3 }}
 * />
 */
