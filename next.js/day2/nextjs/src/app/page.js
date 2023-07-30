

"use client"

import { useState } from "react"

export default function Home() {
  
  // const [name,setName] = useState("amandeep")
  let name = "ram"
  function Apple(){
    // setName("geetu")
      name = "syma"
  }

  
  return (
    <main >
        <h1>hello ji</h1>
        <h2>hello {name}</h2>
        <button onClick={()=>Apple()}>click me</button>
    </main>
  )
}


