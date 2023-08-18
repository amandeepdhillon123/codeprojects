
"use client"
import React from 'react'

const Page = ({params}) => {

    const arr = params.lecture
    console.log(arr)
  return (
    <div>
        {
            arr.map((ele)=>{
              return  <li>{ele}</li>
            })
        }

        {/* <h1>{arr[0]}</h1> */}
    </div>
  )
}

export default  Page