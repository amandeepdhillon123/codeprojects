import React from 'react'
import { useState } from 'react'
function Render() {
    const[num,setNum] = useState('3')
  return (
    <div>
    <h1>
        {
            num == 1 ? <h1>i am first</h1>:   num == 2 ? <h1>i am Second</h1>: <h1>i am last </h1>
        }
    </h1>
    </div>
  )
}

export default Render