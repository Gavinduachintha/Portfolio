import Hero from "../sections/hero/Hero.jsx";
import ProjectGrid from "../sections/projects/ProjectGrid.jsx";
import Aurora from "../components/common/Aurora.jsx";
import Header from "../layouts/Header.jsx";
export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Aurora Background - Fixed behind everything */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Aurora
          colorStops={["#3A29FF", "#10B981", "#8B5CF6","#F97316"]}
          blend={0.6}
          amplitude={0.9}
          speed={0.8}
        />
      </div>
      {/* Main content with proper z-index */}
      <div className="relative z-10">
        <Header />
        <section id="hero"><Hero /></section>
        <section id="projects"><ProjectGrid /></section>
        {/* Add other sections with IDs, e.g., <section id="about"><About /></section> */}
      </div>
    </main>
  );
}
