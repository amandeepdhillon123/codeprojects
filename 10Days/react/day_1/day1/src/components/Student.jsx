
import Ram from "../components/Ram"
import Shya from "../components/Shya"
import {useState} from "react"
function Student(){

    const [name,setname] =useState("anil")
   
    function ram(){
        alert("jai ho")
    }
    return (
        // <>
        //  <Ram  
        //  name ={name}
        //  other={{name:"amandeep" , surName:"Dhillon"}}
          
        //  ram={ram}
         
        //  />
        //  <button onClick={()=> setname("ram")}>update nbame</button>
        // </>

        <>
        <Shya name ={"amandeep"}/>
        </>
    )
}
export default Student;