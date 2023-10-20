import React from 'react'
import './Projects.css'
import { AiOutlineProject } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import { Button ,Typography } from '@mui/material'
import { Delete } from "@mui/icons-material";

const ProjectCard =({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id,

})=>{

    return (
        <>
        <a href={url} className='projectCard'>

            <div>
                <Typography variant='h6' className='projectTitle'>{projectTitle}</Typography>
            </div>
            <div>
            <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
            </div>
            
        </a>

        {
            isAdmin && (
                <Button style={{ color: "rgba(40,40,40,0.7)" }}> <Delete /> </Button>
            )
        }
        </>
    )
}

const Projects = () => {

    const projects =[1,2,3]
  return (
    <div className='projects'>
          <Typography variant='h3'>Projects<AiOutlineProject/> </Typography>

          <div className='projectsWrapper'>
            {
                projects.map((project,index)=> (
                    <ProjectCard 
                    url ="https://www.youtube.com/watch?v=h1igcrpG-Ek&t=2644s"
                    projectImage ="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                    projectTitle ="Sample Project"
                    description ="This is a sample project"
                    technologies ="MONGODV EXpress rect nodejs"
                />
                ))
            }
          </div>

          <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  )
}

export default Projects