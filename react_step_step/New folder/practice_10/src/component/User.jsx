import React, { useEffect } from 'react'

function User(props) {

    useEffect(()=>{
       console.log("update")
    },[props.data])

    useEffect(()=>{
        console.log("update")
     },[props.count])
  return (
    <>
      <h1>{props.data}</h1>
   {/* <button onClick={()=>setData(data + 1)}>Update props</button> */}
     
   <h1>{props.count}</h1>
   {/* <button onClick={()=>setCount(count + 1)}>Update props</button> */}
    </>
  )
}

export default User