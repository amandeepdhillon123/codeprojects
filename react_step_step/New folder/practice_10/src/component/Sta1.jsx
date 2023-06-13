import React from 'react'
import { useState } from 'react'

// -----
// function Sta1() {

//     const[name,setName]=useState("")
     
//     function changeName(e){
//        setName(e.target.value)
//     }

//     function show(){
//   console.log(name)
//     }
//   return (
//     <>
//    <input type="text" onChange={changeName} />
//    <button onClick={show}>submit</button>
//     </>
//   )
// }

// -------------------


function Sta1() {

    const[user,setUser]=useState({
   "name":"",
   "age":""

    })
     
    function handleChange(e){
       setUser({...user,[e.target.name]:e.target.value})
    }

    function show(){
  console.log(user.name)
  console.log(user.age)
    }
  return (
    <>
   <input name="name" value={user.name} onChange={handleChange} /> <br /> <br />
   <input name="age" value={user.age} onChange={handleChange} />  <br /> <br />
   <button onClick={show}>submit</button>
    </>
  )
}

export default Sta1