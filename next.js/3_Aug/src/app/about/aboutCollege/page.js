"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const College = () => {

    const router= useRouter();

    
  return (
    <div>
        <h1>college</h1>
        <button onClick={()=>router.push("/about")}>about</button>
        <button onClick={()=> router.push("/")}>home</button>
    </div>
    
  )
}

export default College