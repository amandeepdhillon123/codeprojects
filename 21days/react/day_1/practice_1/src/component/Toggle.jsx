import React from 'react'
import { useState } from 'react'
function Toggle() {

    const[name,setName]= useState(false)
  return (
    <div>
      <h1>
        {
            name ? <h1>amandeep</h1> : null
        }
      </h1>
      <button onClick={()=>setName(true)}>Show</button>
      <button onClick={()=>setName(false)}>Hide</button>
      <button onClick={()=>setName(!name)}>Toggle</button>

    </div>
  )
}

export default Toggle