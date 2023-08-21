import { useState } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education/>
        <Techstack />
      <Projects/>
      </div>
   
    </>
  );
}

export default App;
