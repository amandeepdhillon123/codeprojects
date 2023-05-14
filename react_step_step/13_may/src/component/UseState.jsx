
  import { useState } from "react"

let State =()=>{

    const[name,setName] = useState("amandeep")
    const[number,setNumber] = useState(0)

  function Data(){
        
   setName("Dhillon Shab")
  }

  function incHandler(){

    setNumber(number + 1)

  }

  function decHandler(){

    setNumber(number - 1)
    
  }

    return(
        <>
          <h1> Update with use state in Function </h1>  

          <h2>{name}</h2>
       
          <button onClick={()=>Data()}>State_Change</button> <br/>
           <h2>{number}</h2>
          <button onClick={incHandler}>Increase</button> 
          
          <button onClick={decHandler}>Decrease</button>
        
        
        
        
        
        
        
        
        
        </>
    )


}

export default State;