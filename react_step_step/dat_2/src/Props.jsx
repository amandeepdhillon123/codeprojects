    import React from "react"

    import { useState } from "react"
// function Pro({name,email,address}){
   
function Pro(props){
      
    const[name,setName] = useState("aman")
    // console.log(address)
     return(
        <>

        {/* 1st [hse ] */}
      {/* <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{address.city}</h1> */}

  {/* 2nd phase */}
      {/* <h1  style={{color:props.color}}>{props.name}</h1> */}
      {/* <h1>{props.email}</h1>
      <h1>{props.address.city}</h1>
      <h1>{props.address.capital}</h1> */}


     {/* updation pahse  */}

     



         <h1   >{name}</h1>

         <button  onClick={()=>(setName("amandeep"))}>Update Name</button>
        </>
     )




}

export default Pro