
import Ram from "../components/Ram"

import {useState} from "react"
function Student(){

    const [name,setname] =useState("anil")
   
    function ram(){
        alert("jai ho")
    }
    return (
        <>
         <Ram  
         name ={name}
         other={{name:"amandeep" , surName:"Dhillon"}}
          
         ram={ram}
         
         />
         <button onClick={()=> setname("ram")}>update nbame</button>
        </>
    )
}
export default Student;