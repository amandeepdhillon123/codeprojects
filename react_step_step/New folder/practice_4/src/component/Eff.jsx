import React from 'react'
import { useEffect, useState } from 'react'
const Eff = () => {

    const[data,setData]=useState(10)
    const[count,setCount]=useState(100)

    useEffect(()=>{
     console.log("called with data")
    },[data])

    useEffect(()=>{
        console.log("called with count")
       },[count])
  return (
   <>
     <h1>hello {count}</h1>
     <h1>hello {data}</h1>

     <button onClick={()=> setCount(count + 1)}>Update Count</button>
     <button onClick={()=> setData(data + 1)}>Update Data</button>
   </>
  )
}

export default Eff