
import React from 'react'
 import { useState } from 'react'
function Input() {

  const[name,setName]= useState(null)
  const[print,setPrint]= useState(false)
    

  function getData(event){

    // console.log(event.target.value)

    setName(event.target.value)
    setPrint(false)

  
  }


  return (
   <>
   {/* <h1>{name}</h1> */}
   {
    print?
    <h1>{name}</h1> :null
   }
   <input type="text" onChange={getData} />
   <button onClick={()=>setPrint(true)}>Print</button>
   </>
  )
}

export default Input