import React, { useState } from 'react'

const Inp = () => {

    const[user,setUser]=useState({

        "name":"",
        "age":""
    })

    const changeHandler=(e)=>{
      
        setUser({...user,[e.target.name]:e.target.value})

        // console.log(e.target.value)

        // console.log("amandeep")

        // console.log(use

        // console.log(e.target.name)
        // console.log(e.target.value)
    }

    const show=()=>{
      
        console.log(user.name)
        console.log(user.age)

    }
  return (
    <div>
<input  name='name' type="text" placeholder='write your name'  onChange={changeHandler} value={user.name} /> <br/> <br/>
<input   name='age' type="text" placeholder=' write your age'  onChange={changeHandler} value={user.age}  />

<button onClick={show}>Show</button>
    
    
    
    </div>
  )
}

export default Inp