import React from 'react'
import { useState } from 'react'
function Toglle() {

    const[print,setPrint]=useState(false)
  return (
    <div>

{
    print?
    <h1>i am here</h1>: null
}

<button onClick={()=> setPrint(true)}>show</button>
<button onClick={()=> setPrint(false)}>hide</button>
<button onClick={()=> setPrint(!print)}>Toggle</button>    

    </div>
  )
}

export default Toglle