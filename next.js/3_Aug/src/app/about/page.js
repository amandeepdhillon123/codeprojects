
"use client"
import React from 'react'

// import Link from 'next/link'
import { useRouter } from 'next/navigation'
const About= () => {

    const navigate =useRouter();
  return (
    <div>
        <h1>about</h1>
        <button onClick={()=>navigate.push("/")}>home</button>
        <button onClick={()=>navigate.push("/about/aboutStudent")}>aboutStudent</button>
        <button onClick={()=>navigate.push("/about/aboutStudent")}>aboutcollege</button>
    </div>
  )
}

export default About