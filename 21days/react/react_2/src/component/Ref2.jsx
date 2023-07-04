import React from 'react'
 import { useRef } from 'react'
function Ref2() {

    let inputRef = useRef();
  function Input(){
      inputRef.current.value ="1000";

      inputRef.current.style.color="red"

      inputRef.current.autofocus()
  }

  return (
    <div>
        <input type="text" ref={inputRef} />

        <button onClick={Input}>print</button>
    </div>
  )
}

export default Ref2