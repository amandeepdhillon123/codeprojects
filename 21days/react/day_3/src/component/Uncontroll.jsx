import React from 'react'
  import { useRef } from 'react';
function Uncontroll() {
    let inputRef= useRef(null)
    let inputRef1= useRef(null)
    function submitForm(e){
     e.preventDefault();
     inputRef1.current.value="100"
     inputRef.current.value="1000"
     let input= document.getElementById("input3").value="500"
    }
  return (
    <div>
        <h1>UnControlled</h1>
        <form action="" onSubmit={submitForm}>
            
        <input type="text" ref={inputRef} /> <br /> <br />
        <input type="text" ref={inputRef1} /> <br /> <br />
        <input id='input3' type="text"  /> <br /> <br />
       <button>Submit</button>

        </form>
     

    </div>
  )
}

export default Uncontroll