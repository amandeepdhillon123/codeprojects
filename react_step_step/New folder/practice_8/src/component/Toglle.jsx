import React from 'react'
import { useState } from 'react'
const Toglle = () => {
    const[print,setPrint]=useState(false)
  return (
    <>
    {
        print?
        <h1>amandeep</h1>: null
    }
     <button onClick={()=> setPrint(false)}>hide</button>
     <button onClick={()=> setPrint(true)}>show</button>
     <button onClick={()=>setPrint(!print)}>Toggle</button>
     
     
    </>
  )
}

export default Toglle