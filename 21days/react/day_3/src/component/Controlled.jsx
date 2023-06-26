import React from 'react'
import { useState } from 'react'
function Controlled() {
    let[val,setVal]=useState("000")
  return (
    <div>

        <input type="text" value={val} onChange={(e)=> setVal(e.target.value)} />
       <h3>{val}</h3>
    </div>
  )
}

export default Controlled