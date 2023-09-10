import React, { useInsertionEffect, useState } from 'react'

const Validation = () => {
    const[user,setUser] =useState("")
    const[password,setPassword]= useState("")

    const[err,setErr]= useState(false)

    const[passerr,setpasserr] = useState(false)
  function  loginHandler(e){

    if(user.length < 3 || password.length < 3)
    {
        alert("type correct values")
    }
    else{
          alert("all good")
    }
    
         e.preventDefault()
    }

    function userHandler(e){
        let item = e.target.value
        if(item.length < 3){
            setErr(true)
        }
        else{
            setErr(false)
        }
        setUser(item)
    }

    function passHandler(e){
        let item = e.target.value
        if(item.length < 3){
            setpasserr(true)
        }
        else{
            setpasserr(false)
        }
        setPassword(item)
    }
  return (
    <div>
        <form onSubmit={loginHandler}>
        <h1>login</h1>
        <input type="text" placeholder='enter user Id' onChange={userHandler} /> {err ? <span>User not valid</span>:null}
        <br /> <br />
        <input type="text"  placeholder='enter user password' onChange={passHandler}/> {passerr ? <span>user not valid</span> :null} <br /> <br />
        <button type='submit' >login</button>
        </form>
    </div>
  )
}

export default Validation