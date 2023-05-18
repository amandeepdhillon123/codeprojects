  import React, { useState } from "react";

  import { Component } from "react";
function Render(){

    const[loggedIn,setloogedIn]=useState(false)
    // if(loggedIn)
    // {
       
    //     return(
    //         <div>
    //         <h1> welcome aman </h1>
    //        </div>
    //     )
       
    // }
    // else{
    //     return(
    //         <div>
    //         <h1>welcome amandeep dhillon </h1>
    //        </div>
    //     )
         
    // }

//   1,2,3
    return(

        <div>
            {
                loggedIn == 1 ? 

                <h1> aman</h1> : 
                 loggedIn == 2? 
                 <h1> aman 2</h1>  : <h1>aman3</h1>

                

            }
        </div>
       
       
    )

   
}

export default  Render;