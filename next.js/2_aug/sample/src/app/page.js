

 "use client"

import { useState } from "react"

export default function Home() {

  const[num,setnum]= useState(0)
  return (
    <>
         <h1>{num}</h1>
         <button onClick={()=>setnum(num + 1)}>click me</button>
    </>
  )
}


