
import React from "react";
import { useState } from "react";
function Logic(){
    
    const[user,setUser]=useState("")
    const[pass,setPass]=useState("")

    // validation    
    const[userErr,setUserErr] =useState(false)
    const[passErr,setPassErr] =useState(false)
    function getData(e){

        if(user.length < 3 || pass.length < 3)
        {
            alert("type correct values") 
        }
        else{
            alert("     sbhi ache ahai ")
        }
        e.preventDefault();
    // console.log(user,pass)
      

    }

    function userHandler(e){
        
      let item =  e.target.value;
    //   if(item.length < 3)
    //   {
    //     setUserErr(true)  
    //   }
    //   else{
    //       setUserErr(false)
    //   }



    item.length <3 ?  setUserErr(true) : setUserErr(false)
      
    setUser(item)

    }

    function passHandler(e){
        
        let item =  e.target.value;
      //   if(item.length < 3)
      //   {
      //     setUserErr(true)  
      //   }
      //   else{
      //       setUserErr(false)
      //   }
  
      
  
      item.length <3 ?  setPassErr(true) : setPassErr(false)
      
      
      setPass(item)
  
      }
    return(
        <>
     <h1>login</h1>

     <form onSubmit={getData}>

     {/* <input type="text" placeholder="enter user id" onChange={(e) => setUser(e.target.value)}/> <br/><br/> */}
     {/* <input type="text" placeholder="enter user password" onChange={(e) => setPass(e.target.value)}/> <br/><br/> */}



     <input type="text" placeholder="enter user id" onChange={userHandler}/> {userErr? <span>user valid</span> : ""}<br/><br/> 
     <input type="text" placeholder="enter user password" onChange={passHandler}/>  {passErr? <span>user valid</span> : ""}<br/><br/>
  <button type="submit">LogIn</button>
      </form>  
        </>
    )
}

export default Logic;