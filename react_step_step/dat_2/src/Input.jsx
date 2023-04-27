   import React from "react";
  import { useState } from "react";
function Input(){
    const[data,setData] = useState(null)
    const[print,setPrint] = useState(false)
    function getData(val)
    {

        // console.log(val.target.value)
        setData(val.target.value)

        setPrint(false) // for hiding 
    }
    return(
        <>
   {print ? <h1>{data}</h1> : null }
        {/* <h1>{data}</h1> */}
       <input type ="text"  onChange={getData}  />
      
      <button onClick={()=>setPrint(true)}>Print data</button>
        
        </>
    )
}

export default Input;