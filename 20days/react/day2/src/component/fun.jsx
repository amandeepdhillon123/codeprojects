import React from 'react'
import { useState } from 'react'
const Fun = () => {

    const[name,setname] = useState("ram")
    const[count,setcount]= useState(0)
    function change (){
        setname("shyma")
    }
    function inc(){
        setcount(count + 1)
    }
    return(
    <div>
        <h1>{name}</h1>
        <h2>{count}</h2>
        <button onClick={inc}>click </button>
        <button onClick={change}>click me</button>
    </div>

  )
}

export default Fun