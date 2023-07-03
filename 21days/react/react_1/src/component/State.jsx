import React from 'react'
 import { useState } from 'react'
function State() {
    const[count,setCount] = useState(0)
    const[text,setText] = useState('')
    function incHandler(){
        setCount(count+ 1)
   }

   function changeHandler(e){
  setText(e.target.value)
   }

   
  return (
    
    <div>
     <h1>{count}</h1>
     <button onClick={incHandler}>increment</button>
     
     <h1> text : {text}</h1>

      <input type="text" onChange={changeHandler} />    
    </div>
  )
}

export default State