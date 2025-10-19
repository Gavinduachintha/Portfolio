import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </RootLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
