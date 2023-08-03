"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Login = () => {
    const navigate= useRouter();
  return (
    <div>
        <h1>login</h1>
        <button onClick={()=>navigate.push("/")}>home</button>
        <button onClick={()=>navigate.push("/login/loginStudent")}>Student</button>
        <button onClick={()=>navigate.push("/login/loginTeacher")}>Teacher</button>
    </div>
  )
}

export default Login