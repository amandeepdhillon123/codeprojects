"use client"
import React from 'react'
import Link from 'next/link'
function Student({params}) {
    console.log(params.student)
  return (
    <div>
        <h1>Name:{params.student}</h1>
       
    </div>
  )
}

export default Student