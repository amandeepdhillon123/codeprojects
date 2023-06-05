import React from 'react'
import { useState } from 'react'

const Conditon = () => {

    const[loggedIn, setLog] = useState()
  return (
    <div>
     {
      loggedIn == 1? <h1>hello user 1</h1>:
      loggedIn == 2 ? <h1>hello user 2</h1>:
      <h1>hello user 3</h1>

     }

    </div>
  )
}

export default Conditon