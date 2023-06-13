import React from 'react'
import { useState } from 'react';
function Form() {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')


    function getData(e){
        e.preventDefault();

        console.log(name +" "+ email +" "+ pass)

        // console.log("amandeep")

    }
  return (
    <>
    
    <form onSubmit={getData}>

     name : <input type="text"  onChange={(e)=>setName(e.target.value)} /> <br /> <br />
     email: <input type="email" onChange={(e)=>setEmail(e.target.value)} /><br /> <br />
     password: <input type="password" onChange={(e)=>setPass(e.target.value)} /><br /> <br />
     <button type='submit'>submit</button>
    </form>
    
    </>
  )
}

export default Form