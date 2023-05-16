
import { useState } from "react";
import React from "react";
function Input(){

    const[data,setData]=useState(null)

    const[print,setPrint]=useState(false)

    function getData(event)
    {
        // console.log(event.target.value)
        setData(event.target.value)
        setPrint(false)
    }


    return(
        <div>   {
            print ? <h1>{data}</h1> : null
            }
             
            <input type="text" onChange={getData} />
            <button onClick={() => setPrint(true)}>update</button>
        </div>
    )




}

export default Input;