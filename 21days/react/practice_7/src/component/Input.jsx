import React from "react";
 import { useState } from "react";
function Input() {
    const[input,setInput]= useState('')
    const[print,setPrint]=useState(false)
   console.log(input)
    function inputHandler(e){
        //  console.log(e.target.value) 
        setInput(e.target.value)
        setPrint(false)
    }

  return (
    <div>
        <h1>
            {
                print ? input : null
            }</h1>
      <input type="text" onChange={inputHandler} />
      <button onClick={()=>setPrint(true)}>print</button>
      
    </div>
  );
}

export default Input;
