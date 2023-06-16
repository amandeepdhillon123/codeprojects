import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'

function Six() {
      const [col,setCol]= useState("red")
    useEffect(()=>{
        console.log("useEffect")
    })

    useLayoutEffect(()=>{
   setCol("green")
        console.log("uselayout")
    })
  return (
    <div>
   <h1 style={{color: col}}>  amandeep Dhillon</h1>
    </div>
  )
}

export default Six