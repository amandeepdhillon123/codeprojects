import React from 'react'
import Lift1 from './Lift1'
function Lift() {

    function show(obj){
        console.log(" iam parent")
        console.log(obj.name)
    }
  return (
    <>
    <Lift1 data={show}/>
    
    </>
  )
}

export default Lift