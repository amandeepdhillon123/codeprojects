import React from 'react'
import User from './User';
import { useState } from 'react'

function Efff() {

    const [data,setData] =useState(10);

    const[count,setCount] = useState(100)
  return (
        <>
        {/* <h1>Count : {count} </h1>
        <h1>Data : {data}</h1> */}
       <User count ={count} data={data} /> 

       <button onClick={() => setCount(count + 1)}>update Count</button>
       <button onClick={() => setData(data + 1)}>update Data</button>
        
        </>
  )
}

export default Efff