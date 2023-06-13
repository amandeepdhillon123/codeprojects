  
  import React from 'react'
import { useState } from 'react';
  function Sta() {

    // const[user,setUser]=useState({
    //     name:"amandeep",
    //     dis:"jind"
    // })

    const[num,setNum]=useState(0)

    function show(){
    //  setNum(num + 10)
    //  setNum(num + 20)

    setNum(last=>last + 10)
    setNum(last=>last + 20)
    }
    return (
      <>
      {/* <h1>{user.name}</h1> */}
      <h1>{num}</h1>

      <button onClick={show}>update</button>
      </>
    )
  }
  
  export default Sta;