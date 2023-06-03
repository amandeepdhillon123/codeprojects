import React from 'react'
import Props1 from './Props1'
import { useState } from 'react'
const Props = () => {
  
  const [nam,setName]=useState("amandeep")

  return (
    <div>

  <Props1 
  name={nam}
   
  number= "3478234783"

  email="sfsfhsfjsfh"

  other={{ vpo:'sdshwfhw', city :'sdfhsfsdhfe'}}
  
  
  
  >hello ji i am</Props1>

  <button onClick={()=>setName("Aman Dhillon")}>change name</button>
     
 
    </div>
  )
}

export default Props