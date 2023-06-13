import React from 'react'
import { useEffect,useState } from 'react'
import User from './User';
function Effec1() {
   const[data,setData] = useState(10);
   const[count,setCount] = useState(100);
     useEffect(() =>{
     console.log("use Effect called")
     },[count])
     useEffect(() =>{
        console.log("use Effect called")
        },[data])
  return (
    <>
    <User count={count}  data={data} />
      {/* <h1>{data}</h1> */}
  <button onClick={()=>setData(data + 1)}>Update count</button>
     
   {/* <h1>{count}</h1> */}
   <button onClick={()=>setCount(count + 1)}>Update count</button> 
    
    </>
  )
}

export default Effec1