import React from 'react'
import Forward2 from './forward2'
import { useRef } from 'react'
function Forward1() {
    let inputRef=useRef(null)

    function updateInput(){
      inputRef.current.value="1000"
    }
  return (
    <div>
        <h1>forward in react</h1>
       <Forward2 ref={inputRef}/>
       <button onClick={updateInput}>update</button>
    </div>
  )
}

export default Forward1