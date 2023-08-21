import React from "react";
import Img from "../../assets/ama.jpg";
import "./Menu.css";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiomass,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  // FcVoicePresentation,
} from "react-icons/fc";
function Menu({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={Img} alt="pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                {/* scroo */}
                <Link to="home"  smooth={true} spy={true} offset={-100} duration={100}>
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about"  smooth={true} spy={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link to="education" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link to="tech" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link to="project" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link to="work" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcPortraitMode />
                  Work experiance
                </Link>
              </div>

              {/* <div className="nav-link">
                <FcVoicePresentation />
                Testimonials
              </div> */}
              <div className="nav-link">
                <Link to="contact" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
         <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                {/* scroo */}
                <Link to="home"  smooth={true} spy={true} offset={-100} duration={100}>
                  <FcHome title="Home" />
                  
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about"  smooth={true} spy={true} offset={-100} duration={100}>
                  <FcAbout title=" About" />
                 
                </Link>
              </div>
              <div className="nav-link">
                <Link to="education" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcReadingEbook  title="Education" />
                  
                </Link>
              </div>
              <div className="nav-link">
                <Link to="tech" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcBiotech  title="Tech Stack"/>
                  
                </Link>
              </div>
              <div className="nav-link">
                <Link to="project" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcVideoProjector title="Projects" />
                  
                </Link>
              </div>
              <div className="nav-link">
                <Link to="work" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcPortraitMode title=" Work experiance"/>
                 
                </Link>
              </div>

              {/* <div className="nav-link">
                <FcVoicePresentation />
                Testimonials
              </div> */}
              <div className="nav-link">
                <Link to="contact" smooth={true} spy={true} offset={-100} duration={100}>
                  <FcBusinessContact title="   Contact" />
                
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menu;
