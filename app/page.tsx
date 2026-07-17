"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import ProjectGrid from "./components/projectgrid";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
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
      </main>
      <Footer />
    </div>
  );
}
