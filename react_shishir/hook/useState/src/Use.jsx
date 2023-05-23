import React from 'react'

import { useState } from 'react'

const Use = () => {
   
    const[num,setNum] =useState(5)

    // function handlerNum(){
    //     setNum(num + 25)
    //     setNum(num + 20)
    // }

    
    function handlerNum(){
        setNum(prev => prev + 25)
        setNum(prev => prev + 25)
    }
  
    return (
        <>
        <h1>{num}</h1>

        <button onClick={handlerNum}>update</button>
        
        
        
        
        
        </>
   

  )
}

export default Use