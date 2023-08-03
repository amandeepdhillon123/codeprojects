"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const  Teacher = () => {

    const router= useRouter();

    
  return (
    <div>
        <h1>Teacher login</h1>
        <button onClick={()=>router.push("/login")}>login</button>
        <button onClick={()=> router.push("/")}>Home</button>
    </div>
    
  )
}

export default Teacher