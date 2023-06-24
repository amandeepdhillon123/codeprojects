import React from 'react'
import { useState } from 'react'
function USTATE() {

    const[name,setName]=useState("amandeep")
    const[num,incNum]=useState(0)
 
   
  return (
    <div> 
        <h1>{name}</h1>
        <button onClick={()=>setName("amandeep Dhiilon")}>update</button>
        <h1>{num}</h1>
        <button onClick={()=>incNum( num + 1)}>inc</button>
        <button onClick={()=>incNum(num - 1)}>dec</button>
        <button onClick={()=>incNum(0)}>reset</button>
    </div>
  )
}

export default USTATE