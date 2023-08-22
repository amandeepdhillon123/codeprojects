import React from "react";
import "./Home.css";
import Fade from 'react-reveal/Fade';
import { useTheme } from "../../context/ThemeContext";
import Resume from "../../assets/docs/resume.txt";
import Typewriter from "typewriter-effect";
import {BsFillMoonStarsFill,BsFillSunFill} from "react-icons/bs"
const Home = () => {

  const[theme,setTheme] = useTheme()

  const handleTheme=() =>{
    setTheme((prevState)=>(prevState === 'light' ? 'dark' :'light'))
  }
  return (
    <>
      <div className="container-fluid home-container" id='home'>
         <div className="theme-btn" onClick={()=>handleTheme()}>
          {
            theme === 'light' ? (<BsFillMoonStarsFill size={30}/>) : (<BsFillSunFill size={30}/>)
          }
         </div>
        <div className="container home-content">
          <Fade right>
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
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
            <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=7210024397" rel="norefferer" target="_blank">Hire Me</a>
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">
              My Resume
            </a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;