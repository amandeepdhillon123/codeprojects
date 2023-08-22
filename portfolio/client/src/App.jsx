import { useState } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from 'react-reveal/Tada'
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav/>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />

          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <Tada>
        <div className="footer pb-3 ms-3">
          <h6 className="text-center">
            Made by😍 amandeep &copy; 2023
          </h6>
        </div>
        </Tada>
        
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;