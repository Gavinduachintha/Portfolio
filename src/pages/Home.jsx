import Hero from "../sections/hero/Hero.jsx";
import ProjectGrid from "../sections/projects/ProjectGrid.jsx";
import Aurora from "../components/common/Aurora.jsx";
import Header from "../layouts/Header.jsx";
import ProjectCard from "../components/common/ProjectCard.jsx";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

function Home() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const auroraProps = isMobile
    ? theme === "dark"
      ? {
          colorStops: ["#1e1b4b", "#064e3b"], // Darker colors for dark theme
          blend: 0.4,
          amplitude: 0.5,
          speed: 0.5,
        }
      : {
          colorStops: ["#3A29FF", "#10B981"],
          blend: 0.4,
          amplitude: 0.5,
          speed: 0.5,
        }
    : theme === "dark"
    ? {
        colorStops: ["#1e1b4b", "#064e3b", "#4c1d95", "#9a3412"], // Darker
        blend: 0.6,
        amplitude: 0.9,
        speed: 0.8,
      }
    : {
        colorStops: ["#3A29FF", "#10B981", "#8B5CF6", "#F97316"],
        blend: 0.6,
        amplitude: 0.9,
        speed: 0.8,
      };

  return (
    <main className="relative min-h-screen">
      {/* Aurora Background - Fixed behind everything */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Aurora {...auroraProps} />
      </div>
      {/* Main content with proper z-index */}
      <div className="relative z-10">
        <Header />
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          {/* <ProjectCard
            title="Example Project"
            description="A brief description of the project."
            image="/path/to/image.jpg"
            link="https://example.com"
          /> */}
          <ProjectGrid />
        </section>
        {/* Add other sections with IDs, e.g., <section id="about"><About /></section> */}
      </div>
    </main>
  );
}

export default Home;
