import React from "react";
import IMG from "../../assets/images/aman.jpg";
import "./Menus.css";
import { FcHome,FcAbout, FcPortraitMode,FcBiotech,FcReadingEbook, FcVideoProjector, FcBusinessContact,} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={IMG} alt="profile_pic" />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link"><FcHome/> Home</div>
              <div className="nav-link"><FcAbout/> About</div>
              <div className="nav-link"><FcPortraitMode/> work experiance</div>
              <div className="nav-link"><FcBiotech/> Tech Stack</div>
              <div className="nav-link"><FcReadingEbook/>Education</div>
              <div className="nav-link"><FcVideoProjector/>Projects</div>

              <div className="nav-link"><FcBusinessContact/>contact</div>

            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link"><FcHome title="Home"/></div>
          <div className="nav-link"><FcAbout title ="About"/></div>
          <div className="nav-link"><FcPortraitMode title="experiance"/></div>
          <div className="nav-link"><FcBiotech title="T echStack"/></div>
          <div className="nav-link"><FcReadingEbook title="Education"/></div>
          <div className="nav-link"><FcVideoProjector title="Projects"/></div>

          <div className="nav-link"><FcBusinessContact title="contact"/></div>

        </div>
      </div>
      )}
    </>
  );
};

export default Menus;
