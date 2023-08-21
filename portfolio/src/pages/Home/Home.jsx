import React from "react";
import "./Home.css";
import Resume from "../../assets/docs/resume.txt";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 👋I'm a  </h2>
          <h1>
            <Typewriter
              options={{
                strings: ["FullStack Developer !", "Mern Stack Developer !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
