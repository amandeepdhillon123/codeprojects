import React from 'react'
import { useState } from 'react'
function Render() {
    const[name,setName]=useState(2)
  return (
   <div>
       {
        name == 1 ? <h1>hello i am user 1</h1>
        : name == 2 ? <h1> hello  i am user 2</h1> : 
          null
       }
   </div>
  )
}

export default Render