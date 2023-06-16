import React, { useRef } from 'react'

function Four() {
    const refObj1= useRef(null)
    const refObj2= useRef()

    const change=()=>{
        refObj1.current.style.color="red"
       refObj2.current.value="1000"

       refObj2.current.focus();
       refObj2.current.style.display= 'none';
    }
  return (

  
    <div>
         {console.log("rendereting")}
        <h1 ref={refObj1}>aman</h1>
        <input type="text" ref={refObj2} />
        <button onClick={change}>Submit</button>

    </div>
  )
}

export default Four