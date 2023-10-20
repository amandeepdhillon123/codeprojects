import React from 'react'
import { Typography } from "@mui/material";
import "./About.css"
const About = () => {
  return (
    <div className='about'>
          <div className="aboutContainer">
        <Typography>tis is the sample Quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
           <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697673600&semt=sph" alt="" className="aboutAvatar" />
           <Typography variant='h4'  style={{ margin: "1vmax 0", color: "black" }}>Amandeep</Typography>
           <Typography >full stack developer</Typography>
           <Typography style={{ margin: "1vmax 0", textAlign: "center" }} > jaat ram</Typography>
        </div>
        <div>
        <Typography 
          
          style={{
            wordSpacing: "5px",
            lineHeight: "50px",
            letterSpacing: "5px",
            textAlign: "right",
          }}
        >this is decription Lorem 
            ipsum dolor sit amet consectetur
             adipisicing elit. Nostrum aut v
             el quibusdam tempore, 
             exercitationem, corporis 
            </Typography>   
        </div>
      </div>
    </div>
  )
}

export default About