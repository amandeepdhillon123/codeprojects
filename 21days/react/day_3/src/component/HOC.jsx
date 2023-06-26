import React from 'react'
import { useState } from 'react'
function HOC() {
  return (
    <div>
       <Ram cmp={HocC}/>
       <RamGreen cmp={HocC}/>
    </div>
  )
}

function Ram(props){
    return <h2 style={{color:"red"}}><props.cmp/></h2>
}
function RamGreen(props){
    return <h2 style={{color:"green"}}><props.cmp/></h2>
}

function HocC() {
    const[num,setNum]=useState(0)
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num + 1)}>update</button>
    </div>
  )
}

export default HOC