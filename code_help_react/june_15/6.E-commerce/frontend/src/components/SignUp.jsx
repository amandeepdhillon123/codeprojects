import React from 'react'
 import {useState} from'react'
function SignUp() {
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    const collectData=()=>{
        console.log(name,password,email)
    }
  return (
    <div className="register">
    <h1>Register</h1>
    Name:   <input className="inputBox" type="text"  placeholder="Enter Name"  value={name} onChange={(e)=>setName(e.target.value)}   /> <br />
    Email:  <input className="inputBox" type="email" placeholder="Enter Email"   value={email} onChange={(e)=>setEmail(e.target.value)}  /> <br />
    Password: <input className="inputBox" type="text" placeholder="Enter your password"  value={password} onChange={(e)=>setPassword(e.target.value)} /> <br /> 
     <button onClick={collectData} type="butoon" value="SignUp"className="signup" >SignUp</button>
    </div>
  )
}

export default SignUp