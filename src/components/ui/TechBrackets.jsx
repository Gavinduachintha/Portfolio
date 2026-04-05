import { useMemo } from 'react';

/**
 * Corner bracket decorations with cyberpunk/tech UI style
 * @param {Object} props
 * @param {'all'|'top-left'|'top-right'|'bottom-left'|'bottom-right'} props.position - Which corners to show
 * @param {'sm'|'md'|'lg'} props.size - Size of the brackets
 * @param {string} props.color - Color theme (blue, purple, cyan)
 * @param {boolean} props.animated - Enable animation
 * @param {string} props.className - Additional CSS classes
 */
export default function TechBrackets({
  position = 'all',
  size = 'md',
  color = 'blue',
  animated = false,
  className = '',
}) {
  const sizeMap = {
    sm: { width: 16, thickness: 1.5, length: 8 },
    md: { width: 24, thickness: 2, length: 12 },
    lg: { width: 32, thickness: 2.5, length: 16 },
  };

  const colorMap = {
    blue: '#3b82f6',
    purple: '#a855f7',
    cyan: '#06b6d4',
    violet: '#8b5cf6',
  };

  const { width, thickness, length } = sizeMap[size];
  const strokeColor = colorMap[color] || colorMap.blue;

  const corners = useMemo(() => {
    const cornerPositions = {
      'top-left': ['top-left'],
      'top-right': ['top-right'],
      'bottom-left': ['bottom-left'],
      'bottom-right': ['bottom-right'],
      all: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    };

    return cornerPositions[position] || cornerPositions.all;
  }, [position]);

  const getCornerPath = (corner) => {
    switch (corner) {
      case 'top-left':
        return `M ${length} 0 L 0 0 L 0 ${length}`;
      case 'top-right':
        return `M ${width - length} 0 L ${width} 0 L ${width} ${length}`;
      case 'bottom-left':
        return `M 0 ${width - length} L 0 ${width} L ${length} ${width}`;
      case 'bottom-right':
        return `M ${width} ${width - length} L ${width} ${width} L ${width - length} ${width}`;
      default:
        return '';
    }
  };

  const getCornerPosition = (corner) => {
    switch (corner) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      default:
        return '';
    }
  };

  return (
    <>
      {corners.map((corner) => (
        <div
          key={corner}
          className={`absolute ${getCornerPosition(corner)} pointer-events-none ${className}`}
        >
          <svg
            width={width}
            height={width}
            viewBox={`0 0 ${width} ${width}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={animated ? 'animate-pulse' : ''}
          >
            <path
              d={getCornerPath(corner)}
              stroke={strokeColor}
              strokeWidth={thickness}
              strokeLinecap="square"
              style={{
                filter: `drop-shadow(0 0 ${thickness * 2}px ${strokeColor})`,
              }}
            />
          </svg>
        </div>
      ))}
    </>
  );
}

// Usage examples:
// <div className="relative p-8">
//   <TechBrackets position="all" size="md" color="blue" animated />
//   <div>Your content here</div>
// </div>
//
// <div className="relative p-4">
//   <TechBrackets position="top-left" size="sm" color="purple" />
//   <h2>Section Title</h2>
// </div>
