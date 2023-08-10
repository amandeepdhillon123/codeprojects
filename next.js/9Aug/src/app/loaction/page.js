"use client"
import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
       <Script src='/location.js'
         onLoad={()=>{
            console.log("file upladed")
         }}
       
       />
    <h1>jrlll</h1>
    </div>
  )
}

export default page