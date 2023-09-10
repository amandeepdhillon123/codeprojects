import React, { useState } from 'react'

const Toggle = () => {

    const[data,setData]= useState(true)
  return (
    <div>
         <h1>{data ? <h1>hello ji</h1> : null}</h1>

         <button onClick={()=> setData(true)}>show</button>
         <button onClick={()=> setData(false)}>hide</button>
         <button onClick={()=> setData(!data)}>show</button>
         {/* <button>hide</button>
         <button>toggle</button> */}

    </div>
  )
}

export default Toggle