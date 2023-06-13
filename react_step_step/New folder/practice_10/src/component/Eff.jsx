import React, { useEffect, useState } from 'react'

function  Eff() {
   const[user,setUser]= useState(0)
   const[user1,setUser1]= useState(10)
    useEffect(()=>{
       console.log("component did update",user)  
    })

    
    useEffect(()=>{
       console.log("componet mount")  
    },[])

    // useEffect(()=>{
    //     console.log('run')

    //     return()=>{
    //         console.log("component will mount")
    //     }
    // },[user1])
  return (
    <div>
        <h1>{user}</h1>
        <button onClick={()=>setUser(user + 1)}>update1</button>
        <h1>{user1}</h1>
        <button onClick={()=>setUser1(user1 + 1)}>update2</button>
    </div>
  )
}

export default  Eff