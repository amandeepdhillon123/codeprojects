import React, { useState } from 'react'
import { useEffect } from 'react'
function Two() {
   const[num,setNum]=useState(0)
   const[nu,setNu]=useState(0)
    useEffect(()=>{
        console.log("run")
        return ()=>{
            console.log("gya")
        }
       
    })
  return (
    <div>
        <h1>hell {num}</h1>
        <button onClick={()=> setNum(num + 1)}>update</button>
        <h1>hell {nu}</h1>
        <button onClick={()=> setNu(nu + 1)}>update</button>
    </div>
  )
}

export default Two