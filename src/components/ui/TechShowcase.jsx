import { TechBrackets, LEDIndicator, DataReadout } from '../ui';

/**
 * Example integration of Tech UI components in a portfolio section
 * Copy this pattern to use in your actual portfolio sections
 */
export default function TechShowcase() {
  return (
    <section className="py-20 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Hero Card with Tech Brackets */}
        <div className="relative bg-neutral-900/50 backdrop-blur rounded-lg p-8 md:p-12">
          <TechBrackets position="all" size="lg" color="blue" animated />
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Full Stack Developer
              </h2>
              <p className="text-neutral-400 text-lg">
                Building modern web experiences with cutting-edge technology
              </p>
            </div>
            
            <div className="flex gap-3">
              <LEDIndicator color="green" size="md" pulsing label="AVAILABLE" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DataReadout 
            label="Projects" 
            value={24} 
            color="blue" 
            animated 
            targetValue={24}
          />
          <DataReadout 
            label="Years Exp" 
            value={5} 
            color="purple" 
            animated 
            targetValue={5}
          />
          <DataReadout 
            label="Technologies" 
            value={32} 
            color="cyan" 
            animated 
            targetValue={32}
          />
          <DataReadout 
            label="Happy Clients" 
            value={18} 
            color="green" 
            animated 
            targetValue={18}
          />
        </div>

        {/* Featured Projects with Accent Corners */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-neutral-900/50 backdrop-blur rounded-lg p-6">
            <TechBrackets position="top-left" size="md" color="purple" />
            <TechBrackets position="bottom-right" size="md" color="purple" />
            
            <LEDIndicator color="green" size="sm" pulsing label="LIVE" className="mb-4" />
            
            <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Modern shopping experience with real-time inventory and AI recommendations
            </p>
            
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">React</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Node.js</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">MongoDB</span>
            </div>
          </div>

          <div className="relative bg-neutral-900/50 backdrop-blur rounded-lg p-6">
            <TechBrackets position="top-left" size="md" color="cyan" />
            <TechBrackets position="bottom-right" size="md" color="cyan" />
            
            <LEDIndicator color="blue" size="sm" label="IN DEV" className="mb-4" />
            
            <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Real-time data visualization for business intelligence and insights
            </p>
            
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">Next.js</span>
              <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">D3.js</span>
              <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* System Status Panel */}
        <div className="relative bg-neutral-900/50 backdrop-blur rounded-lg p-6">
          <TechBrackets position="all" size="md" color="green" />
          
          <h3 className="text-lg font-semibold mb-4">Skills & Technologies</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm text-neutral-400 mb-3">Frontend</h4>
              <div className="space-y-2">
                <LEDIndicator color="green" size="sm" pulsing label="React / Next.js" />
                <LEDIndicator color="green" size="sm" pulsing label="TypeScript" />
                <LEDIndicator color="green" size="sm" pulsing label="Tailwind CSS" />
              </div>
            </div>
            
            <div>
              <h4 className="text-sm text-neutral-400 mb-3">Backend</h4>
              <div className="space-y-2">
                <LEDIndicator color="green" size="sm" pulsing label="Node.js / Express" />
                <LEDIndicator color="green" size="sm" pulsing label="Python / FastAPI" />
                <LEDIndicator color="blue" size="sm" label="GraphQL" />
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="relative bg-neutral-900/50 backdrop-blur rounded-lg p-6">
          <TechBrackets position="top-left" size="sm" color="blue" />
          <TechBrackets position="top-right" size="sm" color="blue" />
          
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
            Performance Metrics
            <LEDIndicator color="green" size="sm" pulsing />
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <DataReadout 
              label="Lighthouse" 
              value={98} 
              unit="/100" 
              color="green" 
              animated 
            />
            <DataReadout 
              label="Load Time" 
              value={1.2} 
              unit="s" 
              color="blue" 
              animated 
            />
            <DataReadout 
              label="Uptime" 
              value={99.9} 
              unit="%" 
              color="purple" 
              animated 
            />
            <DataReadout 
              label="Response" 
              value={45} 
              unit="ms" 
              color="cyan" 
              animated 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/*
INTEGRATION TIPS:

1. Import where needed:
   import { TechBrackets, LEDIndicator, DataReadout } from './components/ui';

2. Use TechBrackets on any container with position: relative
3. Combine components for rich UI experiences
4. Adjust colors to match your brand (blue, purple, cyan, green)
5. Use animated props sparingly for best effect
6. LEDIndicators work great for status, badges, and highlights
7. DataReadout perfect for stats, metrics, and counters

COLOR SCHEME SUGGESTIONS:
- Blue: Primary actions, main stats
- Purple: Premium features, highlights
- Cyan: Secondary info, tech details
- Green: Success states, active status
- Red: Errors, warnings (LEDIndicator only)
- Amber: Cautions, pending states (LEDIndicator only)
*/
