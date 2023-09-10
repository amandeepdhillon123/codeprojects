import React, { useState } from 'react'

const Conditon = () => {
    const[loggedIn,setLoggedIn] = useState(1)
  return (
    <>
     {loggedIn == 1? <h1>welcome Anil</h1> :loggedIn ==2 ? <h1>welcome anil 2</h1> : <h1>hello ram</h1>}
    </>
  )
}

export default Conditon