"use client"
import React, { useState } from 'react'

const App = () => {

  const [color,setCol] =useState({backgroundColor:"green"})
  return (
    <div>
      <h1 style={color}>hello</h1>
      <button onClick={()=>setCol({backgroundColor:"red"})}>change color</button>
    </div>
  )
}

export default App
