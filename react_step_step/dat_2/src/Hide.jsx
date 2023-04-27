
  import React from "react";

function Toggle(){
    
   const[status,setStatus]= React.useState(true)
 
    return(
        <>

        {
            status ?    <h1> hello mein aagya</h1> : null 
        }
         
         <button onClick={()=> setStatus(false)}>Hide</button>
         <button onClick={()=> setStatus(true)}>show</button>
         <button onClick={()=> setStatus(!status)}>Toggle</button>
        
           </>
    )
}

export default  Toggle;