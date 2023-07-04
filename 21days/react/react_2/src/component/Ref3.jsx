import React from 'react'
import Ref4 from './Ref4'
import { useRef } from 'react'
function Ref3() {
    let inputRef= useRef("null")

    function update(){
     inputRef.current.value="1000"
    }
  return (
    <div>

        <Ref4 ref={inputRef}/>

       <button onClick={update}>update</button>
    </div>
  )
}

export default Ref3