import React from 'react'
import { useState,useMemo } from 'react'
function Memo() {
    const[count,setCount]=useState(0)
    const[item,setItem]= useState(10)

    const multicount= useMemo(()=>{
        console.log("amamndeppe") 
        return count * 4;
    },[count])
          
      
  return (
    <div>
       <h1>useMemo hook in react</h1>
  <h2> count : {count}</h2>
  <h2> item : {item}</h2>
  <h2>{multicount}</h2>
<button onClick={()=>setCount(count + 1)}>Update count</button>

<button onClick={()=>setItem(item  + 100)}>Update count</button> 
    </div>
  )
}

export default Memo