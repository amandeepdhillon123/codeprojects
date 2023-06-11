import React from 'react'
import { useState } from 'react'
const Function = () => {
     const[data,setData] = useState("amandeep")
     const[num,incNum]= useState(0);
     const[dec,decNum]= useState(0);
    
    
  return (
    <>
    <h1>function</h1>

    <h2>{data}</h2>
    {/* <button onClick={show}>update</button> */}
    
    <button onClick={()=>setData("ram")}>update</button> <br /> <br />
    <h2>{num}</h2>
    <button onClick={()=>incNum(num + 1)}>inc</button>
    <button onClick={()=>incNum(num - 1)}>dec</button>
    
    </>
  )
}

export default Function