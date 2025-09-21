import Hero from "../sections/hero/Hero.jsx";
import ProjectGrid from "../sections/projects/ProjectGrid.jsx";
// import Aurora from "../components/common/Aurora.jsx";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Aurora Background - Fixed behind everything */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.6}
          amplitude={3.0}
          speed={0.8}
        />
      </div>
      
      {/* Main content with proper z-index */}
      <div className="relative z-10">
        <Hero />
        <ProjectGrid />
      </div>
    </main>
  );
}
