 import React from 'react'
  import { useRef } from 'react'
 function Ref1() {
    let inputRef= useRef(null)
    function handleInput(){
        console.log("function call")
        // inputRef.current.value='1000'
        // inputRef.current.focus();
        inputRef.current.style.color="red"
    }
   return (
     <div>
       <h1>useRef in react</h1>
       <input type="text" ref={inputRef}/>
       <button onClick={handleInput}>Handle Input</button>
     </div>
   )
 }
 
 export default Ref1