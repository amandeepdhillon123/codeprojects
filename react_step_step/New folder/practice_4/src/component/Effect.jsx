import React from 'react'
import { useEffect,useState } from 'react'
const Effect = () => {
 const[count,setCount] = useState(0);


    useEffect(()=>{
        //  alert("hello")

        console.log("har load pe chlega ")  // compnenet did mount


    },[count < 5])
  return (
    <div>

        <h1>hello ji kais ho sare {count} </h1>

        <button onClick={()=> setCount(count + 1)}>Update Counter</button>
    </div>
  )
}

export default Effect