import { useState } from "react";
import React from "react";

function  Form(){


    const[name,setName]= useState('');
    const[tnc,setTnc]= useState(false);
    const[interest,setInterest]= useState('');

    function getFormData(event)

    

    
    {
        event.preventDefault();

        console.log(name,tnc,interest)
        console.log("amandeep")
    }

    function clearHandler(){

        // name=null;
        // tnc=null;
        // interest=null;

        console.log("adsdf")

    }

    return(
        <div>
        <h1>handle form in react </h1>
        <form onSubmit={getFormData}>
            <input type="text" src=""  value ={name} placeholder="enter your name" onChange={(e)=> setName(e.target.value)} /> <br></br><br></br><br></br>
         <select onChange={(e)=> setInterest(e.target.value)} value={interest}>
            <option>Select option </option>
            <option>marvel</option>
            <option>Dc</option>
         </select><br></br><br></br>

         <input type="checkbox" value={tnc}  onChange={(e)=> setTnc(e.target.checked)} /> <span>Accept term and condition</span><br></br><br></br>
       

         <button type="submit">submit Button</button> 
        </form>
     
        </div>
    )
}

export default Form;