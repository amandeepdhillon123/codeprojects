"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Login = () => {
    const navigate= useRouter();
  return (
    <div>
        <h1>login</h1>
        <button onClick={()=>navigate.push("/")}>home</button>
    </div>
  )
}

export default Login