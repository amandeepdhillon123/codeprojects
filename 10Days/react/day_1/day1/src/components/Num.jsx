import React from "react";
import {useState} from "react"
function Num(){

    const [data,setData] = useState(0)
    
    function inc(){
        
        setData(data + 1)
    }

    function dec(){
        
        setData(data - 1)
    }
    function reset(){
        
        setData(0)
    }
   
   
    return(
        <>

        <h1>{data}</h1>
        <button onClick={()=> inc()}>inc</button>
        <button onClick={()=> dec()}>dec</button>
        <button onClick={()=> reset()}>reset</button>
        </>
    )
}

export default Num;