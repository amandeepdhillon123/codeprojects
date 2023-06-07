
import React, { useRef } from 'react'

function Use() {

    let inputRef= useRef(null)
    function handle(){


      console.log("function text")

      inputRef.current.value="100"

      
      inputRef.current.focus();

      inputRef.current.style.backgroundColor = "green"
      inputRef.current.style.display ="none"
    }
  return (
    <div>
     <h1> useRef in React</h1>
     <input type="text" ref={inputRef} />

   <button onClick={handle}>handle input</button>

    </div>
  )
}

export default Use