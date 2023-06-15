import React from 'react'
import { useState } from 'react'
function Hoc() {
  return (
    <div>
    
        <h1>HOC</h1>
     <HOCRed cmp={Counter}/> 
     <HOCGreen cmp={Counter}/> 
    </div>
  )
}

function HOCRed(props){
     
    return (
        <>
        <h2 style={{color:'red'}}><props.cmp/></h2>
       
        </>
    )
    
}

function HOCGreen(props){
     
    return (
        <>
        <h2 style={{color:'green'}}><props.cmp/></h2>
       
        </>
    )
    
}

function Counter(){
       const[count,setCount]=useState(0)
    return(
    <div>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count + 1)}>update</button>
    </div>
    )
}

export default Hoc