import React from 'react'
import './Menus.css'
import{FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation} from 'react-icons/fc'

const Menus = ({toggle}) => {
  return (
    <>
    {
      toggle ?
      (<>
        <div className="navbar-profile-pic">
        <img src="https://w0.peakpx.com/wallpaper/639/974/HD-wallpaper-bhagat-singh-bhagatsingh-dom-domfighter-domwarrior-warrior.jpg" alt="" />
     </div>
       <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <FcHome/>
              Home
          </div>
          <div className="nav-link">
            <FcAbout/>
              About
          </div>
          <div className="nav-link">
            <FcPortraitMode/>
              work Experiance
          </div>
          <div className="nav-link">
            <FcBiotech/>
             Tech Stack
          </div>
          <div className="nav-link">
            <FcReadingEbook/>
           Education
          </div>
          <div className="nav-link">
            <FcVideoProjector/>
              Projects
          </div>
          <div className="nav-link">
            <FcVoicePresentation/>
             Testmonials
          </div>
          <div className="nav-link">
            <FcBusinessContact/>
              Contact
          </div>

        </div>
        
       </div>
     </>
      ) :(
        <>
        <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <FcHome title="Home"/>
            
          </div>
          <div className="nav-link">
            <FcAbout title="About"/>
             
          </div>
          <div className="nav-link">
            <FcPortraitMode title="Experiance"/>
             
          </div>
          <div className="nav-link">
            <FcBiotech title="Tech Tool"/>
            
          </div>
          <div className="nav-link">
            <FcReadingEbook title="Education"/>
           
          </div>
          <div className="nav-link">
            <FcVideoProjector title="Projects"/>
             
          </div>
          <div className="nav-link">
            <FcVoicePresentation title="Testimonials"/>
            
          </div>
          <div className="nav-link">
            <FcBusinessContact title="Contact me"/>
            
          </div>

        </div>
        
       </div>
        </>
      )
      
    }
     
    </>
  )
}

export default Menus