import React from 'react'
import { useState } from 'react';
function Validation() {

    const[name,setName]=useState('')
     const[pass,setPass]= useState('')
     const[useErr,setUseErr]=useState(false)
     const[passErr,setPasErr]=useState(false)
    function getData(e){
      e.preventDefault();

      if(name.length < 3 || pass.length < 3)
      {
        alert("type valid value")
      }
      else
      {
        alert("succesful")
      }

    //   console.log(name)

    //   console.log(pass)
       
    }

    function userHandler(e){
        let item = e.target.value;

        if(item.length < 3)
        {
            setUseErr(true)
        }
        else{
            setUseErr(false)
        }
        
        setName(item)
    }

    function passHandler(e){
        let item = e.target.value;

        if(item.length < 3)
        {
            setPasErr(true)
        }
        else{
            setPasErr(false)
        }
        
       setPass(item)
    }
  return (
    <>
    <h1> form Validation</h1>
    <form onSubmit={getData}>
     <input type="text" placeholder='logIn' onChange={userHandler} />{useErr? <span>User not valid</span>: null}
      <br /> <br />
     <input type="password" placeholder='password' onChange={passHandler} /> {passErr? <span>User not valid</span>: null} <br /> <br />
     <input type="submit"/>
    </form>

    </>
  )
}

export default Validation