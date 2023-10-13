import { Button,Typography } from '@mui/material'
import React from 'react'
import "./Projects.css"
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";

const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
}) =>{
    return(
        <>
        <a href={url} className='projectCard'>
         
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
        </a>

        {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
         
        >
          <Delete />
        </Button>
      )}
        </>
    )
}

const Projects = () => {
    const projects =[1,2,3];
  return (
    <div className='projects'>
        <Typography variant="h3">Projects <AiOutlineProject/> </Typography>
        
        <div className="projectsWrapper">
            {
                projects.map((project,index)=>(
                    <ProjectCard 
                    url="https://www.youtube.com/"
                    projectImage="https://i.pinimg.com/originals/b9/ef/1b/b9ef1b5502fa92533037a3b67b4fc4e1.jpg"
                    projectTitle="smple prject"
                    description=" this is sample"
                    technologies="mongdb, react, nodejs, github"
                     />
                ))
            }
        </div>
    </div>
  )
}

export default Projects