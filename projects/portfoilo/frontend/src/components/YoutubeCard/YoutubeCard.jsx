import React from 'react'
import "./YoutubeCard.css"
import { Typography } from '@mui/material'
const YoutubeCard = ({

    url ="https://www.youtube.com/watch?v=h1igcrpG-Ek&t=2642s",
    title = "Title here",
    image,
}) => {
  return (
    <div className='youtubeCard'>
        <a href={url} target='blank'>
            <img src={image} alt ="video"/>
            <Typography>{title}</Typography>
        </a>
    </div>
  )
}

export default YoutubeCard