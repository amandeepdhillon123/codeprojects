import React, { useState } from 'react'

const Form = () => {

    const[name,setName] = useState("")
    const[tnc,setTnc] = useState(false)
    const [interest,setInterest] = useState("")

    function getFormData(e){
        console.log(name,tnc,interest)
        e.preventDefault();

    }
  return (
    <div>
        <form onSubmit={getFormData}>
            <input type="text" placeholder='enter name' onChange={(e)=> setName(e.target.value)}/> 
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option >select option</option>
                <option >Marvel</option>
                <option >DC</option>
            </select> <br /> <br />
            <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)}/><span>Accept Terms and Conditions</span> <br /> <br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form