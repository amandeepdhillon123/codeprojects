
import React from "react";
import { useState } from "react";

function State(){
 
    // const [name,updateNam] = useState("aman")

      const[num,setNum] = useState(0)

    // function updateName(){
        
    //     updateNam("amandeep Dhillon")
    // }


    function incNum(){

          setNum( num + 1)
    }

    function decNum(){

        setNum( num - 1)
  }
    
    return(
      <>
         {/* <h1>{name}</h1>
       <button onClick={updateName}>click me</button> */}


       <h1>{num}</h1>
       <button onClick={incNum}>click me</button> 
       <button onClick={decNum}>click me</button> 
        </>
    )
}

export default State;