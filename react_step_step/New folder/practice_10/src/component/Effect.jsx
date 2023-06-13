import React from 'react'
import { useEffect, useState } from 'react'
function Effect() {
  const[count,setCount] = useState(0)
    useEffect(()=>{
    console.log("useEffect")
    })
  return (
    <>
     <h1>UseEffect in React {count}</h1>
     <button onClick={()=> setCount(count + 1)}>Update Counter</button>
    
    </>
  )
}

export default Effect