import React, { useState } from 'react'

function Validation() {
    const[name,setName]=useState(true)
    const[pass,setPass]=useState('')
    const[err,setErr]=useState(false)
    const[pe,setPe]= useState(false)

    function changeHandler(e){
     let item= e.target.value.length;

     if(item < 3)
     {
        setErr(true)
     }
     else{
        setErr(false)
     }

     setName(item)
    }

    function changeHandler(e){
        let item= e.target.value.length;
   
        if(item < 3)
        {
           setPe(true)
        }
        else{
           setPe(false)
        }

        setPass(item)
       }

    function datahandler(e){
        e.preventDefault();

        if(name.length < 3 && pass.length < 3)
        {
            alert("Invalid input")
        }
        else{
             alert("successful submit ")
        }

    
    }
  return (
    <div>
     
     <form onSubmit={datahandler}>
        name: <input type="text"  onChange={changeHandler} /> {err ? <span>user not valid</span>: null}               <br /> <br />
        Password: <input type="text" onChange={changeHandler} />  {pe ? <span>user not valid</span>: null}   <br /> <br />
        <input type="submit" />
     </form>

    </div>
  )
}

export default Validation