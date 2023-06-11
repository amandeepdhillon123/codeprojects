import React from 'react'
import Props1 from './Props1'
const Props = () => {

    let data=[{vpo:"jsdhjdbf", pin: 12133}]
  
    function show(){

        alert("hello")
    }
    return (
    <>
      <Props1 name="amandeep" number="44" value= {true} data={data[0]} fun={show}  fuc={()=>alert("jai")} />
    </>
  )
}

export default Props