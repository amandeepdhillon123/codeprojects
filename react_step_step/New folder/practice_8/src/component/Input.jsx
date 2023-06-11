import React from 'react'
import { useState } from 'react'
const Input = () => {
   const[data,setData]=useState('')
   const[print,setPrint]= useState(false)
   function show(e){
    console.log()
    setData(e.target.value)

    setPrint(false)

    }
  return (
    <div>
 

   {
    print? 

    <h1>{data}</h1>: null
   }
    

    <input type="text" onChange={show} />

    <button onClick={() => setPrint(true)}>Print</button>


    </div>
  )
}

export default Input