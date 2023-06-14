import React from 'react'
 import { useState,useMemo } from 'react'
function Memo() {
  const[count,setCount]= useState(1)
  const[item,setItem]= useState(0)
  // function multicount(){
  //   console.log("rerendering ")
  //    return count *5;
  // }

  const multicount= useMemo(()=>{
    console.log("rerendering ")
    return count *5;
  },[count])
  return (
    <div>
      <h2> count : {count} </h2>
      <h2> item :  {item}  </h2>
      <h2>{multicount}</h2>
      <button onClick={()=> setCount(count + 1)}>update count</button>
     <button onClick={()=> setItem(item + 10 )}>update item</button>
    </div>
  )
}

export default Memo