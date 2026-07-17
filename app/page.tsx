"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import ProjectGrid from "./components/projectgrid";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#0a0a0a] font-sans">
      <Header />
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <AboutMe />
        </section>
        <section id="about">
          <ProjectGrid />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
