import React from 'react'
import { useState } from 'react'
function Control() {
    let [val,setVal]=useState("00")
  return (
    <div>
    <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />

   <h1>value : {val}</h1>
    </div>
  )
}

export default Control 