import React from "react";
import "./index.css";
import { Toaster } from "react-hot-toast";
import IconCloud from "./sections/about/IconCloud.jsx";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
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
import { Icon } from "lucide-react";

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
    ? {
        colorStops: ["#3A29FF", "#10B981"],
        blend: 0.4,
        amplitude: 0.5,
        speed: 0.5,
      }
    : {
        colorStops: ["#3A29FF", "#10B981", "#8B5CF6", "#F97316"],
        blend: 0.6,
        amplitude: 0.9,
        speed: 0.8,
      };

  const toastOptions =
    theme === "dark"
      ? {
          duration: 4000,
          style: {
            borderRadius: "12px",
            background: "#1f2937",
            color: "#f9fafb",
            padding: "16px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#1f2937",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#1f2937",
            },
          },
        }
      : {
          duration: 4000,
          style: {
            borderRadius: "12px",
            background: "#fff",
            color: "#333",
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
        };

  return (
    <RootLayout>
      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        theme={theme}
        toastOptions={toastOptions}
      />

      {/* Aurora Background - Fixed behind everything */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0a0a]">
        {/* <Aurora {...auroraProps} /> */}
      </div>

      {/* Main content with proper z-index */}
      <div className="relative z-10">
        <Header />

        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <AboutMe />
          </section>

          <section id="projects">
            <ProjectGrid />
          </section>

          <section id="contact"></section>
        </main>
        <section id="contact-from">
          <ContactForm />
        </section>
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
