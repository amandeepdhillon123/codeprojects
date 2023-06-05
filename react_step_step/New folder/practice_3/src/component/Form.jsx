import React from 'react'

import { useState } from 'react'

const Form = () => {

    const[name,setName]=useState('')
    const[sel,setSel]=useState('')
    const[tnc,setTnc]=useState(false)

    function getDta(e){
        e.preventDefault();

     console.log(name,sel,tnc)
    }
  return (
   <>
     <form onSubmit={getDta}>

      <input type="text"  placeholder='name' onChange={(e) =>setName(e.target.value)}/> <br /> <br />
    <select onChange={ (e) => setSel(e.target.value)} >
        <option value="">option</option>
        <option value="">aman</option>
        <option value="">aman</option>
    </select>
    <br /><br />

  <input type="checkbox"  onChange={ (e) => setTnc(e.target.checked)} /> <span>Term and codtinton</span> <br /> <br />

  <button type='submit'>Subnmit</button>


     </form>
   
   
   
   
   
   
   </>
  )
}

export default Form