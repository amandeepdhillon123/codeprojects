
"use client"
import React from 'react'
import About from './about/page'
import Login from './login/page'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { useRouter } from 'next/navigation'
const page = () => {

  const router = useRouter()

  const navigate =(name)=>{
     router.push(name)
  }
  return (
    <div>
      <h1>home</h1>
       {/* <About/>
       <Login/> */}

       {/* <Link href="/about"> <About/> </Link>
       <Link href="/login">  <Login/> </Link> */}
         <button onClick={()=>navigate("/dynamic")}>dynamic</button>
       <button onClick={()=>navigate("/login")}>login</button>
       <button onClick={()=>navigate("/about")}>about</button>
    </div>
  )
}

export default page


