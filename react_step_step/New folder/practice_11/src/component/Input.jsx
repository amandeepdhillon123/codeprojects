import React from 'react'
 import { useState } from 'react'
function Input() {

    const[name,setName]= useState("")
    const[print,setPrint]=useState(false)
    function changeHandler(e){
   setName(e.target.value)
      setPrint(false)
    }
  return (
    <>

    {
        print?
        <h1>{name}</h1>: null
    }
      
    Name: <input type="text" onChange={changeHandler} />
    <button onClick={()=>setPrint(true)}>Print</button>
    
    
    </>
  )
}

export default Input