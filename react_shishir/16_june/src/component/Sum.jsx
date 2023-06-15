
import React, { useState } from 'react'

function Sum() {
    const[inputvalue,setvalue]=useState({num1:"",num2:""})
     const[num3,setNum3]=useState('')
   

      const handleChange=(e)=>{
        setvalue({...inputvalue,[e.target.name] : e.target.value})

      }
    function show(e){
        e.preventDefault();

        setNum3( Number(inputvalue.num1) + Number(inputvalue.num2))


    }
  return (
    <div>

             <h1>{num3}</h1>
         <form onSubmit={show}>
            num1 :<input name='num1' type="text" onChange={handleChange} /> <br /> <br />
            num12 :<input  name='num2'  type="text"  onChange={handleChange}/> <br /> <br />
            <input type="submit" /> <br /> <br />

         </form>
    </div>
  )
}

export default Sum