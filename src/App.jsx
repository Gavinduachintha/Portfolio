import React from "react";
import "./index.css";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import Hero from "./sections/hero/Hero.jsx";
import ProjectGrid from "./sections/projects/ProjectGrid.jsx";
import AboutMe from "./sections/about/AboutMe.jsx";
import ContactForm from "./sections/contact/ContactForm.jsx";
import Aurora from "./components/common/Aurora.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
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
      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",
            background: theme === "dark" ? "#262626" : "#fff",
            color: theme === "dark" ? "#fff" : "#333",
            padding: "16px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          },
          success: {
            iconTheme: {
              primary: "#3ECF8E",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

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

      {/* Scroll to Top Button */}
      <ScrollToTop />
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
