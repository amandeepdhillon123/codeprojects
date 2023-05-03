import React from "react";

import { useState } from "react";

function Toggle (){
  const [status,setStatus] = useState(true)

    return(
        <>
        {
            status?<h1>hello world</h1> :null
        }

        <button onClick={()=> setStatus(true)}>show</button>
        <button onClick={()=> setStatus(false)}>hide</button>
        

        <button onClick={()=> setStatus(!status)}>Toggle</button>
        </>
    )

}

export default Toggle;