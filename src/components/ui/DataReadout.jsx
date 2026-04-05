import { useEffect, useState } from 'react';

/**
 * Decorative system metrics display with terminal/tech aesthetic
 * @param {Object} props
 * @param {string} props.label - Label text
 * @param {string|number} props.value - Display value
 * @param {string} props.unit - Unit of measurement
 * @param {boolean} props.animated - Enable counter animation
 * @param {number} props.targetValue - Target value for animation (if animated)
 * @param {string} props.color - Color theme (blue, purple, cyan, green)
 * @param {string} props.className - Additional CSS classes
 */
export default function DataReadout({
  label,
  value,
  unit = '',
  animated = false,
  targetValue = null,
  color = 'blue',
  className = '',
}) {
  const [displayValue, setDisplayValue] = useState(animated ? 0 : value);

  const colorMap = {
    blue: {
      label: 'text-blue-400',
      value: 'text-blue-300',
      border: 'border-blue-500/30',
      glow: 'shadow-[0_0_10px_rgba(59,130,246,0.15)]',
    },
    purple: {
      label: 'text-purple-400',
      value: 'text-purple-300',
      border: 'border-purple-500/30',
      glow: 'shadow-[0_0_10px_rgba(168,85,247,0.15)]',
    },
    cyan: {
      label: 'text-cyan-400',
      value: 'text-cyan-300',
      border: 'border-cyan-500/30',
      glow: 'shadow-[0_0_10px_rgba(6,182,212,0.15)]',
    },
    green: {
      label: 'text-green-400',
      value: 'text-green-300',
      border: 'border-green-500/30',
      glow: 'shadow-[0_0_10px_rgba(34,197,94,0.15)]',
    },
  };

  const theme = colorMap[color] || colorMap.blue;

  useEffect(() => {
    if (!animated) {
      setDisplayValue(value);
      return;
    }

    const target = targetValue ?? value;
    const numericTarget = typeof target === 'number' ? target : parseFloat(target);
    
    if (isNaN(numericTarget)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const startValue = typeof displayValue === 'number' ? displayValue : 0;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (numericTarget - startValue) * easeOut;

      setDisplayValue(Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [value, targetValue, animated]);

  const formattedValue =
    typeof displayValue === 'number' ? displayValue.toLocaleString() : displayValue;

  return (
    <div
      className={`inline-flex flex-col space-y-1 p-3 rounded border ${theme.border} bg-neutral-900/50 ${theme.glow} ${className}`}
    >
      <div className={`text-xs uppercase tracking-wider font-mono ${theme.label}`}>
        {label}
      </div>
      <div className="flex items-baseline space-x-1">
        <span className={`text-2xl font-bold font-mono tabular-nums ${theme.value}`}>
          {formattedValue}
        </span>
        {unit && (
          <span className={`text-sm font-mono ${theme.label}`}>{unit}</span>
        )}
      </div>
    </div>
  );
}

// Usage examples:
// <DataReadout label="CPU" value="68" unit="%" color="blue" />
// <DataReadout label="Memory" value={2048} unit="MB" animated targetValue={2048} color="purple" />
// <DataReadout label="Uptime" value="24h 15m" color="green" />
// <DataReadout label="Active" value={42} unit="users" animated color="cyan" />
