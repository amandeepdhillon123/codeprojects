"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const  Student = () => {

    const router= useRouter();

    
  return (
    <div>
        <h1>Student</h1>
        <button onClick={()=>router.push("/about")}>about</button>
        <button onClick={()=> router.push("/")}>Home</button>
    </div>
    
  )
}

export default Student