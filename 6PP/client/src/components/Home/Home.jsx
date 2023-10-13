import React from 'react'
import "./Home.css"
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine"
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';
const Home = () => {
  return (
    <div className='home'>
        
        {/* timeline  */}

        <div className='homeContainer'>
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1,2,3,4]} />
        </div>

        {/* skilss */}
        <div className='homeSkills'>
        <Typography variant="h3">SKILLS</Typography>
          <div className='homeCubeSkills'>

            <div  className="homeCubeSkillsFaces homeCubeSkillsFace1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMBJxFo-Vb5TkE9fe3nhw_NnCEPcwBUex66nqqminBw&s" alt="Face1" />
            </div>

            <div  className="homeCubeSkillsFaces homeCubeSkillsFace2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMBJxFo-Vb5TkE9fe3nhw_NnCEPcwBUex66nqqminBw&s" alt="Face1" />
            </div>

            <div  className="homeCubeSkillsFaces homeCubeSkillsFace3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMBJxFo-Vb5TkE9fe3nhw_NnCEPcwBUex66nqqminBw&s" alt="Face1" />
            </div>
            <div  className="homeCubeSkillsFaces homeCubeSkillsFace4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMBJxFo-Vb5TkE9fe3nhw_NnCEPcwBUex66nqqminBw&s" alt="Face1" />
            </div>

            <div  className="homeCubeSkillsFaces homeCubeSkillsFace5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMBJxFo-Vb5TkE9fe3nhw_NnCEPcwBUex66nqqminBw&s" alt="Face1" />
            </div>
            <div  className="homeCubeSkillsFaces homeCubeSkillsFace6">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMBJxFo-Vb5TkE9fe3nhw_NnCEPcwBUex66nqqminBw&s" alt="Face1" />
            </div>
          </div>
          <div className="cubeShadow"></div>
          <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
        </div>

        {/* youtube */}

         <div className='homeYoutube'>
          <Typography variant ="h3">YOUTUBE VIDEOS</Typography>
           <div className="homeYoutubeWrapper">
             <YoutubeCard image="https://www.shutterstock.com/image-vector/video-icon-vector-camera-player-100nw-1034861974.jpg" title="sample video"/>
             <YoutubeCard image="https://www.shutterstock.com/image-vector/video-icon-vector-camera-player-100nw-1034861974.jpg" title="sample video"/>
             <YoutubeCard image="https://www.shutterstock.com/image-vector/video-icon-vector-camera-player-100nw-1034861974.jpg" title="sample video"/>
             <YoutubeCard image="https://www.shutterstock.com/image-vector/video-icon-vector-camera-player-100nw-1034861974.jpg" title="sample video"/>
             <YoutubeCard image="https://www.shutterstock.com/image-vector/video-icon-vector-camera-player-100nw-1034861974.jpg" title="sample video"/>
           </div>
         </div>
      
    </div>
  )
}

export default Home