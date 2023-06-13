import React from 'react'
import { useState } from 'react';
function Val() {

    const[name,setName]=useState('')
    const[pass,setPass]=useState('')
    const[err,setErr]= useState(false)
    const[erpass,setErpass]= useState(false)


    function getData(e){
        e.preventDefault();

        // console.log(name +" "+ email +" "+ pass)

        // console.log("amandeep")

        if(name.length <3 || pass.length < 3 )
        {
            alert("invalid")
        }
        else{
            alert("valid")
        }





    }

    function changeHandler(e){
        let item= e.target.value;
        console.log(item)
        
        {
            item.length< 3 ? 
            setErr(true): setErr(false)
        }

  
  setName(item)

    }

    function changeHandler1(e){
        let item= e.target.value;
        console.log(item)
        
        {
            item.length< 3 ? 
            setErpass(true): setErpass(false)
        }

    setPass(item)


    }
  return (
    <>
    
    <form onSubmit={getData}>

     name : <input type="text"  onChange={changeHandler} /> { err ? <span>invalid less than 4</span> : null}  <br /> <br />
     
     password: <input type="password" onChange={changeHandler1} />{ erpass ? <span>invalid less than 4</span> : null} <br /> <br />
     <button type='submit'>submit</button>
    </form>
    
    </>
  )
}

export default Val