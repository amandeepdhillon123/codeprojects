import React from 'react'
import {useRef} from 'react'
import Forward from './Forward'
function ForwardRe() {
    let inputRef= useRef(null);
    function updateInput(){
        inputRef.current.value="1000"

        inputRef.current.style.backgroundColor="red"
    }
  return (


    <div>
        <Forward ref={inputRef}/>
        <button onClick={updateInput}>update</button>
    </div>
  )
}

export default ForwardRe