"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import ProjectGrid from "./components/projectgrid";
import Articles from "./components/articles";
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
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <ProjectGrid />
        </section>
        <section id="articles">
          <Articles />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
