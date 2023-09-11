"use client"
import React from 'react'

function page({params}) {
  console.log(params)
  const arr=params.lecture
  console.log(arr[1])
  return (
    <div>
        {
            arr.map((ele)=>(
                <h1>Name:{ele}</h1>
            ))
        }
        <h1>hello</h1>
    </div>
  )
}

export default page