import React from 'react'
import { Typography } from "@mui/material";
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='aboutContainer'>
            <Typography> This is a sample quote</Typography>
        </div>
        <div className='aboutContainer2'>
            <div>
                <img src="https://i.pinimg.com/originals/b9/ef/1b/b9ef1b5502fa92533037a3b67b4fc4e1.jpg" alt="" className='aboutAvatar' />
                <Typography variant="h4"
                 style={{ margin: "1vmax 0", color: "black" }}>amandeep</Typography>
            
              <Typography>full Stack developer</Typography>
              <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>full Stack dtracher</Typography>
            </div>

            {/* deccrfeip */}
       <div>
        <Typography  style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}>  
            Lorem ipsum, dolor sit amet consectetur t beatae?

        </Typography>
       </div>

        </div>
    </div>
  )
}

export default About