import React from 'react'

function Event() {
    function Ram(){

        alert("hello ji i am function")
    }
  return (
    <>
    <h1> hello jii</h1>
    {/* <button onClick={()=> alert("hello ji kaise ho aap sbhi")}>click me</button> */}
     
    <button onClick={Ram}>click me</button>
  
</>
   
  )
}

export default Event