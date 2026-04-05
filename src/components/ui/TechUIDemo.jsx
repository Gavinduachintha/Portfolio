import TechBrackets from './TechBrackets';
import LEDIndicator from './LEDIndicator';
import DataReadout from './DataReadout';

/**
 * Demo component showcasing all Tech UI accent components
 * This file can be used as a reference for implementation
 */
export default function TechUIDemo() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 space-y-12">
      <h1 className="text-4xl font-bold mb-8">Tech UI Components Demo</h1>

      {/* TechBrackets Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">TechBrackets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* All corners */}
          <div className="relative p-8 bg-neutral-900 rounded">
            <TechBrackets position="all" size="md" color="blue" animated />
            <div className="text-center">
              <h3 className="text-lg font-semibold">All Corners</h3>
              <p className="text-sm text-neutral-400">Animated Blue Brackets</p>
            </div>
          </div>

          {/* Top corners only */}
          <div className="relative p-8 bg-neutral-900 rounded">
            <TechBrackets position="top-left" size="lg" color="purple" />
            <TechBrackets position="top-right" size="lg" color="purple" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Top Corners</h3>
              <p className="text-sm text-neutral-400">Large Purple Brackets</p>
            </div>
          </div>

          {/* Single corner accent */}
          <div className="relative p-8 bg-neutral-900 rounded">
            <TechBrackets position="top-left" size="sm" color="cyan" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Single Corner</h3>
              <p className="text-sm text-neutral-400">Small Cyan Bracket</p>
            </div>
          </div>

          {/* Card with content */}
          <div className="relative p-8 bg-neutral-900 rounded">
            <TechBrackets position="all" size="md" color="violet" animated />
            <div>
              <h3 className="text-lg font-semibold mb-2">Featured Project</h3>
              <p className="text-sm text-neutral-400">
                This card showcases how brackets can frame content beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEDIndicator Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">LED Indicators</h2>

        <div className="bg-neutral-900 p-6 rounded space-y-4">
          {/* Status indicators */}
          <div className="flex flex-wrap gap-6">
            <LEDIndicator color="green" size="sm" pulsing label="ACTIVE" />
            <LEDIndicator color="blue" size="sm" pulsing label="LOADING" />
            <LEDIndicator color="red" size="sm" pulsing label="ERROR" />
            <LEDIndicator color="amber" size="sm" pulsing label="WARNING" />
            <LEDIndicator color="purple" size="sm" label="IDLE" />
          </div>

          {/* Different sizes */}
          <div className="flex items-center gap-6 pt-4 border-t border-neutral-800">
            <LEDIndicator color="green" size="xs" label="XS" />
            <LEDIndicator color="green" size="sm" label="SM" />
            <LEDIndicator color="green" size="md" label="MD" />
            <LEDIndicator color="green" size="lg" label="LG" />
          </div>

          {/* Label positions */}
          <div className="flex gap-6 pt-4 border-t border-neutral-800">
            <LEDIndicator color="blue" size="md" label="Right Label" labelPosition="right" />
            <LEDIndicator color="blue" size="md" label="Left Label" labelPosition="left" />
          </div>

          {/* System status panel */}
          <div className="pt-4 border-t border-neutral-800">
            <h3 className="text-sm font-semibold mb-3">System Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <LEDIndicator color="green" size="sm" pulsing label="API" />
              <LEDIndicator color="green" size="sm" pulsing label="DATABASE" />
              <LEDIndicator color="blue" size="sm" label="CACHE" />
              <LEDIndicator color="green" size="sm" pulsing label="SERVER" />
            </div>
          </div>
        </div>
      </section>

      {/* DataReadout Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Data Readouts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DataReadout label="CPU Usage" value={68} unit="%" color="blue" animated targetValue={68} />
          <DataReadout label="Memory" value={2048} unit="MB" color="purple" animated targetValue={2048} />
          <DataReadout label="Active Users" value={127} color="green" animated targetValue={127} />
          <DataReadout label="Requests" value={1543} unit="/min" color="cyan" animated targetValue={1543} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DataReadout label="Uptime" value="24h 15m" color="green" />
          <DataReadout label="Latency" value={45} unit="ms" color="blue" />
          <DataReadout label="Temperature" value={72} unit="°C" color="amber" />
        </div>
      </section>

      {/* Combined Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Combined Example</h2>

        <div className="relative bg-neutral-900 rounded p-8">
          <TechBrackets position="all" size="lg" color="blue" animated />
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">System Dashboard</h3>
              <div className="flex gap-3">
                <LEDIndicator color="green" size="sm" pulsing label="ONLINE" />
                <LEDIndicator color="blue" size="sm" pulsing label="SYNCING" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <DataReadout 
                label="Total Projects" 
                value={42} 
                color="purple" 
                animated 
                targetValue={42} 
              />
              <DataReadout 
                label="Deployments" 
                value={156} 
                color="blue" 
                animated 
                targetValue={156} 
              />
              <DataReadout 
                label="Success Rate" 
                value={99.8} 
                unit="%" 
                color="green" 
                animated 
                targetValue={99.8} 
              />
              <DataReadout 
                label="Response" 
                value={32} 
                unit="ms" 
                color="cyan" 
                animated 
                targetValue={32} 
              />
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <div className="flex flex-wrap gap-4">
                <LEDIndicator color="green" size="sm" pulsing label="Frontend" />
                <LEDIndicator color="green" size="sm" pulsing label="Backend" />
                <LEDIndicator color="green" size="sm" pulsing label="Database" />
                <LEDIndicator color="blue" size="sm" label="CDN" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Notes */}
      <section className="space-y-4 bg-neutral-900 p-6 rounded">
        <h2 className="text-2xl font-semibold mb-4">Usage Notes</h2>
        
        <div className="space-y-3 text-sm text-neutral-400">
          <div>
            <h4 className="text-white font-semibold mb-1">TechBrackets</h4>
            <p>Add to any relatively positioned container. Use for cards, sections, or featured content.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-1">LEDIndicator</h4>
            <p>Perfect for status indicators, system health, or active states. Use pulsing for dynamic states.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-1">DataReadout</h4>
            <p>Great for metrics, statistics, or dashboard displays. Enable animated for engaging counter effects.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* 
QUICK USAGE EXAMPLES:

1. Simple Status Card:
<div className="relative p-6 bg-neutral-900">
  <TechBrackets position="all" size="md" color="blue" />
  <LEDIndicator color="green" pulsing label="ACTIVE" />
  <h3>System Online</h3>
</div>

2. Metrics Display:
<div className="flex gap-4">
  <DataReadout label="Users" value={1234} animated />
  <DataReadout label="CPU" value={45} unit="%" />
</div>

3. Status Panel:
<div className="space-y-2">
  <LEDIndicator color="green" pulsing label="API Server" />
  <LEDIndicator color="green" pulsing label="Database" />
  <LEDIndicator color="blue" label="Cache" />
</div>
*/
