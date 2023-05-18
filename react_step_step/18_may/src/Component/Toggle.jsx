  import React, { useState } from "react";

  import { Component } from "react";
const Toggle =() =>{

    const[status,setStatus] = useState(true)

    return(
        <div>
            {status ? <h1>hello</h1> :null}
     <button onClick={()=> setStatus(false)}>hide</button>
     <button onClick={()=> setStatus(true)}>show</button>
     <button onClick={()=> setStatus(!status)}>toggle</button>
        </div>
    )
}

export default Toggle;