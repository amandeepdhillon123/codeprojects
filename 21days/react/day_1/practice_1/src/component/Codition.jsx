import React, { useState } from 'react'

function Codition() {

    const[num,setNum]=useState(3)
  return (
    <div>
        {
            num == 1 ? <h1>hello 1</h1> : num == 2 ? <h1>hello 2</h1> : <h1>hello ji 3</h1>
        }

        
    </div>
  )
}

export default Codition