import React from 'react'
  import { useState } from 'react'
function One() {

      const[num,setNum]=useState({
        "name":"",
        "pass":""
      })
  function  changeHandler(e){
        
        setNum({...num,[e.target.name]: e.target.value})
    }

   function getData(e)
   {  
     e.preventDefault();

     console.log(num.name)
     console.log(num.pass)

   }

  return (
    <div>
        <form  onSubmit={getData}>
   Name:<input  name="name" type="text"  onChange={changeHandler} />  <br /> <br />
   Pass:<input name="pass" type="text"  onChange={changeHandler} /> <br /> <br />
   <input type="submit" />
   </form>
  

    </div>
  )
}

export default One