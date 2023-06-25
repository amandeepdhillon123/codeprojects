import React, { useState } from 'react'
import { useEffect } from 'react'
function Effect() {

  const[num,setNum]=useState(10)
  const[data,setData]=useState(100)

    useEffect(()=>{
       console.log("amandeep")
    //    alert("amandeep")
    })

    useEffect(()=>{
        console.log("amandeep")
     //    alert("amandeep")
     })
   
  return (
    <div>
        <h1> {num} </h1>
        <button onClick={()=>setNum(num + 1)}>update</button>
        <h1> {data} </h1>
        <button onClick={()=>setData( data + 1)}>update</button>
    </div>
  )
}

export default Effect