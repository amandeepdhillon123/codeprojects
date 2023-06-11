import React from 'react'

const FuncEvent = () => {

    // function show(name){
    //     console.log(name)
    // }

    function show(e)
    {
        console.log(e.target.value)
    }
  return (
    <>
   <h1>Use event in functional component</h1>
   <input type="text" onChange={show} />
    <button>submit</button>

   {/* <button onClick={show}>submit</button> */}
   
     {/* <button onClick={()=>show("deep Dhillon")}>submit</button> */}
    </>
  )
}

export default FuncEvent