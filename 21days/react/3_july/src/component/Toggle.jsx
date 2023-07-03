import React, { useState } from 'react'

function Toggle() {
    const[name,setname] = useState(false)
  return (
    <div>

        {
            name ? <h1>amandeep</h1> : null
        }
        <button onClick={()=>setname(true)}>Show</button>
        <button onClick={()=>setname(false)}>hide</button>
        <button onClick={()=>setname(!name)}>Toggle</button>
    </div>
  )
}

export default Toggle