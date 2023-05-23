import React from 'react'

import { useState } from 'react';

const Input = () => {

     const[name,setName] = useState("")

     const handlerName=(e)=>{

        // setName(e.target.value)
        console.log(name)
    }
     const changeHandler=(e)=>{

         setName(e.target.value)
     }

    //  const handlerName=(e)=>{

    //     // setName(e.target.value)
    //     console.log(name)
    // }

  return (
        <>
     <h1>input</h1>

     <input type="text" placeholder='write your name' onChange={changeHandler} />
      <button onClick={handlerName}>show</button>       
        </>
  )
}

export default Input