"use client"
import React from 'react'

const List = ({params}) => {
    console.log(params)
    return (
    <div>
         <h1>student list</h1>
        <h2>Name:{params.dynamic}</h2>
    </div>
  )
}

export default List