import React, { useState, useMemo } from 'react'

function Memo() {

    const[num,setNum]= useState(0)
    const[count,setCount]= useState(1)
  
    const multiCountMemo= useMemo(
        function multiCount(){
            console.log("amandeep")
             return count * 5
        },[count]
    )

    
  return (

    <div>
        <h1>{num}</h1>
        <h1>{multiCountMemo}</h1>
        <button onClick={()=> setNum(num + 1)}>update</button>
        <h1> multicount:{count}</h1>
        <button onClick={()=> setCount(count + 10)}>update</button>
    
    </div>
  )
}

export default Memo