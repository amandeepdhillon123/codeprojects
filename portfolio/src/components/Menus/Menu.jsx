import React from "react";
import Img from "../../assets/ama.jpg";
import "./Menu.css";
import {
  FcAbout,
  FcBiomass,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
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
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work experiance
              </div>
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-link">
                <FcVoicePresentation />
                Testimonials
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Experiance" />
              </div>
              <div className="nav-link">
                <FcBiotech title="TeachStack" />
              </div>
              <div className="nav-link">
                <FcReadingEbook title="Education" />
              </div>
              <div className="nav-link">
                <FcVideoProjector title="Projects" />
              </div>
              <div className="nav-link">
                <FcVoicePresentation title="Testimonials" />
              </div>
              <div className="nav-link">
                <FcBusinessContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menu;
