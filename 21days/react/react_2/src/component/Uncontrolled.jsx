import React from 'react'
import { useRef } from 'react'
function Uncontrolled() {

    let inputRef = useRef("");

    function submitHandler(e){
        e.preventDefault();
        console.log(
             inputRef.current.value)
             let nam = document.getElementById("ram").value

             console.log(nam)
    }
  return (
    <form onSubmit={submitHandler}>
    <input type="text" ref={inputRef} />
    <input type="text"  id='ram'/>
    <button>submit</button>
          
    </form>
  )
}

export default Uncontrolled