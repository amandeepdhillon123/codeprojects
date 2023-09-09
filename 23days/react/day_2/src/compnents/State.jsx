import React, { useState } from 'react'

const State = () => {
  const[data,updateData] = useState("ram")
    function Data(){
    updateData("jaatarm")
    }

    console.log("________________________________________")
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>Data()}>chnage</button>
    </div>

  
  )
}

export default State