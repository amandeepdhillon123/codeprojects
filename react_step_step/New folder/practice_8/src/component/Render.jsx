import React from 'react'
import { useState } from 'react'
function Render() {

    const[logg,setLog]=useState(3)
  return (
    <div>

        {
            logg== 1?    <h1>Render</h1>:
            logg== 2?    <h1>jaiRender</h1>:
            <h1>3rd Render</h1>
        }
   


    </div>
  )
}

export default Render