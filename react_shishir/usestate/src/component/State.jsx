import React from 'react'
import { useState } from 'react'
const State = () => {

    // const[num,setNum]=useState(0)
    // const[name,setName]=useState('')
    // const[age,setAge]=useState('')

    // function changeName(e){

    //     setName(e.target.value)
    // }

    // function changeAge(e){

    //     setAge(e.target.value)
    // }

    const[user,setUser]=useState({
        "name":"",
        "age":""
    })

    function handlerChange(e){
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    function show() {
    //    console.log(num)

    // console.log(name)
    // console.log(age)

    console.log(user.name)
    console.log(user.age)
    }

    
  return (
    <div>
        {/* <input type="text" onChange={changeName} /> <br /><br />
        <input type="text"  onChange={changeAge}/>   <br /><br /> */}
        
        
        <input name='name' type="text" onChange={handlerChange} value={user.name} /> <br /><br />
        <input  name='age' type="text"  onChange={handlerChange} value={user.age} />   <br /><br />
        
        
        <button onClick={show}>Submit</button>

    </div>
  )
}

export default State