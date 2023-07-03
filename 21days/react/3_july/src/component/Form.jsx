import React from 'react'
import { useState } from 'react';
function Form() {

    // const[name,setName] =useState("")
    // const[email,setEmail] =useState("")

    // function formHandler(e){
    //       e.preventDefault();
    //       console.log(name)
    //       console.log(email)
    // }

    const[form,setform] =useState({
        name:"",
        email:""
    })

    function changeHandler(e){

        setform({...form,[e.target.name]: e.target.value})

    }
    function formHandler(e){
        e.preventDefault();
        console.log(form.name)
        console.log(form.email)
    }
    
  return (
    <div>
        <form onSubmit={formHandler}>
          Name:  <input name='name' type="text" placeholder='write name' onChange={changeHandler}/> <br /> <br />
          Email:  <input name ='email' type="text" placeholder='write email' onChange={changeHandler} /> <br /> <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form