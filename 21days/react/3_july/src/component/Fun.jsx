import React from 'react'
import { useState } from 'react'
function Fun() {

    const[count,setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
     <button onClick={()=>setCount(count + 1)}>Inc</button>
     <button onClick={()=>setCount(count - 1)}>dec</button>
    </div>
  )
}

export default Fun