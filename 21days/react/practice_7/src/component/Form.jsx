import React from 'react'
import { useState } from 'react'
function Form() {
    const[input,setInput]= useState({
        name:"",
        pass:""

    })

    function changeHandler(e){
          setInput({...input,[e.target.name]: e.target.value})
    }

    function formHandler(e){
        e.preventDefault();
        console.log(input)
    }
  return (
    <div>
        <form onSubmit={formHandler}>
            Name: <input name='name' type="text"  onChange={changeHandler} /> <br /> <br />
            Password: <input name='pass' type="text" onChange={changeHandler} /><br /> <br />
          
              <input type="submit" />
        </form>
    </div>
  )
}

export default Form