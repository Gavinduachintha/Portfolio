import CircuitBoard from './components/CircuitBoard';

/**
 * Example Hero Section with Circuit Board Background
 * Copy this into your Hero section or use as reference
 */
function CircuitBoardDemo() {
  return (
    <div className="demo-container">
      {/* Example 1: Hero Section with Circuit Board */}
      <section 
        className="hero-example"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Circuit Board Background */}
        <CircuitBoard 
          intensity={0.5}
          speed="medium"
          primaryColor="#3B82F6"
          secondaryColor="#8B5CF6"
        />
        
        {/* Content Layer */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
          }}>
            Your Name
          </h1>
          <p style={{
            fontSize: 'clamp(1.25rem, 4vw, 2rem)',
            color: '#93C5FD',
            marginBottom: '2rem',
          }}>
            Backend Developer & Electronics Engineer
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '0.75rem 2rem',
              background: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}>
              View Projects
            </button>
            <button style={{
              padding: '0.75rem 2rem',
              background: 'transparent',
              color: '#93C5FD',
              border: '2px solid #3B82F6',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}>
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Optional: Center glow overlay for better text visibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)',
          pointerEvents: 'none',
        }} />
      </section>

      {/* Example 2: Different Speed */}
      <section 
        style={{
          position: 'relative',
          height: '50vh',
          background: '#1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircuitBoard 
          intensity={0.3}
          speed="fast"
          primaryColor="#10B981"
          secondaryColor="#6EE7B7"
        />
        <div style={{ position: 'relative', zIndex: 10, color: 'white' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Fast Green Circuit</h2>
          <p style={{ color: '#6EE7B7' }}>Matrix-style theme</p>
        </div>
      </section>

      {/* Example 3: Subtle Background for Content Section */}
      <section 
        style={{
          position: 'relative',
          padding: '4rem 2rem',
          background: '#0f172a',
        }}
      >
        <CircuitBoard 
          intensity={0.2}
          speed="slow"
          primaryColor="#3B82F6"
          secondaryColor="#8B5CF6"
        />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Section</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#CBD5E1' }}>
            This is an example of using the circuit board background with very low intensity (0.2) 
            for a content section. The subtle effect adds visual interest without distracting from the text.
          </p>
        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .demo-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }
        
        button:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default CircuitBoardDemo;
