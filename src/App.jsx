import React from "react";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <RootLayout>
        <Header />
        <Home />
        <Footer />
      </RootLayout>
    </ThemeProvider>
  );
};

export default App;
