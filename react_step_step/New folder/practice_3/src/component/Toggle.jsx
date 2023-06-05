import React from 'react'
 import { useState } from 'react'

const Toggle = () => {

    const[num,setNum]=useState(true)
  return (
    <>
    {

        num?
        <h1>Hello</h1>:
        null

    }
   
<button onClick={()=>setNum(true)}>Show</button>
<button onClick={()=>setNum(false)}>Hide</button>
<button onClick={()=>setNum(!num)}>toggle</button>



    </>
  )
}



export default Toggle