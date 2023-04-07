import {useState } from "react";
import React from "react";
import Props from "./Props";
function Student(){

    const[name,setName] = useState("amandeep")


    return(
        <div>
            <h1>Props in react</h1>
            {/* <Props name={"amandeep"} email={"aman@gmail.com"}  other={{address:'delhi' ,mobile:'000'}}/>
            <Props name={"ram"} email={"ram@gmail.com"}  other={{address:'noida' ,mobile:'000'}} />
            <Props name={"peter"}  email={"peter@gmail.com"}  other={{address:'gurugram' ,mobile:'000'}}/> */}
           <Props name={name} />
           
           <button onClick={()=>{setName("amandeep dhillon")}}>change</button>
        
        </div>
    )
}

export default Student;