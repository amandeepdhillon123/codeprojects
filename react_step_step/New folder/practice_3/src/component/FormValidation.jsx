import React, { useState } from 'react'

const FormValidation = () => {

    const[user,setUser]= useState('')
    const[pass,setPass]= useState('')

    const[err,setErr]= useState(false)
    const[perr,setPasErr]= useState(false)


     function getData(e){
        e.preventDefault();

        // console.log(user.length)
        // console.log(pass.length)
        {
            (user.length <3 || pass.length <3) ?
            alert("please proveide valid input ") :
            alert("log in successful")
        }
     }
    function userHandler(e){
    
        // console.log(e.target.value)

        // setUser(e.target.value)

        let item= e.target.value

        {
            // item.length < 3 ?
            // console.log("input valid"):
            // null

            item.length < 3 ?
           setErr(true):setErr(false)
            


        
        }

        setUser(item)
    }

    function passHandler(e){
    
        // console.log(e.target.value)

        // setPass(e.target.value)
        let item= e.target.value

        {
        //     item.length < 3 ?
        //    console.log("input valid"):
        //     null

        item.length < 3 ?
        setPasErr(true):
        setPasErr(false)
         
        
        }
        setPass(item)
    }
  return (
    <>

<h1> logIn</h1>
<form  onSubmit={getData}> 

    <input type="text" placeholder='user' onChange={userHandler} /> { err ? <span>User not valid </span>:""} <br /><br />
    <input type="text" placeholder='password'  onChange={passHandler} /> { perr ? <span>Password  not valid </span>:""} <br /> <br />
  <button type='submit'>Submit</button>
</form>


    </>
  )
}

export default FormValidation