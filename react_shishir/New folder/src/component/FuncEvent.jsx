import React from 'react'

const FuncEvent = () => {

    function show(name){
        console.log(name)
    }
  return (
    <>
   <h1>Use event in functional component</h1>
   {/* <button onClick={show}>submit</button> */}

     <button onClick={()=>show("deep Dhillon")}>submit</button>
    </>
  )
}

export default FuncEvent