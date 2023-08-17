"use client"
import React from 'react'

const Student = ({params}) => {
    console.log(params)
  return (
    <div>{params.student}</div>
  )
}

export default Student