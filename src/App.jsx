import React from "react";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Footer from "./layouts/Footer.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <RootLayout>
        <Home />
        <Footer />
      </RootLayout>
    </ThemeProvider>
  );
};

export default App;
