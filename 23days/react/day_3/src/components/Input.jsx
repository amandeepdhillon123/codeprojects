import React, { useState } from 'react'

const Input = () => {
  const [data,setData]= useState("get data from input")
  const [print,printData] = useState(false)
  
   function getData(e){
        console.log(e.target.value)
        setData(e.target.value)
        printData(false)
    }   
  return (
    <div>
         <h1>{print ? <h1> {data }</h1>: null}</h1>
        <input type="text" onChange={getData} />
      <button onClick={printData}>print</button>
    </div>
  )
}

export default Input