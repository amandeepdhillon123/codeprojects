
import React,{useState} from "react";
function Toggle(){
    const[data,setDate] = useState("amandeep")
    const [show,setShow] = useState(true)
    
    return (
        <>
       {
        show ?     
        <h1>{data}</h1> :null
       }
     
        <button onClick={()=> setShow(true)}>show</button>
        <button onClick={()=> setShow(false)}>hide</button>
        <button onClick={()=> setShow(!show)}>toggle</button>
        </>
    )
}

export default Toggle;