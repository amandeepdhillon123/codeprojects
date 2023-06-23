import React, { useState } from 'react'

function Input() {
    const[name,setName]= useState({
        "name":"",
        "pass":""
    })
   
function changeHandler(e){
   
     setName({...name,[e.target.name]:e.target.value})
}


    function changeData(e){
        e.preventDefault();
       console.log(name)
 
    }
  return (
    <div>
        {/* <form onSubmit={changeData}>
        Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
        Password: <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} /> <br /> <br />
          <input type="submit" />
          </form> */}

          <form onSubmit={changeData}>
        Name: <input name='name' type="text"   onChange={changeHandler} /> <br /> <br />
        Password: <input name='pass' type="text"  onChange={changeHandler} /> <br /> <br />
          <input type="submit" />
          </form>
    </div>
  )
}

export default Input;