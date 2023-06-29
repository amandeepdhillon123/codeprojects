import React from 'react'
  import { useState } from 'react';
function Toggle() {

    const[show,setShow] = useState(true)
  return (
    <div>
        <h1>
            {
                show ? <h1>hello ji</h1> : null
            }
        </h1>
  <button onClick={()=>setShow(true)}>show</button>
 
  <button onClick={()=>setShow(false)}>hide</button>
  <button onClick={()=>setShow(!show)}>toggle</button>
    </div>
  )
}

export default Toggle;