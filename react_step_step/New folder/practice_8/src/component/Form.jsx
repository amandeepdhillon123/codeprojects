import React from 'react'
import { useState } from 'react';

 

function Form() {

    const[name,setName]= useState('')
    const[interest,setInterest]= useState('')
    const[tnc,setTnc]= useState(false)
    // const[name,setName]= useState('')

    function show(e){
        e.preventDefault();
        console.log(name)
        console.log(interest)
        console.log(tnc)
        
    }
  return (
    <>
      <form onSubmit={show}>
         <input type="text" placeholder='write name' value={name} onChange={(e)=> setName(e.target.value)} /> <br /> <br />
         <select onChange={(e)=> setInterest(e.target.value)}>
            <option>Movies</option>
            <option >Marvel</option>
            <option>DC</option>            
         </select>  <br />
         <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)}/> <span>Accept terms and Conditions</span> <br />


<button type='submit'>submit</button>

      </form>
    </>
  )
}

export default Form