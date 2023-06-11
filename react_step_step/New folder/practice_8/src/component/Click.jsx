import React from 'react'
//   alert("hello")
function Click() {

    function show(){
        alert("hello ji kais eho sare ")
    }
  return (
    <>
    <h1>Click Event</h1>

    {/* <button onClick={()=> alert("rma")}>click me</button> */}
    {/* <button onClick={()=> console.log("amandeep")}>click me</button> */}
    

    <button onClick={()=> show()}>Show me</button>
    
    </>
  )
}

export default Click