import React from 'react'
 import { useState } from 'react'
function Form() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('')
    function show(e){

        e.preventDefault();
        console.log(name )
        console.log(email)

       
       
    }
  return (
    <div>
        <form onSubmit={show}>
     Name <input type="text" onChange={(e)=> setName(e.target.value)} /> <br /> <br />
     Email  <input type="text" onChange={(e)=> setEmail(e.target.value)} />  <br /> <br />
       
       <input type="submit" />
        </form>
    </div>
  )
}

export default Form