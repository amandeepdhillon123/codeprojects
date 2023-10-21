import React from "react";
import {useState} from "react"
function Num(){

    const [data,setData] = useState("anil")
    
    function ram(){
        
        setData("ram")
    }
   
    return(
        <>

        <h1>{data}</h1>
        <button onClick={()=> ram()}> click me</button>
        </>
    )
}

export default Num;