import React from 'react'
  import { useRef } from 'react';
function Un1() {
     let inputRef= useRef(null)
     let inputRef1= useRef(null)

   
    function submitForm(e){
        e.preventDefault();
      console.log("inputn 1", inputRef.current.value)
      console.log("inputn 2", inputRef1.current.value)
      let input3=document.getElementById('input3').value
      console.log("inputn 3",input3)
    }
  return (
    <div>
        <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" />  <br /><br />
         <input ref={inputRef1} type="text" />  <br /><br />
          <input type="text" id='input3' />
         <button>submit</button>
        </form>
      
    </div>
  )
}

export default Un1