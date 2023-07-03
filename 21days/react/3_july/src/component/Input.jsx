import React from 'react'
 import { useState } from 'react'
import { render } from 'react-dom'
function Input() {
    const[text,setText] = useState("")
   const[print,setPrint]= useState(false)
    function changeHandler(e){
         
        setText(e.target.value)
        setPrint(false)
         
    }
  return (
    <div>
       
    { print ? <h1>{text}</h1>  : null}
          
       <input type="text" onChange={changeHandler}  />
      <button onClick={()=>setPrint(true)}>print</button>

    </div>
  )
}

export default Input