import React from 'react'
import { useEffect,useState } from 'react'
const Effect = () => {
  const[data,setName] =useState(0)
    useEffect(()=>{
         console.log("componet4")
    },[data])
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=> setName(data + 1)}>chnge</button>
    </div>
  )
}

export default Effect