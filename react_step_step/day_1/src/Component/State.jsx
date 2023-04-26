 
 import React from "react";
 import { useState } from "react";

 function Sta(){

//    const [data,setData] =useState("Deep")
      
const [data,setData] =useState(0)


   function Apple(){
    
    // setData("aman")

    setData(data+1)
   }

   function App(){
    
    // setData("aman")

    setData(data-1)
   }

   return(
    <>
        <h1>{data}</h1>
        {/* <button onClick={Apple}>Click Me</button> */}
        <button onClick={Apple}>inc</button>
        <button onClick={App}>dec</button>
        

      
    </>
   )
   }
   export default Sta;

    










 