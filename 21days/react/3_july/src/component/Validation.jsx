import React, { useState } from 'react'

function Validation() {
    const[name,setname]= useState("")
    const[email,setEmial]= useState("")
  const[err,setErr]  = useState(false)


    function changeHandler(e){
        let item =e.target.value;
        
        console.log(item.length)

        if(item.length < 3)
        {
           setErr(true)
        }
        else
        {
            setErr(false)
        }

    setname(item)
  
    }

    function changHandler(e){
        let item =e.target.value;
        
        console.log(item.length)

        if(item.length < 3)
        {
           setErr(true)
        }
        else
        {
            setErr(false)
        }

    setEmial(item)
  
    }

    function formHandler(e){
        e.preventDefault();
    if(name.length < 3 || email.length < 3)
    {
        alert("invalid code ")
    }
    else{
        alert("succesfule")
    }
        // console.log(name)
        // console.log(email)
     }
  return (
    <div>
        <form onSubmit={formHandler}>
             Name :<input  type="text" onChange={changeHandler} />{err ? <span>Not valid</span> : null} <br /> <br />
            Email :<input type='text' onChange={changHandler} /> {err ? <span>Not valid</span> : null} <br /> <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Validation