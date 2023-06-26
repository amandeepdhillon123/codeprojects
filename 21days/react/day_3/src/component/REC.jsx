import React, { useRef } from 'react'

function REC() {

    const inputRef = useRef(null)

        function inputHandler(){



            inputRef.current.style.backgroundColor="red"
        }
  return (
    <div>
        <input type="text" ref={inputRef} />
       
       <button onClick={ inputHandler}> Update</button>
    </div>
  )
}

export default REC