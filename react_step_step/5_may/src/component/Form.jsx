
import React from "react";

import { useState } from "react";


function Frm(){
 const[name,setName] = useState("")
 const[tnc,setTnc] = useState(false)
 const[interest,setInterest] = useState("")
   
 function getFormData(e){

    console.log(name,tnc,interest)
    e.preventDefault();
  }
   
    return(
        <>
        <h1>form data</h1>
        <form onSubmit = {getFormData}>
         <input type="text" placeholder="enter your name" onChange={(e) => setName(e.target.value)}/>  <br/> <br/> 
        <select  onChange={(e) => setTnc(e.target.value)}>
            <option>Select option</option>
            <option>Dc</option>
            <option>Marvel</option>
        </select>  <br/> <br/> 
         <input  type="checkbox" onChange={(e) => setInterest(e.target.checked)}/>  <span>Accept term and condition</span> <br/> <br/>  

    <button>Submit</button>
        </form>     

         
        </>
    )
}

export default Frm;