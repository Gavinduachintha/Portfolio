/**
 * Status LED component with pulsing animation and glow effect
 * @param {Object} props
 * @param {'green'|'blue'|'red'|'amber'|'purple'} props.color - LED color
 * @param {'xs'|'sm'|'md'|'lg'} props.size - Size of the LED
 * @param {boolean} props.pulsing - Enable pulsing animation
 * @param {string} props.label - Optional label text
 * @param {'left'|'right'} props.labelPosition - Position of the label
 * @param {string} props.className - Additional CSS classes
 */
export default function LEDIndicator({
  color = 'green',
  size = 'sm',
  pulsing = false,
  label = '',
  labelPosition = 'right',
  className = '',
}) {
  const sizeMap = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const colorMap = {
    green: {
      bg: 'bg-green-500',
      glow: 'shadow-[0_0_8px_rgba(34,197,94,0.8)]',
      pulse: 'shadow-[0_0_12px_rgba(34,197,94,1)]',
    },
    blue: {
      bg: 'bg-blue-500',
      glow: 'shadow-[0_0_8px_rgba(59,130,246,0.8)]',
      pulse: 'shadow-[0_0_12px_rgba(59,130,246,1)]',
    },
    red: {
      bg: 'bg-red-500',
      glow: 'shadow-[0_0_8px_rgba(239,68,68,0.8)]',
      pulse: 'shadow-[0_0_12px_rgba(239,68,68,1)]',
    },
    amber: {
      bg: 'bg-amber-500',
      glow: 'shadow-[0_0_8px_rgba(245,158,11,0.8)]',
      pulse: 'shadow-[0_0_12px_rgba(245,158,11,1)]',
    },
    purple: {
      bg: 'bg-purple-500',
      glow: 'shadow-[0_0_8px_rgba(168,85,247,0.8)]',
      pulse: 'shadow-[0_0_12px_rgba(168,85,247,1)]',
    },
  };

  const { bg, glow, pulse } = colorMap[color] || colorMap.green;
  const sizeClass = sizeMap[size] || sizeMap.sm;

  const ledClasses = [
    sizeClass,
    bg,
    glow,
    'rounded-full',
    'transition-shadow duration-300',
    pulsing && 'animate-pulse',
    pulsing && pulse,
  ]
    .filter(Boolean)
    .join(' ');

  if (label) {
    const flexDirection = labelPosition === 'left' ? 'flex-row-reverse' : 'flex-row';
    const spacing = labelPosition === 'left' ? 'space-x-reverse space-x-2' : 'space-x-2';

    return (
      <div className={`inline-flex items-center ${flexDirection} ${spacing} ${className}`}>
        <div className={ledClasses} aria-label={label || 'Status indicator'} />
        <span className="text-sm text-neutral-400 font-mono">{label}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-block ${ledClasses} ${className}`}
      aria-label="Status indicator"
    />
  );
}

// Usage examples:
// <LEDIndicator color="green" size="sm" pulsing label="ACTIVE" />
// <LEDIndicator color="blue" size="md" label="LOADING" labelPosition="left" />
// <LEDIndicator color="red" size="sm" pulsing label="ERROR" />
// <LEDIndicator color="amber" size="sm" label="WARNING" />
