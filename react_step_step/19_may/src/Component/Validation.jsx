
import React from 'react'
import { useState } from 'react'

const Validation = () => {
    const[user,setUser]=useState('')
    
    const[password,setPassword]=useState('')
    
    const[passErr,setPassErr] = useState(false)
    const[useErr,setUserErr] = useState(false)

   function handlerlogin(e){
 

    if(user < 3 || password < 3)
    {
        alert("type correct values")

        console.log("amamd")
    }

    else{
            alert("all good")
    }
        //   console.log("amandeep")

        e.preventDefault();
    }

    function userHandler(e){
     let item =e.target.value.length;
     if(item<3)
     {
        // console.log("invalid") 

        setUserErr(true)
     }
     else{
        setUserErr(false)
     }
     setUser(item)
   
    }


    function passHandler(e){
        let item =e.target.value.length;
        if(item<3)
        {
           // console.log("invalid") 
   
           setPassErr(true)
        }
        else{
           setPassErr(false)
        }
        
      setPassword(item)
       }
  return (
    <div>
  <h1>login</h1>
  <form onSubmit={handlerlogin}>
  <input type='text' placeholder='enter user id' onChange={userHandler}/> {useErr? <span>user not valid</span>: null} <br/> <br/> 
  <input type='password' placeholder='enter user password' onChange={passHandler}/> {passErr ? <span>user not valid</span>: null} <br/> <br/> 
  <button type='submit'>login</button>

  </form>7
    </div>
  )
}

export default Validation