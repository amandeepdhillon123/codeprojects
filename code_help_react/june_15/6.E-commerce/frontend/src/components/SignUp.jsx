import React from 'react'
 import {useState,useEffect} from'react'

  import {useNavigate} from "react-router-dom"
function SignUp() {
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    const navigate = useNavigate();
    

    useEffect(()=>{
    
      let auth = localStorage.getItem('user')
      if(auth)
      {
      navigate('/')
      }
    })



    const collectData=async()=>{
        console.log(name,password,email)
        let result= await fetch('http://localhost:2256/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        })
         result= await result.json()
         console.log(result)

         if(result)

         {
          localStorage.setItem("user",JSON.stringify(result))
          navigate('/')
         }
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