import React, { useMemo } from 'react'
import { useState } from 'react'
function Memo() {

     const[count,setCount] = useState(1)
     const[item,setItem] =useState(10)

     const multi = useMemo(function name(){
        console.log('amandeep')
        return count * 3

     
     },[count])
  return (
    <div>
        <h1>{count}</h1>
        <h2>{item}</h2>
       <h3>{multi}</h3>
   <button onClick={()=>setCount(count + 1)}> count </button>
   <button onClick={()=> setItem( item + 1)}> item </button>
    </div>
  )
}

export default Memo