import React from 'react'
import { useState } from 'react';
const Fun = () => {

    const[name,setName]=useState('')
    const[pass,setPass]=useState('')
    const[email,setEmail]=useState('')
    const[city,setCity]=useState('')
    function getData(event){
      event.preventDefault();

      console.log(`${name} ${pass} ${email} ${city}` )
     
    }
  return (
    <div>
   <h1>Registeration form</h1>
    <form onSubmit={getData}>
        <label htmlFor="name">UserName : </label>
     <input type="text" id="name"  onChange={(e) =>setName(e.target.value)} /> <br /> <br />
     <label htmlFor="name">Password : </label>
     <input type="password" id="name" onChange={(e) =>setPass(e.target.value)} /> <br /> <br />
     <label htmlFor="name"> Email : </label>
     <input type="email" id="name" onChange={(e) =>setEmail(e.target.value)}  /> <br /> <br />
     <label htmlFor="name">City: </label>
     <input type="text" id="name" onChange={(e) =>setCity(e.target.value)} /> <br /> <br />
     <button>Register</button>
    </form>

    </div>
  )
}

export default Fun