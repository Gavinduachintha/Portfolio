import React from "react";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import Hero from "./sections/hero/Hero.jsx";
import ProjectGrid from "./sections/projects/ProjectGrid.jsx";
import AboutMe from "./sections/about/AboutMe.jsx";
import ContactForm from "./sections/contact/ContactForm.jsx";
import Aurora from "./components/common/Aurora.jsx";
import { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext.jsx";

function AppContent() {
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
          colorStops: ["#1e1b4b", "#064e3b"],
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
        colorStops: ["#1e1b4b", "#064e3b", "#4c1d95", "#9a3412"],
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
    <RootLayout>
      {/* Aurora Background - Fixed behind everything */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <Aurora {...auroraProps} />
      </div>

      {/* Main content with proper z-index */}
      <div className="relative z-10">
        <Header />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="projects">
            <ProjectGrid />
          </section>

          <section id="about">
            <AboutMe />
          </section>

          <section id="contact">
            <ContactForm />
          </section>
        </main>

        <Footer />
      </div>
    </RootLayout>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
